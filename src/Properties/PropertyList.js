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
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropertiesMobileGrid from "./PropertiesMobileGrid";

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
            <DateField label="YearBuilt" source="property_year_built" />
            <TextField
              label="Description"
              source="property_description"
              className={classes.descriptionText}
            />

            <EditButton />
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
          </Datagrid>
        </>
      )}
    </List>
  );
};

export default PropertyList;
