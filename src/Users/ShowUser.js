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
  Labeled,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes, { element } from "prop-types";
import ResponsiveGallery from "react-responsive-gallery";
//import moment from 'moment';
import moment from "moment-timezone";
import _, { get, startCase } from "lodash";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.tz.setDefault("UTC/Etc");

let offset = new Date().getTimezoneOffset();

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};
const CustomTextField = (props) => (
  <Labeled label={props.label ? props.label : startCase(props.source)}>
    <span>{get(props.record, props.source)}</span>
  </Labeled>
);
const CustomTimeField = (props) => {
  let value = moment(props.record[props.source]).format("hh:mm:ss A");

  const recordWithTimestampAsInteger = {
    [props.source]: value,
  };

  return (
    <CustomTextField
      source={props.source}
      record={recordWithTimestampAsInteger}
    />
  );
};
const ShowUser = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout className={"textWrapperStyle"}>
        <TextField source="id" label="User Id" />
        <TextField source="full_name" />
        <TextField label="Phone" source="phone" />

        <TextField label="Agency Name" source="agency_name" />
        <TextField label="Location" source="location" />
        <CustomTimeField label="Availability From" source="availability_from" />
        <CustomTimeField label="Availability To" source="availability_to" />
        <TextField label="Bio" source="bio" />
        <ImageField label="Profile Image" source="profile_image" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ShowUser;
