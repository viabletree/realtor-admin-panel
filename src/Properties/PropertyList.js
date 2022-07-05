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
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users"><TextField source="id" /></ReferenceField>
            <ReferenceField source="property_type_id" reference="property_types"><TextField source="id" /></ReferenceField>
            <TextField source="property_address" />
            <TextField source="property_title" />
            <NumberField source="property_price" />
            <NumberField source="property_area" />
            <NumberField source="property_square_feet" />
            <DateField source="property_year_built" />
            <NumberField source="latitude" />
            <NumberField source="longitude" />
            <TextField source="property_description" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            
        </Datagrid>
    </List>
);

export default PropertyList;