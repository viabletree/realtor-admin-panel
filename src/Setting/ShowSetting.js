import {useCallback} from 'react';
import {
  Show,
  TextField,
  ShowController,
  TabbedShowLayout,
  Tab,
  Datagrid,
  ArrayField,
  ImageField,
  ListButton,
  TopToolbar,
  DateField,
  TextInput,
  SimpleShowLayout,
  ReferenceField
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import ImageAvatar from '../components/ImageAvatar';
import PropTypes, { element } from 'prop-types';
import ResponsiveGallery from 'react-responsive-gallery';
//import moment from 'moment';
import moment from 'moment-timezone';
import _ from 'lodash';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.tz.setDefault('UTC/Etc');

let offset = new Date().getTimezoneOffset();

const UserTitle = ({ record }) => {
  return record && record.name && (
    <span>{record.name}</span>
  );
};
const ShowFaqs = (props) => {
  console.log({props})
  return (    
    
        <Show
          {...props}
                      
        >

                 <SimpleShowLayout className={"textWrapperStyle"}>

             <TextField label="Terms and Condition" source="term_and_condition" />
             <TextField label="about us" source="about_us" />
             <TextField label="privacy_policy" source="privacy_policy" />
             {/* <ReferenceField source="property_id" label= "Property Name" reference="properties"><TextField source="property_title" /></ReferenceField> */}
              </SimpleShowLayout>

                 
        </Show>
     
    
  );
};

export default ShowFaqs;
