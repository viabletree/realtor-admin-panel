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
const validateSqft = [required("SQFT is required")];
const validateArea = [required("Area is required")];
const validatePrice = [required("Price is required")];
const validateType = [required("Property Type is required")];
const validatePropertyDes = [required("Property Description is required")];
const validatePropertyTitle = [required("Property Title is required")];

const UserEdit = (props) => (
  <Edit
    {...props}
    undoable={false}
    actions={<UserShowActions />}
    successMessage="Property updated successfully"
  >
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="property_address" validate={validatePropertyAdd} />
      <ReferenceInput
        label="select user"
        source="user_id"
        reference={RESOURCES.users}
        //filter={{ is_artist: true }}
      >
        <SelectInput optionText="full_name" validate={validateType} />
      </ReferenceInput>

      <TextInput
        inputProps={{ maxLength: 20 }}
        multiline={true}
        source="property_title"
        validate={validatePropertyTitle}
      />
      <TextInput
        inputProps={{ maxLength: 200 }}
        multiline={true}
        source="property_description"
        validate={validatePropertyDes}
      />
      <TextInput source="property_price" validate={validatePrice} />
      <SelectInput
        source="property_type_id"
        choices={[
          { id: "1", name: "residential" },
          { id: "2", name: "commercial" },
          { id: "3", name: "land" },
        ]}
      />
      <TextInput
        inputProps={{ maxLength: 8 }}
        multiline={true}
        source="property_area"
        validate={validateArea}
      />
      <TextInput
        inputProps={{ maxLength: 8 }}
        source="property_square_feet"
        multiline={true}
        validate={validateSqft}
      />
      <DateInput
        source="property_year_built"
        label="property year built"
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
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
