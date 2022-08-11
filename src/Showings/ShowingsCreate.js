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
const validatePropertyID = [required('Property Name')]
const validateDes = [required('Description is required')]

const NoteCreate = (props) => (
  <Create {...props} successMessage="Property note created successfully">
    <SimpleForm>
            <ReferenceInput source="property_id" reference="properties"><SelectInput optionText="property_title" validate={validatePropertyID}/></ReferenceInput>
        
            <TextInput fullWidth source="description" inputProps={{ maxLength: 255 }} validate={validateDes}/>
       
    </SimpleForm>
  </Create>
);

export default NoteCreate;
