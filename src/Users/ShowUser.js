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
  SimpleShowLayout
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
const ShowUser = (props) => {
  console.log({props})
  return (    
    
        <Show
          {...props}
                      
        >

                 <SimpleShowLayout className={"textWrapperStyle"}>

              <TextField source="id" label="User Id" />
              <TextField source="full_name" />
              <TextField label="Agency Name" source="agency_name" />
              <TextField label="Location" source="location" />
              <TextField label="Availability From" source="availability_from" />
              <TextField label="Availability To" source="availability_to" />
              <TextField label="Bio" source="bio" />
              </SimpleShowLayout>

                 
        </Show>
     
    
  );
};

export default ShowUser;
