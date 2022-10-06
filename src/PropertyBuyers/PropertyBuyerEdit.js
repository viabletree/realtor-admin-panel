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
import {
  ContractLenderDateInput,
  EarnestMoneyRecievedDateInput,
  HomeWarrantyDateInput,
  SurveyRecievedCutomInput,
  validateAdditionalInfo,
  validateAddress,
  validateAOC,
  validateDateInput,
  validateName,
  validateProperty,
  validateTitle,
  termite_inspection_info,
} from "../constants";

const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};

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
          <SelectInput
            optionText="property_title"
            inputProps={{ maxLength: 100 }}
            validate={validateProperty}
          />
        </ReferenceInput>

        <TextInput
          inputProps={{ maxLength: 100 }}
          multiline={true}
          source="buyer_name"
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
        <BooleanInput source="is_contract_to_lender" />
        <ContractLenderDateInput />

        <BooleanInput source="is_earnest_money_received" />
        <EarnestMoneyRecievedDateInput />

        <BooleanInput source="is_home_warranty" />
        <HomeWarrantyDateInput />

        <BooleanInput source="is_survey_received" />
        <SurveyRecievedCutomInput />
     

      
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
          validate={validateAdditionalInfo}
          source="appraisal_additional_info"
        />
        <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          source="closing_date"
        />
        {/* <DateInput
          options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
          validate={validateDateInput}
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="closing_additional_info"
        /> */}
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
          validate={termite_inspection_info}
          source="termite_inspection_info"
        />
        <TextInput
          inputProps={{ maxLength: 255 }}
          multiline={true}
          source="additional_info_entire"
          validate={validateAdditionalInfo}
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
