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
  AutocompleteInput
} from 'react-admin';

const validateName = [required('Name is required')];
const validateEmail = [required('Email is required'), email('Incorrect Email')];
const validatePassword = [required('Password is required'), minLength(6)];

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
            <TextInput source="property_address" validate={[required()]} />
            <TextInput source="property_title" validate={[required()]} />
            <TextInput source="property_description" validate={[required()]} />
            <TextInput source="property_price" validate={[required()]} />
            <TextInput source="property_area" validate={[required()]} />
            <TextInput source="property_square_feet" validate={[required()]} />
            <TextInput source="property_year_built" validate={[required()]} />
            <TextInput source="latitude" validate={[required()]} />
            <TextInput source="longitude" validate={[required()]} />
      
    </SimpleForm>
  </Create>
);

export default UserCreate;
