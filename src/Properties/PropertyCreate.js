import _ from "lodash";
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
  ImageInput,
  ImageField,
  useRedirect,
} from "react-admin";
import { TimeInput } from "react-admin-date-inputs2";
import { RESOURCES } from "../constants";

const validatePropertyCreation = (values) => {
  const errors = {};
  //price validation

  if (_.isNil(values.property_price)) {
    errors.property_price = "Price is required";
  } else if (values.property_price > 999999999) {
    errors.property_price = "Price should not be more than 10 characters";
  }

  if (_.isUndefined(values.property_area)) {
    errors.property_area = "Property area is required";
  } else if (_.size(values.property_area) > 100) {
    console.log(values.property_area);
    errors.property_area = "Characters must not be more than 100";
  }

  if (_.isNil(values.property_square_feet)) {
    errors.property_square_feet = "SQFT is required";
  } else if (values.property_square_feet > 999999999) {
    errors.property_square_feet = "SQFT should not be more than 10 characters";
  }



  return errors;
};

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
  const redirect = useRedirect();
  return (
    <Create
      {...props}
      onSuccess={() => {
        notify(`Property created successfully`);
        redirect("list", "/properties");
      }}
    >
      <SimpleForm validate={validatePropertyCreation}>
        <ReferenceInput
          label="Select user"
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
          label="Property year built"
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validatePropertyYearBuilt}
        />
        <ImageInput
          source="property_images"
          label="Upload image"
          accept="image/*"
          placeholder={<p>Drop your picture here</p>}
          validate={[required()]}
          multiple
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput
          inputProps={{ maxLength: 100 }}
          source="property_title"
          validate={validatePropertyTitle}
        />

        <TextInput
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
          // inputProps={{ maxLength: 10 }}
          // validate={validatePrice}
        />
        <TextInput
          // inputProps={{ maxLength: 100 }}
          source="property_area"
          //  validate={validateArea}
        />
        <NumberInput
         // inputProps={{ maxLength: 100 }}
          source="property_square_feet"
          //validate={validateSqft}
        />
        {/*  <TextInput source="latitude" validate={[required()]} />
            <TextInput source="longitude" validate={[required()]} />
       */}
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
