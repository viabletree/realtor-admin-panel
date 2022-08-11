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
  NullableBooleanInput,
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

const validateDateInput = [
  regex(
    /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "Must be a valid date"
  ),
];

const UserEdit = (props) => {
  console.log({ props });
  return (
    <Edit
      {...props}
      undoable={false}
      actions={<UserShowActions />}
      successMessage="Buyer updated successfully"
    >
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="property_id" reference="properties">
          <SelectInput optionText="property_title" />
        </ReferenceInput>

        <TextInput
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="buyer_name"
        />
        <TextInput
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="address"
        />
        <TextInput
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="title_company_closer"
        />
        <NumberInput
          inputProps={{ maxLength: 255 }}
          source="amount_of_contract"
        />
        <BooleanInput source="is_contract_to_lender" />
        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          source="contract_to_lender_date"
        />
        <BooleanInput source="is_earnest_money_received" />
        {/* <SelectInput source="is_earnest_money_received"
        // choices={[
        // { id: '0', name: 'no' },
        // { id: '1', name: 'yes' },
        // ]} 
        /> */}
        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          source="earnest_money_received_date"
        />
        <BooleanInput source="is_home_warranty" />
        {/* <SelectInput source="is_home_warranty" choices={[
          { id: '0', name: 'no' },
          { id: '1', name: 'yes' },
        ]} /> */}
        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          source="home_warranty_date"
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
        <TextInput
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="new_survey_info"
        />
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
        />
        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          source="closing_date"
        />
        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="closing_additional_info"
        />
        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          source="title_commitment"
        />

        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          source="option_period_end"
        />
        <TextInput
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="termite_inspection_info"
        />
        <TextInput
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="additional_info_entire"
        />
      </SimpleForm>
    </Edit>
  );
};

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
