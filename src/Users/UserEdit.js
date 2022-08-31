import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  TopToolbar,
  ListButton,
  DateTimeInput,
  DateInput,
  regex,
} from "react-admin";
import PropTypes from "prop-types";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TimeInput } from "react-admin-date-inputs2";
import DateFnsUtils from "@date-io/date-fns";

const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};

const validateFulName = [
  required("Full name is required"),
  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid name"),
];

const UserEdit = (props) => (
  <Edit
    {...props}
    undoable={false}
    actions={<UserShowActions />}
    successMessage="User updated successfully"
  >
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput
        inputProps={{ maxLength: 40 }}
        multiline={true}
        source="full_name"
        validate={validateFulName}
      />
      <TextInput
        inputProps={{ maxLength: 30 }}
        multiline={true}
        source="agency_name"
        validate={[required("Agency name is required")]}
      />
      <TextInput
        inputProps={{ maxLength: 50 }}
        multiline={true}
        source="location"
        validate={[required("Location is required")]}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimeInput
          source="availability_from"
          label="Availability From"
          options={{ format: "hh:mm:ss" }}
          validate={[required("Availability from time is required")]}
          inputProps={{ variant: "filled" }}
          className="availableTimeField"
        />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimeInput
          source="availability_to"
          label="Availability To"
          options={{ format: "hh:mm:ss", variant: "filled" }}
          validate={[required("Availability to time is required")]}
          inputProps={{ variant: "filled" }}
          className="availableTimeField"
        />
      </MuiPickersUtilsProvider>
      <TextInput
        multiline={true}
        source="bio"
        inputProps={{ maxLength: 255 }}
        validate={[required("Bio is required")]}
      />

      {/* <TextInput source="users" validate={[required()]} /> */}
    </SimpleForm>
  </Edit>
);

UserShowActions.propTypes = {
  basePath: PropTypes.string,
};

UserEdit.propTypes = {
  record: PropTypes.object,
  label: PropTypes.string,
};

UserTitle.propTypes = {
  record: PropTypes.object,
  label: PropTypes.string,
};

export default UserEdit;
