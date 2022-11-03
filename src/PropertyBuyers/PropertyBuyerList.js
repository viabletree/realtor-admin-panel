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
import PropertyBuyersMobileGrid from "./PropertyBuyersMobileGrid";
import CustomDatePicker from "../components/CustomDatePicker";
import moment from "moment";
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
      
    title={isSmall ? " " : LISTING.buyers}
    
    className="listWrap">
      {isSmall ? (
        <PropertyBuyersMobileGrid />
      ) : (
        <>
          <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users">
              <TextField source="full_name" />
            </ReferenceField>
            <ReferenceField source="property_id" reference="properties">
              <TextField source="property_title" />
            </ReferenceField>

            <TextField source="buyer_name" label={"Buyer"} />
            <TextField
              source="address"
              label={"Address"}
              className={classes.descriptionText}
            />
            <TextField
              source="title_company_closer"
              label={"TitleCompanyCloser"}
              className={classes.descriptionText}
            />
            <NumberField
              source="amount_of_contract"
              label={"AmountOfContract"}
              options={{ style: "currency", currency: "USD" }}
            />
            <BooleanField
              source="is_contract_to_lender"
              label="IsContractToLender"
            />

            <CustomDateField
              label="ContractToLenderDate"
              source="contract_to_lender_date"
            />
            <BooleanField
              label="IsEarnestMoneyReceived"
              source="is_earnest_money_received"
            />
            <CustomDateField
              label="EarnestMoneyReceiveDate"
              source="earnest_money_received_date"
            />

            {/*  <CustomDateField /> */}
            <BooleanField label="IsHomeWarranty" source="is_home_warranty" />
            <CustomDateField label="HomeWarrantyDate" source="home_warranty_date" />
            <BooleanField
              label="IsSurveyReceived"
              source="is_survey_received"
            />
            <BooleanField label="IsNewSurvey" source="is_new_survey" />
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
            <CustomDateField label="AppraisalDate" source="appraisal_date" />
            <CustomDateField label="AppraisalDueDate" source="appraisal_due_date" />
            <TextField
              label="AppraisalAdditionalInfo"
              source="appraisal_additional_info"
              className={classes.descriptionText}
            />
            <CustomDateField label="ClosingDate" source="closing_date" />
            <CustomDateField label="TitleCommitment" source="title_commitment" />
            <BooleanField label="IsCdaSent" source="is_cda_sent" />
            <BooleanField
              label="IsSwitchOverUtilities"
              source="is_switch_over_utilities"
            />
            <CustomDateField label="OptionPeriodEnd" source="option_period_end" />
            <TextField
              label="TermiteInspectionInfo"
              source="termite_inspection_info"
              className={classes.descriptionText}
            />
            <TextField
              label="AdditionalInfoEntire"
              source="additional_info_entire"
              className={classes.descriptionText}
            />
            <EditButton className="editIcon"/>
            <DeleteButton
              undoable={false}
              onSuccess={() => {
                refresh();
                notify(`Property Buyer Deleted`);
              }}
              onError={() => {
                notify(`Unable to delete`);
              }}
            />
          </Datagrid>
        </>
      )}
    </List>
  );
};

export default PropertyList;
