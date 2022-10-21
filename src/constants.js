import {
  BooleanInput,
  DateInput,
  regex,
  required,
  TextInput,
} from "react-admin";
import { useFormState } from "react-final-form";

const PROD_URL = "https://dev.myrlty.com/";
const DEV_URL = "https://dev.myrlty.com/";
export const LOCALHOST_URL = "https://dev.myrlty.com/";
// export const LOCALHOST_URL = "https://51d7-182-188-42-224.ngrok.io/";
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
  subscriptions: "subscriptions",
  reports: "reports",
  forgotPassword: "/forgot-password",
};

export const LISTING = {
  properties: "Properties",
  sellers: "Property Sellers",
  buyers: "Property Buyers",
  settings: "Settings",
  faqs: "Faqs",
  notes: "Notes",
  users: "Users",
  showings: "Showings",
  subscriptions: "Subscriptions",
  reports: "Reports",
};

/**
 *
 * @param {String} resourceName
 * @returns {String}
 */
export function getResourcePath(resourceName) {
  return RESOURCES[resourceName.toLowerCase()];
}

export const isValidUrl = (url) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
};

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
  //   /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  //   "Must be a valid date"
  // ),
  required("date should be valid"),
];

export const termite_inspection_info = [
  required("termite inspection info is requried"),
];
export const validateReq = [required("survey info is requried")];
export const appraisal_additional_info = [
  required("appraisal additional info is requried"),
];
export const validateAAI = [required("appraisal additional info is required")];

export const SurveyRecievedCutomInput = () => {
  const { values } = useFormState();

  const survey_received = values.is_survey_received;

  return survey_received === true ? (
    <TextInput
      inputProps={{ maxLength: 255 }}
      multiline={true}
      validate={validateReq}
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

export const DeleteConfirmContent = (props) => {
  return <span>Do you want to delete this listing?</span>;
};

export const INVALID_EMAIL = "Email should be valid";
export const INVALID_PASSWORD = "Password should be valid";
export const INVALID_PASSWORD_REGEX =
  "Password must contain 6 characters, 1 uppercase, and 1 numeric";
