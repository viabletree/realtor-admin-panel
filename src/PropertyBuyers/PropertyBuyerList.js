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
    BooleanField
  } from "react-admin";
  import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
  import ImageAvatar from "../components/ImageAvatar";
  import PropTypes from "prop-types";
  import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
  import { useMediaQuery } from "@material-ui/core";
 const PropertyList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users"><TextField source="full_name" /></ReferenceField>
            <ReferenceField source="property_id" reference="properties"><TextField source="property_title" /></ReferenceField>
           
            <TextField source="buyer_name" />
            <TextField source="address" />
            <TextField source="title_company_closer" />
            <NumberField source="amount_of_contract" />
            <NumberField source="is_contract_to_lender" />
           
            <DateField source="contract_to_lender_date" />
            <NumberField source="is_earnest_money_received" />
            <DateField source="earnest_money_received_date" />
            <NumberField source="is_home_warranty" />
            <DateField source="home_warranty_date" />
            <NumberField source="is_survey_received" />
            <DateField source="is_new_survey" />
            <TextField source="new_survey_info" />
          
            <DateField source="home_inspection_date" />
            <TextField source="home_inspection_info" />
            <DateField source="termite_inspection_date" />
            <DateField source="appraisal_date" />
            <DateField source="appraisal_due_date" />
            <TextField source="appraisal_additional_info" />
            <DateField source="closing_date" />
            <DateField source="title_commitment" />
            <DateField source="is_cda_sent" />
            <NumberField source="is_switch_over_utilities" />
            <DateField source="option_period_end" />
            <TextField source="termite_inspection_info" />
            <TextField source="additional_info_entire" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);

export default PropertyList;