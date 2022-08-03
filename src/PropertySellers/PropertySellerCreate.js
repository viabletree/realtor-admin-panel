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
  SelectInput,
  regex,
} from "react-admin";

const validateName = [required("Name is required")];
const validateEmail = [required("Email is required"), email("Incorrect Email")];
const validatePassword = [required("Password is required"), minLength(6)];
const validateDateInput = [
  regex(
    /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    "Must be a valid date"
  ),
];

const UserCreate = (props) => (
  <Create {...props} successMessage="Seller created successfully">
    <SimpleForm>
      <ReferenceInput source="property_id" reference="properties">
        <SelectInput optionText="property_title" />
      </ReferenceInput>
      <TextInput
        inputProps={{ maxLength: 50 }}
        multiline={true}
        source="seller_name"
      />
      <TextInput
        inputProps={{ maxLength: 50 }}
        multiline={true}
        source="address"
      />
      <TextInput
        inputProps={{ maxLength: 50 }}
        multiline={true}
        source="title_company_closer"
      />
      <NumberInput source="amount_of_contract" />
      <SelectInput
        source="is_earnest_money_received"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="earnest_money_received_date"
      />

      <SelectInput
        source="is_contract_to_lender"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="contract_to_lender_date"
      />

      <SelectInput
        source="is_home_warranty"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="home_warranty_date"
      />

      <SelectInput
        source="is_survey_received"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />

      <SelectInput
        source="is_new_survey"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />

      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="survey_due_date"
      />
      <TextInput
        inputProps={{ maxLength: 200 }}
        multiline={true}
        source="new_survey_info"
      />

      <SelectInput
        source="is_cda_sent"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />

      <SelectInput
        source="is_switch_over_utilities"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />

      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="home_inspection_date"
      />
      <TextInput
        inputProps={{ maxLength: 200 }}
        multiline={true}
        source="home_inspection_info"
      />
      <DateInput
        options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
        validate={validateDateInput}
        source="termite_inspection_date"
      />
      <TextInput
        inputProps={{ maxLength: 200 }}
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
        inputProps={{ maxLength: 200 }}
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
        inputProps={{ maxLength: 200 }}
        multiline={true}
        source="additional_info_entire"
      />
    </SimpleForm>
  </Create>
);

export default UserCreate;
