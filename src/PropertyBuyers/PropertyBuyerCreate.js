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
  DateInput,
  SelectInput
} from 'react-admin';

const validateName = [required('Name is required')];
const validateEmail = [required('Email is required'), email('Incorrect Email')];
const validatePassword = [required('Password is required'), minLength(6)];

const UserCreate = (props) => (
  <Create {...props} successMessage="Buyer created successfully">
   <SimpleForm>
            <ReferenceInput source="property_id" reference="properties"><SelectInput optionText="property_title" /></ReferenceInput>
     
            <TextInput inputProps={{ maxLength: 50 }} source="buyer_name" />
            <TextInput inputProps={{ maxLength: 50 }} multiline={true} source="address" />
            <TextInput inputProps={{ maxLength: 50 }} multiline={true} source="title_company_closer" />
            <NumberInput source="amount_of_contract" />
            <SelectInput source="is_contract_to_lender" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <DateInput source="contract_to_lender_date" />
            
            <SelectInput source="is_earnest_money_received" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
            <DateInput source="earnest_money_received_date" />
            <SelectInput label="Is CDA Sent" source="is_cda_sent" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
            <SelectInput label="Is Home Warranty" source="is_home_warranty" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <DateInput source="home_warranty_date" />
            
            <SelectInput label="is switch over utilities" source="is_switch_over_utilities" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <SelectInput source="is_survey_received" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
            <SelectInput source="is_new_survey" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <TextInput inputProps={{ maxLength: 200 }} multiline={true} source="new_survey_info" />
            
            <DateInput source="home_inspection_date" />
            <TextInput inputProps={{ maxLength: 200 }} multiline={true} source="home_inspection_info" />
            <DateInput source="termite_inspection_date" />
            <DateInput source="appraisal_date" />
            <DateInput source="appraisal_due_date" />
            <TextInput inputProps={{ maxLength: 200 }} multiline={true} source="appraisal_additional_info" />
            <DateInput source="closing_date" />
            <DateInput inputProps={{ maxLength: 200 }} multiline={true} source="closing_additional_info" />
            <DateInput source="title_commitment" />
            
            
            <DateInput source="option_period_end" />
            <TextInput inputProps={{ maxLength: 200 }} multiline={true} source="termite_inspection_info" />
            <TextInput inputProps={{ maxLength: 200 }}  multiline={true} source="additional_info_entire" />
        </SimpleForm>

  </Create>
);

export default UserCreate;
