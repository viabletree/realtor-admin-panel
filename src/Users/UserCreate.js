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
  regex,
  ImageField,
  ImageInput,
  useNotify,
  useRedirect,
  maxLength,
} from "react-admin";
import { TimeInput } from "react-admin-date-inputs2";
import DateFnsUtils from "@date-io/date-fns";
import _ from "lodash";
import moment from "moment";

const confirmPswdMatchedValidation = (value, allValues) => {
  if (value !== allValues.password) {
    return "New Password and confirm password must be match";
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
// const confirmPhone = (value) => {
//   console.log(value)
//   if (value > 30 || value < 8 ) {
//     return "Phone number should be not less than 8 digits and greater than 20 digits";
//   }
//   return undefined;
// };
const checkIsEndTimeAfterStartTime = (startTime, endTime) => {
  const timeStart = moment(startTime, 'HH:mm:ss');
  const timeEnd = moment(endTime, 'HH:mm:ss');
  return timeEnd.diff(timeStart, 'minutes', true) <= 0;
};
const validateEndTime = (value, allValues) => {
  console.log({endTime:value, startTime: allValues.availability_from});
  // let startTime = moment(allValues.availability_from);
  // let endTime = moment(value);
  if(checkIsEndTimeAfterStartTime(allValues.availability_from, value)){
    return 'End Time should less than start time';
  }

  // const st = moment.utc(`2022-10-25 ${allValues.availability_from}`).local();
  // const end = moment.utc(`2022-10-25 ${value}`).local();
  // let startTime = moment(st).format("hh:mm:ss a");
  // let endTime = moment(end).format("hh:mm:ss a");
  return undefined;
};

const validateFulName = [
  required("Full name is required"),
  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid name"),
];
const validateDate = [
  required("Availability from time is required"),

  //  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid name"),
];

const validateTime = [
  required("Availability to time is required"),
  validateEndTime,
  //  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid name"),
];

const validateEmail = [
  required("Email is required"),
  email("Must be a valid email"),
];
const validatePassword = [
  required("Password is required"),
  minLength(8),
  regex(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Password must contain 8 characters including 1 small letter, 1 capital letter, 1 digit and 1 special character!"
  ),
];

// const validatePhone = [
//   required("Phone Number is required"),
//   confirmPhone 
// ];
const validateConfrimPassword = [
  required("Confirm Password is required"),
  minLength(8),
  confirmPswdMatchedValidation,
];
const UserCreate = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify("Property faq created successfully");
    redirect("list", "/users");
  };

  return (
    <Create {...props} onSuccess={onSuccess}>
      <SimpleForm validate={validatePhoneNu}>
        <TextInput
          source="full_name"
          inputProps={{ maxLength: 100 }}
          validate={validateFulName}
        />
        <TextInput
          source="email"
          autoComplete="off"
          inputProps={{ maxLength: 100 }}
          validate={validateEmail}
        />
        <PasswordInput
          label="Password"
          source="password"
          autoComplete="off"
          inputProps={{ maxLength: 100 }}
          validate={validatePassword}
        />
        <PasswordInput
          label="Confirm Password"
          source="confirm_password"
          inputProps={{ maxLength: 100 }}
          validate={validateConfrimPassword}
        />
        <ImageInput
          source="profile_image"
          label="Upload image"
          accept="image/*"
          placeholder={<p>Drop your picture here</p>}
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <NumberInput
          label="Phone Number"
          source="phone"
         // inputProps={{ maxLength: 100 }}
        //  validate={validatePhone}
        />
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
    </Create>
  );
};

export default UserCreate;
