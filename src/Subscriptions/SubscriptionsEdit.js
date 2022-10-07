import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  TopToolbar,
  ListButton,
  DateTimeInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  Toolbar,
  SaveButton,
} from "react-admin";
import { useFormState } from "react-final-form";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
//import { TimeInput } from "react-admin-date-inputs2";
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);
const duration = [required('Please insert duration')]
const price = [required('Please insert price')]
  
const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};

export const PriceCustomInput = () => {
  const { values } = useFormState();
  
  const durationType = values.duration_type;

  return durationType === "D" ? null : (
    <NumberInput source="price" validate={price} inputProps={{ maxLength: 255 }} />
  );
  
};
export const DurationP = () => {
  const { values } = useFormState();
  
  const duration = values.duration_type;

  return duration === "D" 
  ? <NumberInput  source="duration" inputProps={{ maxLength: 255 }} />
  : (
    <NumberInput disabled source="duration" inputProps={{ maxLength: 255 }} />

  );
};


const CustomEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const UserEdit = (props) => (
  <Edit
    {...props}
    undoable={false}
    actions={<UserShowActions />}
    successMessage="Subscription updated successfully"
  >
    <SimpleForm toolbar={<CustomEditToolbar />}>
      <TextInput disabled source="id" />
      
      {/* <TextInput source="price" inputProps={{ maxLength: 255 }} /> */}
      <DurationP />
      <PriceCustomInput />

      {/* <TextInput fullWidth source="privacy_policy" inputProps={{ maxLength: 255 }} />
            <TextInput fullWidth source="about_us" inputProps={{ maxLength: 255 }} />     */}
      {/* <TextInput source="users" validate={[required()]} /> */}
    </SimpleForm>
  </Edit>
);

UserShowActions.propTypes = {
  basePath: PropTypes.string,
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
