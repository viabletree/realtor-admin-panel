import { useCallback } from "react";
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
  ReferenceField,
  NumberField,
  RichTextField,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes, { element } from "prop-types";
import ResponsiveGallery from "react-responsive-gallery";
//import moment from 'moment';
import moment from "moment-timezone";
import _ from "lodash";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.tz.setDefault("UTC/Etc");

let offset = new Date().getTimezoneOffset();

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};
const ShowUser = (props) => {
  console.log({ props });
  return (
    <Show {...props}>
      <SimpleShowLayout className={"textWrapperStyle"}>
        <TextField source="id" />
        <TextField source="property_title" />
        <ReferenceField source="user_id" reference="users">
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField source="property_type_id" reference="property_types">
          <TextField source="category_name" />
        </ReferenceField>
        <TextField source="property_address" />
        <RichTextField source="property_description" />
        <NumberField source="property_price" />
        <NumberField source="property_area" />
        <NumberField source="property_square_feet" />
        <DateField source="property_year_built" />
        <ImageField source="property_images" src="path" title="id" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowUser;
