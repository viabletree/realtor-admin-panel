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
      <TextInput source="name" validate={validateName} />
      <TextInput source="email" type="email" validate={validateEmail} />
      <NumberInput source="phone" />
      <PasswordInput source="password" validate={validatePassword} />
      <ReferenceInput label="Role" source="roleId" reference="roles" validate={[required()]}>
        <AutocompleteInput optionText="role_name" optionValue="id" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default UserCreate;
