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
    <Edit {...props} undoable={false}   actions={<UserShowActions/>}>

      <SimpleForm>
              <TextInput disabled label="Id" source="id"/>
              <TextInput source="full_name" validate={[required()]}/>
              <TextInput source="agency_name" validate={[required()]}/>
              <TextInput source="location" validate={[required()]}/>
              <DateInput source="availability_from" validate={[required()]}/>
              <DateInput source="availability_to" validate={[required()]}/>
              <TextInput source="bio" validate={[required()]}/>
             
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
  