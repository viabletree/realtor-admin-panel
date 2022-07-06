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
    <Edit {...props} undoable={false}  actions={<UserShowActions/>}>

<SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="property_id" reference="properties"><SelectInput optionText="property_title" /></ReferenceInput>
        
            <TextInput source="buyer_name" />
            <TextInput source="address" />
            <TextInput source="title_company_closer" />
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
            <SelectInput source="is_home_warranty" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
            <DateInput source="home_warranty_date" />
           
            <DateInput source="home_inspection_date" />
            <TextInput source="home_inspection_info" />
            <DateInput source="termite_inspection_date" />
            <SelectInput source="is_survey_received" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
            <DateInput source="is_new_survey" />
            <TextInput source="new_survey_info" />
            <DateInput source="appraisal_date" />
            <DateInput source="appraisal_due_date" />
            <TextInput source="appraisal_additional_info" />
            <DateInput source="closing_date" />
            <DateInput source="closing_additional_info" />
            <DateInput source="title_commitment" />
            <SelectInput source="is_cda_sent" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
            <SelectInput source="is_switch_over_utilities" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} />
          
            <DateInput source="option_period_end" />
            <TextInput source="termite_inspection_info" />
            <TextInput source="additional_info_entire" />
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
  