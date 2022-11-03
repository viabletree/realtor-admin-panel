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
  useRedirect,
} from "react-admin";
import PropTypes from "prop-types";
import { RESOURCES } from "../constants";
import _ from 'lodash';

const validatePropertyEdit = (values) => {
  const errors = {};
  //price validation
  if (_.isNil(values.property_price)) {
    errors.property_price = "Price is required";
  } else if (values.property_price > 999999999) {
    errors.property_price = "Price should not be more than 10 characters";
  } 
  var re = /^(\d+)?(?:\.\d{1,3})?$/;

  // if (_.isUndefined(values.property_area)) {
  //   errors.property_area = "Property area is required";
  // } else if (re.test(values.property_area) === false) {
  //   errors.property_area = "Property area value is not valid";
  // }

  
  if (_.isUndefined(values.property_area)) {
    errors.property_area = "Property area is required";
  } else if (_.size(values.property_area) > 100) {
    errors.property_area = "Characters must not be more than 100";
  }

  if (_.isNil(values.property_square_feet)) {
    errors.property_square_feet = "SQFT is required";
  } else if (values.property_square_feet > 999999999) {
    errors.property_square_feet = "SQFT should not be more than 10 characters";
  }


  return errors;
};
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};
const validatePropertyAdd = [required("Property Address is required")];
const validatePropertyYearBuilt = [required("property year built is required")];
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

const UserEdit = (props) => 
{
  const redirect = useRedirect();
 
 const onSuccess = () => {
   redirect("list", "properties");
 };
  return (
  <Edit
    {...props}
    undoable={false}
    actions={<UserShowActions />}
    successMessage="Property updated successfully"
    success={onSuccess}
  >
    <SimpleForm validate={validatePropertyEdit}>
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
        source="property_images"
        label="Upload image"
        accept="image/*"
        placeholder={<p>Drop your picture here</p>}
        validate={[required()]}
        multiple
      >
        <ImageField source="path" title="title" />
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
       // inputProps={{ maxLength: 10 }}
       // validate={validatePrice}
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
        source="property_area"
        />
      <NumberInput
        source="property_square_feet"
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
          }

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
