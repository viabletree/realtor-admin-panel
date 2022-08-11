import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  TopToolbar,
  ListButton,
  DateTimeInput,
  DateInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
//import { TimeInput } from "react-admin-date-inputs2";
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);
const validatePrivacy = [required('Please enter question')]
const validateTerm = [required('Please enter answer')]
const validateAbout = [required('Please enter question')]  
const UserTitle = ({ record }) => {
  
  return record && record.name && (
    <span>{record.name}</span>
  );
};
  
  const UserEdit = (props) => (
    
    <Edit {...props} undoable={false}   actions={<UserShowActions/>} successMessage="Settings updated successfully">

      <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput fullWidth source="term_and_condition" inputProps={{ maxLength: 255 }} validate={validatePrivacy}/>
            <TextInput fullWidth source="privacy_policy" inputProps={{ maxLength: 255 }} validate={validateTerm}/>
            <TextInput fullWidth source="about_us" inputProps={{ maxLength: 255 }} validate={validateAbout}/>    
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
  