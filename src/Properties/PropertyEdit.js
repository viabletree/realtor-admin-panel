import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  TopToolbar,
  ListButton,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  DateInput
} from 'react-admin';
import PropTypes from 'prop-types';
import { RESOURCES } from '../constants';
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
  <Edit {...props} undoable={false} actions={<UserShowActions />} successMessage="Property updated successfully">

    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="property_address" validate={[required()]} />
      <ReferenceInput
        label="select user"
        source="user_id"
        reference={RESOURCES.users}
      //filter={{ is_artist: true }}
      >
        <SelectInput optionText="full_name" />

      </ReferenceInput>

      <TextInput inputProps={{ maxLength: 20 }} multiline={true} source="property_title" validate={[required()]} />
      <TextInput inputProps={{ maxLength: 200 }} multiline={true} source="property_description" validate={[required()]} />
      <TextInput source="property_price" validate={[required()]} />
      <SelectInput source="property_type_id" choices={[
        { id: '1', name: 'residential' },
        { id: '2', name: 'commercial' },
        { id: '3', name: 'land' },
      ]} />
      <TextInput inputProps={{ maxLength: 8 }} multiline={true} source="property_area" validate={[required()]} />
      <TextInput inputProps={{ maxLength: 8 }} source="property_square_feet" multiline={true} validate={[required()]} />
      <DateInput source="property_year_built" label="property year built" options={{ format: 'YYYY-MM-DD', ampm: false, clearable: true }} />
      {/*  <TextInput source="latitude" validate={[required()]} />
            <TextInput source="longitude" validate={[required()]} />
            */}
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
