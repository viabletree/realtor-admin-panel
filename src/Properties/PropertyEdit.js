import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  TopToolbar,
  ListButton,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  DateInput,
  regex,
  NumberInput,
  ImageInput,
  ImageField,
} from "react-admin";
import PropTypes from "prop-types";
import { RESOURCES } from "../constants";
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};
const validatePropertyAdd = [required("Property Address is required")];
const validatePropertyYearBuilt = [
  regex(
    /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "Must be a valid date"
  ),
  required("property year built is required"),
];
const validateSqft = [
  required("SQFT is required"),
  regex(/^.*\S.*$/, "Only spaces are not allowed"),
];
const validateArea = [required("Area is required")];
const validatePrice = [required("Price is required")];
const validateType = [required("Property Type is required")];
const validatePropertyDes = [required("Property Description is required")];
const validatePropertyTitle = [
  required("Property Title is required"),
  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid title"),
];

const UserEdit = (props) => (
  <Edit
    {...props}
    undoable={false}
    actions={<UserShowActions />}
    successMessage="Property updated successfully"
  >
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput
        source="property_address"
        inputProps={{ maxLength: 100 }}
        validate={validatePropertyAdd}
      />
      <ReferenceInput
        label="select user"
        source="user_id"
        reference={RESOURCES.users}
        //filter={{ is_artist: true }}
      >
        <SelectInput
          optionText="full_name"
          inputProps={{ maxLength: 100 }}
          validate={validateType}
        />
      </ReferenceInput>

      <ImageInput
        source="images"
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
        multiline={true}
        source="property_title"
        validate={validatePropertyTitle}
      />
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        source="property_description"
        validate={validatePropertyDes}
      />
      <NumberInput
        source="property_price"
        inputProps={{ maxLength: 100 }}
        validate={validatePrice}
      />
      <SelectInput
        source="property_type_id"
        choices={[
          { id: "1", name: "residential" },
          { id: "2", name: "commercial" },
          { id: "3", name: "land" },
        ]}
      />
      <TextInput
        inputProps={{ maxLength: 100 }}
        multiline={true}
        source="property_area"
        validate={validateArea}
      />
      <TextInput
        inputProps={{ maxLength: 100 }}
        source="property_square_feet"
        multiline={true}
        validate={validateSqft}
      />
      <DateInput
        source="property_year_built"
        label="property year built"
        options={{ format: "MM/DD/YYYY", ampm: false, clearable: true }}
        validate={validatePropertyYearBuilt}
      />
      {/*  <TextInput source="latitude" validate={[required()]} />
            <TextInput source="longitude" validate={[required()]} />
            */}
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
