import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  Create,
  Edit,
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
  regex,
  ImageInput,
  ImageField,
} from "react-admin";
import { TimeInput } from "react-admin-date-inputs2";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import _ from "lodash";

const confirmPswdMatchedValidation = (value, allValues) => {
  if (value !== allValues.password) {
    return "New password and confirm password must be match";
  }
  return undefined;
};
const validatePhoneNu = (values) => {
  const errors = {};
  //price validation
  
  if (_.isNil(values.phone)) {
    errors.property_price = "Price is required";
  } else if (values.phone > 99999999999999999999) {
    errors.phone = "Phone should not be more than 20 digits";
  } else if (values.phone < 9999999) {
    errors.phone = "Phone should not be less than 08 digits";

  } 

  return errors;
};
const validateEndTime = (value, allValues) => {
  let startTime = moment(allValues.availability_from).format("hh:mm:ss a");
  let endTime = moment(value).format("hh:mm:ss a");
  if (startTime > endTime) {
    return "End time should be greater than start time";
  }
  return undefined;
};
const validateTime = [
  required("Availability to time is required"),
  validateEndTime,
  //  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid name"),
];
const validateFulName = [
  required("Full name is required"),
  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid name"),
];
const validateEmail = [
  required("Email is required"),
  email("Must be a valid email"),
];
const validatePassword = [required("Password is required"), minLength(6)];
const validateConfrimPassword = [
  required("Confirm Password is required"),
  minLength(6),
  confirmPswdMatchedValidation,
];

const PreviewImage = ({ record, source }) => {
  if (typeof record == "string") {
    record = {
      [source]: record,
    };
  }
  console.log({ record: record, source: source });
  return <ImageField record={record} source={source} />;
};

const UserEdit = (props) => (
  <Edit {...props} successMessage="User updated successfully">
    <SimpleForm validate={validatePhoneNu}>
      <TextInput
        source="full_name"
        inputProps={{ maxLength: 100 }}
        validate={validateFulName}
      />
      {/* <TextInput
        source="email"
        inputProps={{ maxLength: 100 }}
        validate={validateEmail}
      />
      <PasswordInput
        label="Password"
        source="password"
        inputProps={{ maxLength: 100 }}
        validate={validatePassword}
      />
      <PasswordInput
        label="Confirm Password"
        source="confirm_password"
        inputProps={{ maxLength: 100 }}
        validate={validateConfrimPassword}
      /> */}
      <TextInput
        multiline={true}
        label="Agency Name"
        inputProps={{ maxLength: 100 }}
        source="agency_name"
        validate={[required("Agency name is required")]}
      />
      <TextInput
        label="Location"
        source="location"
        inputProps={{ maxLength: 100 }}
        validate={[required("Location is required")]}
      />
      {/* <ImageInput
        source="profile_image"
        label="Upload image"
        accept="image/*"
        placeholder={<p>Drop your picture here</p>}
        validate={[required()]}
      >
        <ImageField source="profile_image" title="title" />
      </ImageInput> */}
      <ImageInput source="profile_image" validate={[required()]} label="Upload Image" accept="image/*">
        <PreviewImage />
      </ImageInput>

      <NumberInput
        label="Phone Number"
        source="phone"
       // inputProps={{ maxLength: 100 }}
       // validate={[required("Phone Number is required")]}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimeInput
          source="availability_from"
          label="Availability From"
          options={{ format: "hh:mm:ss a", variant: "filled" }}
          validate={[required("Availability from time is required")]}
          inputProps={{ variant: "filled" }}
          className="availableTimeField"
        />
      </MuiPickersUtilsProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TimeInput
          source="availability_to"
          label="Availability To"
          options={{ format: "hh:mm:ss a", variant: "filled" }}
          validate={validateTime}
          inputProps={{ variant: "filled" }}
          className="availableTimeField"
        />
      </MuiPickersUtilsProvider>
      <TextInput
        multiline={true}
        label="Bio"
        source="bio"
        inputProps={{ maxLength: 255 }}
        validate={[required("Bio is required")]}
      />
      {/*   <TextInput source="agency_name" validate={[required()]}/>
              <TextInput source="location" validate={[required()]}/>
              <TextInput source="availability_from" validate={[required()]}/>
              <TextInput source="availability_to" validate={[required()]}/>
              <TextInput source="bio" validate={[required()]}/>
             */}
    </SimpleForm>
  </Edit>
);

export default UserEdit;
