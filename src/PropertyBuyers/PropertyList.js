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
    EditButton
  } from "react-admin";
  import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
  import ImageAvatar from "../components/ImageAvatar";
  import PropTypes from "prop-types";
  import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
  import { useMediaQuery } from "@material-ui/core";
 const PropertyList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="createdAt" />
            <TextField source="updatedAt" />
            <TextField source="id" />
            <ReferenceField source="list_user_id" reference="users">
                <TextField source="agency_name" />
                </ReferenceField>
            <TextField source="property_type" />
            <TextField source="property_address" />
            <TextField source="property_title" />
            <TextField source="property_description" />
            <NumberField source="property_price" />
            <NumberField source="property_area" />
            <DateField source="property_squarefeet" />
            <DateField source="property_year_built" />
            <NumberField source="latitude" />
            <NumberField source="longitude" />
            <NumberField source="is_favourite" />
            <DateField source="is_sold" />
            <TextField source="property_id" />
            <DateField source="deleted_at" />
        </Datagrid>
    </List>
);

export default PropertyList;