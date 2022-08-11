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
const validateQes = [required('Please enter question')]
const validateAns = [required('Please enter answer')]

const FaqCreate = (props) => (
  <Create {...props} successMessage="Property faq created successfully">
    <SimpleForm>
            {/* <ReferenceInput source="property_id" reference="properties"><SelectInput optionText="property_title" validate={validatePropertyID}/></ReferenceInput> */}
        
            <TextInput fullWidth source="question" inputProps={{ maxLength: 100 }} validate={validateQes}/>
            <TextInput fullWidth source="answer" inputProps={{ maxLength: 255 }} validate={validateAns}/>
       
    </SimpleForm>
  </Create>
);

export default FaqCreate;
