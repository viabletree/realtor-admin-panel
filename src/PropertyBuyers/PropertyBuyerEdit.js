import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  TopToolbar,
  ListButton,
  NumberInput,
  DateInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import PropTypes from 'prop-types';
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);
  
const UserTitle = ({ record }) => {
  return record && record.name && (
    <span>{record.name}</span>
  );
};
  
  const UserEdit = (props) => (
    <Edit {...props} undoable={false}  actions={<UserShowActions/>} successMessage="Buyer updated successfully">

<SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="property_id" reference="properties"><SelectInput optionText="property_title" /></ReferenceInput>
        
            <TextInput inputProps={{ maxLength: 20 }} multiline={true} source="buyer_name" />
            <TextInput inputProps={{ maxLength: 20 }} multiline={true} source="address" />
            <TextInput inputProps={{ maxLength: 50 }} multiline={true} source="title_company_closer" />
            <NumberInput inputProps={{ maxLength: 20 }} source="amount_of_contract" />
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

            <SelectInput source="is_home_warranty" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <DateInput source="home_warranty_date" />
            <SelectInput source="is_survey_received" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <SelectInput source="is_new_survey" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <TextInput inputProps={{ maxLength: 200 }} multiline={true} source="new_survey_info" />
            
            <SelectInput source="is_cda_sent" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
            <SelectInput source="is_switch_over_utilities" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
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
            <TextInput inputProps={{ maxLength: 200 }} multiline={true} source="additional_info_entire" />
            </SimpleForm>

    </Edit>
  );
  
  UserShowActions.propTypes = {
    basePath: PropTypes.string
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
  