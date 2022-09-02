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
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};
const validateName = [required("Name is required")];
const v_title_company_closer = [required("title company closer is required")];
const validateProperty = [required("Property is required")];
const v_additional_info = [required("Additional Info is required")];
const v_address = [required("Address is required")];
const validateAOC = [required("Amount of contract is required")];
const val_qw = [required("field is required")];
//const validateISR = [required("'Is Survey Recieved' field is required")];
const validateDateInput = [
  // regex(
  //   /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  //   "Must be a valid date"
  // ),
  required("Please Insert date"),
];

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
        validate={v_address}
        source="address"
      />
      <TextInput
        inputProps={{ maxLength: 100 }}
        multiline={true}
        validate={v_title_company_closer}
        source="title_company_closer"
      />
      <NumberInput inputProps={{ maxLength: 100 }} source="amount_of_contract" validate={validateAOC} />
      <BooleanInput source="is_earnest_money_received" />
      {/* <SelectInput source="is_earnest_money_received" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="earnest_money_received_date"
      />
      <BooleanInput source="is_contract_to_lender" />
      {/* <SelectInput source="is_contract_to_lender" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="contract_to_lender_date"
      />

      <BooleanInput source="is_home_warranty" />
      {/* <BooleanInput source="is_home_warranty" label="Is Home Warranty" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="home_warranty_date"
        label="Home Warranty Date"
      />
      <BooleanInput source="is_survey_received" />

      {/* <SelectInput source="is_survey_received" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <BooleanInput source="is_new_survey" />
      {/* <SelectInput source="is_new_survey" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <BooleanInput source="is_cda_sent" />

      {/* <SelectInput source="is_cda_sent" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <BooleanInput source="is_switch_over_utilities" />

      {/* <SelectInput source="is_switch_over_utilities" choices={[
            { id: '0', name: 'no' },
            { id: '1', name: 'yes' },
            ]} /> */}
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="survey_due_date"
      />
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        source="new_survey_info"
        validate={v_additional_info}
      />

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
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="appraisal_due_date"
      />
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
        source="additional_info_entire"
        validate={v_additional_info}
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
