import {
  Create,
  SimpleForm,
  TextInput,
  required,
  NumberInput,
  email,
  minLength,
  PasswordInput,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  DateInput,
  DateTimeInput,
  SelectField
} from 'react-admin';
import { RESOURCES } from '../constants';

const validateName = [required('Name is required')];
const validateEmail = [required('Email is required'), email('Incorrect Email')];
const validatePassword = [required('Password is required'), minLength(6)];

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
            <ReferenceInput
				label="select user"
				source="user_id"
				reference={RESOURCES.users}
				//filter={{ is_artist: true }}
			>
        <SelectInput optionText="full_name" />

        </ReferenceInput>
				
            <TextInput source="property_address" validate={[required()]} />
            <DateInput source="property_year_built" label="property year built" options={{ format: 'YYYY-MM-DD', ampm: false, clearable: true }} />
            <TextInput source="property_title" validate={[required()]} />
            <TextInput source="property_description" validate={[required()]} />
            <SelectInput source="property_type_id" choices={[
            { id: '1', name: 'residential' },
            { id: '2', name: 'commercial' },
            { id: '3', name: 'land' },
            ]} />
            <TextInput source="property_price" validate={[required()]} />
            <TextInput source="property_area" validate={[required()]} />
            <TextInput source="property_square_feet" validate={[required()]} />
           {/*  <TextInput source="latitude" validate={[required()]} />
            <TextInput source="longitude" validate={[required()]} />
       */}
    </SimpleForm>
  </Create>
);

export default UserCreate;
