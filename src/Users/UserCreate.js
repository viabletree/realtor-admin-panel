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
  <Create {...props} successMessage="User created successfully">
    <SimpleForm>
    <TextInput source="name" inputProps={{ maxLength: 40 }} validate={[required()]}/>
              <TextInput source="email" inputProps={{ maxLength: 18 }} validate={[required()]}/>
              <TextInput label="Password" source="password" inputProps={{ maxLength: 18 }} validate={[required()]}/>
              <TextInput label="Confirm Password" source="confirm_password" inputProps={{ maxLength: 18 }} validate={[required()]}/>
              <NumberInput label="Phone Number" source="phone" inputProps={{ maxLength: 18 }} validate={[required()]}/>
              <TextInput multiline={true} label="Agency Name" inputProps={{ maxLength: 30 }} source="agency_name" validate={[required()]}/>
              <TextInput label="Location" source="location" inputProps={{ maxLength: 255 }} validate={[required()]}/>
              <TextInput label="Availability From" source="availability_from" validate={[required()]}/>
              <TextInput label="Availability To" source="availability_to" validate={[required()]}/>
              <TextInput multiline={true}label="Bio" source="bio" inputProps={{ maxLength: 255 }} validate={[required()]}/>
             
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
