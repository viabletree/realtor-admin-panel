import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  TopToolbar,
  ListButton
} from 'react-admin';
import PropTypes from 'prop-types';
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);
  
const UserTitle = ({ record }) => {
  return record && record.name && (
    <span>{record.name}</span>
  );
};
  
  const UserEdit = (props) => (
    <Edit {...props} undoable={false} actions={<UserShowActions/>}>

      <SimpleForm>
      <TextInput disabled label="Id" source="id"/>
      <TextInput source="property_address" validate={[required()]} />
            <TextInput source="property_title" validate={[required()]} />
            <TextInput source="property_description" validate={[required()]} />
            <TextInput source="property_price" validate={[required()]} />
            <TextInput source="property_area" validate={[required()]} />
            <TextInput source="property_square_feet" validate={[required()]} />
            <TextInput source="property_year_built" validate={[required()]} />
            <TextInput source="latitude" validate={[required()]} />
            <TextInput source="longitude" validate={[required()]} />
            {/* <TextInput source="users" validate={[required()]} /> */}
      </SimpleForm>
    </Edit>
  );
  
  UserShowActions.propTypes = {
    basePath: PropTypes.string
  };

  UserEdit.propTypes = {
    record: PropTypes.object,
    label: PropTypes.string,
  };

  UserTitle.propTypes = {
    record: PropTypes.object,
    label: PropTypes.string,
  };
  
  export default UserEdit;
  