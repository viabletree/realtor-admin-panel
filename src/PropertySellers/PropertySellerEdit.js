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
  SelectInput,
  BooleanInput,
  regex,
} from "react-admin";
import PropTypes from "prop-types";
import {
  ContractLenderDateInput,
  EarnestMoneyRecievedDateInput,
  HomeWarrantyDateInput,
  SurveyRecievedCutomInput,
  validateAdditionalInfo,
  validateAddress,
  validateAOC,
  validateAAI,
  validateDateInput,
  validateName,
  validateProperty,
  validateTitle,
} from "../constants";

const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};
const v_additional_info = [required("Additional Info is required")];
// const validateProperty = [required("Property is required")];
// const validateAOC = [required("Amount of contract is required")];

// const validateDateInput = [
//   // regex(
//   //   /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
//   //   "Must be a valid date"
//   // ),
//   required("Poperty year built is required"),
// ];

const UserEdit = (props) => (
  <Edit
    {...props}
    undoable={false}
    actions={<UserShowActions />}
    successMessage="Seller updated successfully"
  >
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="property_id" reference="properties">
        <SelectInput optionText="property_title" validate={validateProperty} />
      </ReferenceInput>
      <TextInput
        inputProps={{ maxLength: 100 }}
        multiline={true}
        source="seller_name"
        validate={validateName}
      />
      <TextInput
        inputProps={{ maxLength: 100 }}
        multiline={true}
        source="address"
        validate={validateAddress}
      />
      <TextInput
        inputProps={{ maxLength: 100 }}
        multiline={true}
        source="title_company_closer"
        validate={validateTitle}
      />
      <NumberInput
        inputProps={{ maxLength: 100 }}
        source="amount_of_contract"
        validate={validateAOC}
      />
      <BooleanInput source="is_earnest_money_received" />
      <EarnestMoneyRecievedDateInput />

      <BooleanInput source="is_contract_to_lender" />
      <ContractLenderDateInput />

      <BooleanInput source="is_home_warranty" />
      <HomeWarrantyDateInput />

      <BooleanInput source="is_survey_received" />
      <SurveyRecievedCutomInput />
      
    
      {/* <SelectInput source="is_cda_sent" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <BooleanInput source="is_switch_over_utilities" />

      {/* <SelectInput source="is_switch_over_utilities" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      {/* <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="survey_due_date"
      /> */}
      
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="home_inspection_date"
      />
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        source="home_inspection_info"
      />
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="termite_inspection_date"
      />
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        source="termite_inspection_info"
      />
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="appraisal_date"
      />
      {/* <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="appraisal_due_date"
      /> */}
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        source="appraisal_additional_info"
        validate={v_additional_info}
      />

      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="option_period_end_date"
      />
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="title_commit_to_be_rec_date"
      />
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        validate={validateAAI}
        source="additional_info_entire"
      />
    </SimpleForm>
  </Edit>
);

UserShowActions.propTypes = {
  basePath: PropTypes.string,
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
