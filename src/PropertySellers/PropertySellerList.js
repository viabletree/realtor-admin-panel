import {
  TextField,
  List,
  Datagrid,
  ReferenceField,
  NumberField,
  DateField,
  Filter,
  SearchInput,
  DeleteButton,
  FunctionField,
  SimpleList,
  EditButton,
  BooleanField,
  useNotify,
  useRefresh,
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropertySellersMobileGrid from "./PropertySellersMobileGrid";
import { LISTING } from "../constants";
import CustomDateField from "../components/CustomDateField";

const useStyles = makeStyles((theme) => ({
  descriptionText: {
    display: "block",
    width: 250,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const PropertyList = (props) => {
  const classes = useStyles();
  const notify = useNotify();
  const refresh = useRefresh();
  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}  
    exporter={false}
      
     title={isSmall ? " " : LISTING.sellers}
    >
      
      {isSmall ? (
        <PropertySellersMobileGrid />
      ) : (
        <>
          <Datagrid rowClick="show" className="listWrap">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users">
              <TextField source="full_name" />
            </ReferenceField>
            <ReferenceField source="property_id" reference="properties">
              <TextField source="property_title" />
            </ReferenceField>

            <TextField
              label="SellerName"
              source="seller_name"
              className={classes.descriptionText}
            />
            <TextField
              label="Address"
              source="address"
              className={classes.descriptionText}
            />
            <TextField
              label="TitleCompanyCloser"
              source="title_company_closer"
              className={classes.descriptionText}
            />
            <NumberField
              label="AmountOfContract"
              source="amount_of_contract"
              options={{ style: "currency", currency: "USD" }}
            />
            <BooleanField
              label="IsEarnestMoneyReceived"
              source="is_earnest_money_received"
            />
            <CustomDateField
              label="EarnestMoneyReceivedDate"
              source="earnest_money_received_date"
            />
            <BooleanField
              label="IsContractToLender"
              source="is_contract_to_lender"
            />
            <CustomDateField
              label="ContractToLenderDate"
              source="contract_to_lender_date"
            />
            <BooleanField label="IsHomeWarranty" source="is_home_warranty" />
            <CustomDateField label="HomeWarrantyDate" source="home_warranty_date" />
            <BooleanField
              label="IsSurveyReceived"
              source="is_survey_received"
            />
            <BooleanField label="IsNewSurvey" source="is_new_survey" />
            {/* <DateField label="SurveyDueDate" source="survey_due_date" /> */}
            <TextField
              label="NewSurveyInfo"
              source="new_survey_info"
              className={classes.descriptionText}
            />
            <CustomDateField
              label="HomeInspectionDate"
              source="home_inspection_date"
            />
            <TextField
              label="HomeInspectionInfo"
              source="home_inspection_info"
              className={classes.descriptionText}
            />
            <CustomDateField
              label="TermiteInspectionDate"
              source="termite_inspection_date"
            />
            <TextField
              label="TermiteInspectionInfo"
              source="termite_inspection_info"
              className={classes.descriptionText}
            />
            <CustomDateField label="AppraisalDate" source="appraisal_date" />
            {/* <DateField label="AppraisalDueDate" source="appraisal_due_date" /> */}
            <TextField
              label="AppraisalAdditionalInfo"
              source="appraisal_additional_info"
              className={classes.descriptionText}
            />
            <BooleanField label="IsCdaSent" source="is_cda_sent" />
            <BooleanField
              label="IsSwitchOverUtilities"
              source="is_switch_over_utilities"
            />
            <CustomDateField
              label="OptionPeriodEndDate"
              source="option_period_end_date"
            />
            {/* <DateField label="TitleCommitmentDate" source="title_commit_to_be_rec_date" /> */}
            <TextField
              label="AdditionalInfoEntire"
              source="additional_info_entire"
              className={classes.descriptionText}
            />
            <EditButton
            className="editIcon"
              onSuccess={() => {
                notify(`Property Seller Updated`);
              }}
              onError={() => {
                notify(`Unable to Update`);
              }}
            />
            <DeleteButton
              undoable={false}
              onSuccess={() => {
                refresh();
                notify(`Seller Deleted`);
              }}
              onError={() => {
                notify(`Unable to Delete`);
              }}
            />
          </Datagrid>
        </>
      )}
    </List>
  );
};

export default PropertyList;
