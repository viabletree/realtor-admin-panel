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
  BooleanInput,
  SelectInput,
  regex,
} from "react-admin";
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
} from "../constants";



const UserCreate = (props) => (
  <Create {...props} successMessage="Seller created successfully">
    <SimpleForm>
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
        source="amount_of_contract"
        inputProps={{ maxLength: 100 }}
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
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        source="new_survey_info"
      />

      <BooleanInput source="is_cda_sent" />

      <BooleanInput source="is_switch_over_utilities" />

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
        validate={validateAdditionalInfo}
      />
    </SimpleForm>
  </Create>
);

export default UserCreate;
