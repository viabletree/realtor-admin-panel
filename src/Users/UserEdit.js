import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  TopToolbar,
  ListButton,
  DateTimeInput,
  DateInput
} from 'react-admin';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
//import { TimeInput } from "react-admin-date-inputs2";
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
    <Edit {...props} undoable={false}   actions={<UserShowActions/>} successMessage="User updated successfully">

      <SimpleForm>
              <TextInput disabled label="Id" source="id"/>
              <TextInput inputProps={{ maxLength: 40 }} multiline={true} source="full_name" validate={[required()]}/>
              <TextInput inputProps={{ maxLength: 30 }} multiline={true} source="agency_name" validate={[required()]}/>
              <TextInput inputProps={{ maxLength: 50 }} multiline={true} source="location" validate={[required()]}/>
              <TextInput source="availability_from" validate={[required()]}/>
              <TextInput source="availability_to" validate={[required()]}/>
              <TextInput  multiline={true} source="bio" inputProps={{ maxLength: 255 }} validate={[required()]}/>
             
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
  