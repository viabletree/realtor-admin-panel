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
  SelectInput,
  DateInput,
  DateTimeInput,
  SelectField,
  useNotify,
  regex,
} from "react-admin";
import { TimeInput } from "react-admin-date-inputs2";
import { RESOURCES } from "../constants";

const validatePropertyAdd = [required("Property Address is required")];
const validatePropertyYearBuilt = [
  regex(
    /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "Must be a valid date"
  ),
  required("Poperty year built is required"),
];
const validateSqft = [
  required("SQFT is required"),
  regex(/^.*\S.*$/, "Only spaces are not allowed"),
];
const validateArea = [required("Area is required")];
const validatePrice = [required("Price is required")];
const validateType = [required("Property Type is required")];
const validateUser = [required("User is required")];
const validatePropertyDes = [required("Property Description is required")];
const validatePropertyTitle = [
  required("Property Title is required"),
  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid title"),
];

const UserCreate = (props) => {
  const notify = useNotify();
  return (
    <Create
      {...props}
      onSuccess={() => {
        notify(`Property created successfully`);
      }}
    >
      <SimpleForm>
        <ReferenceInput
          label="select user"
          source="user_id"
          reference={RESOURCES.users}

          //filter={{ is_artist: true }}
        >
          <SelectInput optionText="full_name" validate={validateUser} />
        </ReferenceInput>

        <TextInput
          source="property_address"
          inputProps={{ maxLength: 100 }}
          validate={validatePropertyAdd}
        />
        <DateInput
          source="property_year_built"
          label="property year built"
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validatePropertyYearBuilt}
        />
        <TextInput
          inputProps={{ maxLength: 100 }}
          source="property_title"
          validate={validatePropertyTitle}
        />

        <TextInput
          helperText="Max limit is 255 characters"
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="property_description"
          validate={validatePropertyDes}
        />

        <SelectInput
          source="property_type_id"
          choices={[
            { id: "1", name: "residential" },
            { id: "2", name: "land" },
            { id: "3", name: "commercial" },
          ]}
          validate={validateType}
        />
        <NumberInput
          source="property_price"
          inputProps={{ maxLength: 100 }}
          validate={validatePrice}
        />
        <TextInput
          inputProps={{ maxLength: 100 }}
          source="property_area"
          validate={validateArea}
        />
        <TextInput
          inputProps={{ maxLength: 100 }}
          source="property_square_feet"
          validate={validateSqft}
        />
        {/*  <TextInput source="latitude" validate={[required()]} />
            <TextInput source="longitude" validate={[required()]} />
       */}
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
