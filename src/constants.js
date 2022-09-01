import { BooleanInput, DateInput, regex, required, TextInput } from "react-admin";
import { useFormState } from "react-final-form";

const PROD_URL = "https://dev.myrlty.com/";
const DEV_URL = "https://dev.myrlty.com/";
const LOCALHOST_URL = "https://dev.myrlty.com/";
export const BASE_URL =
  (process.env.REACT_APP_ENVIRONMENT === "production"
    ? PROD_URL
    : process.env.REACT_APP_ENVIRONMENT === "staging"
    ? DEV_URL
    : LOCALHOST_URL) + "api/v1/admin";

export const RESOURCES = {
  users: "users",
  properties: "properties",
  property_types: "property_types",
  property_buyers: "property_buyers",
  property_sellers: "property_sellers",
  notes: "notes",
  faqs: "faqs",
  setting: "setting",

  showings: "showings",
};

/**
 *
 * @param {String} resourceName
 * @returns {String}
 */
export function getResourcePath(resourceName) {
  return RESOURCES[resourceName.toLowerCase()];
}

export const validateName = [
  required("Name is required"),
  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid name"),
];

export const validateProperty = [required("Property is required")];

export const validateAOC = [required("Amount of contract is required")];

export const validateAddress = [
  required("Address is required"),
  regex(/^.*\S.*$/, "Must be a valid address"),
];
export const validateTitle = [
  required("Title is required"),
  regex(/^(?![\s.]+$)[a-zA-Z\s.]*$/, "Must be a valid title"),
];
export const validateAdditionalInfo = [
  required("Additional info is required"),
  regex(/^.*\S.*$/, "Must be valid info"),
];
export const validateDateInput = [
  // regex(
  //   /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  //   "Must be a valid date"
  // ),
  required("Poperty year built is required"),
];

export const SurveyRecievedCutomInput = () => {
  const { values } = useFormState();

  const survey_received = values.is_survey_received;

  return survey_received === true ? (
    <TextInput
      inputProps={{ maxLength: 255 }}
      multiline={true}
      source="new_survey_info"
      style={{ width: 256 }}
    />
  ) : (
    <BooleanInput source="is_new_survey" />
  );
};

// Contract To Lender Date Cutom Input
export const ContractLenderDateInput = () => {
  const { values } = useFormState();

  const contract_to_lender = values.is_contract_to_lender;

  return contract_to_lender === true ? (
    <DateInput
      options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
      validate={validateDateInput}
      source="contract_to_lender_date"
      style={{ width: 256 }}
    />
  ) : null;
};

// Earnest Money Recieved Date Cutom Input
export const EarnestMoneyRecievedDateInput = () => {
  const { values } = useFormState();

  const earnest_money_received = values.is_earnest_money_received;
  return earnest_money_received === true ? (
    <DateInput
      options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
      validate={validateDateInput}
      source="earnest_money_received_date"
      style={{ width: 256 }}
    />
  ) : null;
};

// Home Warranty Date Cutom Input
export const HomeWarrantyDateInput = () => {
  const { values } = useFormState();

  const home_warranty = values.is_home_warranty;
  return home_warranty === true ? (
    <DateInput
      options={{ format: "YYYY-MM-DD", ampm: false, clearable: true }}
      validate={validateDateInput}
      source="home_warranty_date"
      style={{ width: 256 }}
    />
  ) : null;
};
