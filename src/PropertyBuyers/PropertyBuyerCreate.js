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
const validateProperty = [required("Property is required")];

const validateAOC = [required("Amount of contract is required")];
const validateISR = [required("'Is Survey Recieved' field is required")];
const validateEmail = [required("Email is required"), email("Incorrect Email")];
const validatePassword = [required("Password is required"), minLength(6)];
const validateDateInput = [
  // regex(
  //   /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  //   "Must be a valid date"
  // ),
  required("Poperty year built is required"),
];

const UserCreate = (props) => (
  <Create {...props} successMessage="Buyer created successfully">
    <SimpleForm>
      <ReferenceInput source="property_id" reference="properties">

        <SelectInput optionText="property_title" inputProps={{ maxLength: 100 }} validate={validateProperty} />
      </ReferenceInput>

      <TextInput inputProps={{ maxLength: 100 }} source="buyer_name" validate={validateName} />
      <TextInput
        inputProps={{ maxLength: 100 }}
        multiline={true}
        source="address"
      />
      <TextInput
        inputProps={{ maxLength: 100 }}
        multiline={true}
        source="title_company_closer"
      />
      <NumberInput source="amount_of_contract" validate={validateAOC} />
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
        label="Is CDA Sent"
        source="is_cda_sent"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />

      <SelectInput
        label="Is Home Warranty"
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
        label="is switch over utilities"
        source="is_switch_over_utilities"
        choices={[
          { id: "0", name: "no" },
          { id: "1", name: "yes" },
        ]}
      />
      <SelectInput
        validate={validateISR}
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
      <TextInput
        inputProps={{ maxLength: 255 }}
        multiline={true}
        source="new_survey_info"
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
      <TextInput
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
  </Create>
);

export default UserCreate;
