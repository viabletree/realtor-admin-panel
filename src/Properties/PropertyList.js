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
  useNotify,
  useRefresh,
  useListContext,
  useUpdateMany,
  useDelete,
  Button,
  useRecordContext,
  Confirm,
} from "react-admin";
import DeleteWithCustomConfirmButton from "ra-delete-with-custom-confirm-button";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropertiesMobileGrid from "./PropertiesMobileGrid";
import { DeleteConfirmContent, LISTING } from "../constants";
import { useState } from "react";
import { Close, Delete, ErrorOutline } from "@material-ui/icons";
import moment from 'moment';
import CustomDateField from "../components/CustomDateField";
const useStyles = makeStyles((theme) => ({
  descriptionText: {
    display: "block",
    width: 100,
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
    <List
      {...props}
      exporter={false}
      title={isSmall ? " " : LISTING.properties}
      className="listWrap"
      sort={{ field: "created_at", order: "DESC" }}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <PropertiesMobileGrid />
      ) : (
        <>
          <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField label="Name" source="user_id" reference="users">
              <TextField source="full_name" />
            </ReferenceField>
            <ReferenceField
              label="Type"
              source="property_type_id"
              reference="property_types"
            >
              <TextField source="category_name" />
            </ReferenceField>
            <TextField
              label="Address"
              source="property_address"
              className={classes.descriptionText}
            />
            <TextField
              label="Title"
              source="property_title"
              className={classes.descriptionText}
            />
            <NumberField
              label="Price"
              source="property_price"
              className={classes.descriptionText}
              options={{ style: "currency", currency: "USD" }}
            />
            <NumberField
              label="Area"
              source="property_area"
              className={classes.descriptionText}
            />
            <NumberField
              label="SQFT"
              source="property_square_feet"
              className={classes.descriptionText}
            />
            <CustomDateField label="YearBuilt" source="property_year_built"/>
            {/* <DateField label="YearBuilt" source="property_year_built" /> */}
            <TextField
              label="Description"
              source="property_description"
              className={classes.descriptionText}
            />

            <EditButton className="editIcon" />
            <DeleteButton
              undoable={false}
              onSuccess={() => {
                refresh();
                notify(`Property Deleted`);
              }}
              onError={() => {
                notify(`Unable to delete`);
              }}
            />
            {/* <DeleteWithCustomConfirmButton
              title={`Delete this Property?`}
              content={DeleteConfirmContent}
              label="Delete"
              confirmColor="warning"
              ConfirmIcon={Delete}
              cancel="Cancel"
              CancelIcon={Close}
              undoable={true}
            /> */}
          </Datagrid>
        </>
      )}
    </List>
  );
};

export default PropertyList;
