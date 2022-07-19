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
  SelectInput
} from 'react-admin';
const validateName = [required('Name is required')];
const validateEmail = [required('Email is required'), email('Incorrect Email')];
const validatePassword = [required('Password is required'), minLength(6)];

const NoteCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
            <ReferenceInput source="property_id" reference="properties"><SelectInput optionText="property_title" /></ReferenceInput>
        
            <TextInput source="description" />
       
    </SimpleForm>
  </Create>
);

export default NoteCreate;
