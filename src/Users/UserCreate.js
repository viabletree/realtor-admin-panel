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
  TextField
} from 'react-admin';
const validateName = [required('Name is required')];
const validateEmail = [required('Email is required'), email('Incorrect Email')];
const validatePassword = [required('Password is required'), minLength(6)];

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    <TextInput source="name" validate={[required()]}/>
              <TextInput source="email" validate={[required()]}/>
              <TextInput label="Password" source="password" validate={[required()]}/>
              <TextInput label="Confirm Password" source="confirm_password" validate={[required()]}/>
              <NumberInput label="Phone Number" source="phone" validate={[required()]}/>
              <TextInput label="Agency Name" source="agency_name" validate={[required()]}/>
              <TextInput label="Location" source="location" validate={[required()]}/>
              <TextInput label="Availability From" source="availability_from" validate={[required()]}/>
              <TextInput label="Availability To" source="availability_to" validate={[required()]}/>
              <TextInput label="Bio" source="bio" validate={[required()]}/>
             
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
