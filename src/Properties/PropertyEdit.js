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
    <Edit {...props} undoable={false} title={<UserTitle />}  actions={<UserShowActions/>}>

      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="phone" validate={[required()]} />
        <TextInput source="info.description" validate={[required()]} />
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
  