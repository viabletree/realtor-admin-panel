import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  NumberInput,
  email,
  minLength,
  PasswordInput,
  ReferenceInput,
  AutocompleteInput,
  TextField,
  DateTimeInput,
} from "react-admin";
import { TimeInput } from "react-admin-date-inputs2";
import DateFnsUtils from "@date-io/date-fns";

const validateName = [required("Name is required")];
const validateEmail = [required("Email is required"), email("Incorrect Email")];
const validatePassword = [required("Password is required"), minLength(6)];

const UserCreate = (props) => (
  <Create {...props} successMessage="User created successfully">
    <SimpleForm>
      <TextInput
        source="full_name"
        inputProps={{ maxLength: 100 }}
        validate={[required()]}
      />
      <TextInput
        source="email"
        inputProps={{ maxLength: 100 }}
        validate={[required()]}
      />
      <TextInput
        label="Password"
        source="password"
        inputProps={{ maxLength: 100 }}
        validate={[required()]}
      />
      <TextInput
        label="Confirm Password"
        source="confirm_password"
        inputProps={{ maxLength: 100 }}
        validate={[required()]}
      />
      <NumberInput
        label="Phone Number"
        source="phone"
        inputProps={{ maxLength: 100 }}
        validate={[required()]}
      />
      <TextInput
        multiline={true}
        label="Agency Name"
        inputProps={{ maxLength: 100 }}
        source="agency_name"
        validate={[required()]}
      />
      <TextInput
        label="Location"
        source="location"
        inputProps={{ maxLength: 100 }}
        validate={[required()]}
      />
      {/* <TextInput label="Availability From" source="availability_from" validate={[required()]}/>
              <TextInput label="Availability To" source="availability_to" validate={[required()]}/> */}

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimeInput
          source="availability_from"
          label="Availability From"
          options={{ format: "hh:mm:ss" }}
          validate={[required()]}
          inputProps={{ maxLength: 255 }}
        />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimeInput
          source="availability_to"
          label="Availability To"
          options={{ format: "hh:mm:ss", variant: "filled" }}
          validate={[required()]}
          inputProps={{ maxLength: 255, variant: "filled" }}
        />
      </MuiPickersUtilsProvider>
      <TextInput
        multiline={true}
        label="Bio"
        source="bio"
        inputProps={{ maxLength: 255 }}
        validate={[required()]}
      />

      {/*   <TextInput source="agency_name" validate={[required()]}/>
              <TextInput source="location" validate={[required()]}/>
              <TextInput source="availability_from" validate={[required()]}/>
              <TextInput source="availability_to" validate={[required()]}/>
              <TextInput source="bio" validate={[required()]}/>
             */}
    </SimpleForm>
  </Create>
);

export default UserCreate;
