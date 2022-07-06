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
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users"><TextField source="full_name" /></ReferenceField>
            <ReferenceField source="property_type_id" reference="property_types"><TextField source="category_name" /></ReferenceField>
            <TextField source="property_address" />
            <TextField source="property_title" />
            <NumberField source="property_price" />
            <NumberField source="property_area" />
            <NumberField source="property_square_feet" />
            <DateField source="property_year_built" />
            <TextField source="property_description" />
            <TextField source="is_sold" />
          
            <NumberField source="latitude" />
            <NumberField source="longitude" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton />
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);

export default PropertyList;