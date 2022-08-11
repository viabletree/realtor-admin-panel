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
const validatePropertyID = [required('Property Name')]
const validateDes = [required('Description is required')]
  
const UserTitle = ({ record }) => {
  
  return record && record.name && (
    <span>{record.name}</span>
  );
};
  
  const UserEdit = (props) => (
    
    <Edit {...props} undoable={false}   actions={<UserShowActions/>} successMessage="Property note updated successfully">

      <SimpleForm>
      <TextInput disabled source="id" />
            <ReferenceInput source="property_id" reference="properties"><SelectInput optionText="property_title" validate={validatePropertyID}/></ReferenceInput>
        
            <TextInput fullWidth source="description" inputProps={{ maxLength: 255 }} validate={validateDes}/>
            
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
  