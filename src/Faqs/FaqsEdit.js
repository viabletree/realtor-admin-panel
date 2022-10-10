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
  SelectInput,
  useRedirect,
  useNotify,
} from "react-admin";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
//import { TimeInput } from "react-admin-date-inputs2";
const UserShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="Go Back to List" />
  </TopToolbar>
);
const validateQes = [required("Please enter question")];
const validateAns = [required("Please enter answer")];

const UserTitle = ({ record }) => {
  return record && record.name && <span>{record.name}</span>;
};

const UserEdit = (props) => {
  const redirect = useRedirect();
  const notify = useNotify();

  const onSuccess = () => {
    notify("Property faq updated successfully");
    redirect("list", "/faqs");
  };
  return (
    <Edit
      {...props}
      undoable={false}
      actions={<UserShowActions />}
      onSuccess={onSuccess}
    >
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput
          fullWidth
          source="question"
          inputProps={{ maxLength: 100 }}
          validate={validateQes}
        />
        <TextInput
          fullWidth
          source="answer"
          inputProps={{ maxLength: 255 }}
          validate={validateAns}
        />
        {/* <TextInput source="users" validate={[required()]} /> */}
      </SimpleForm>
    </Edit>
  );
};

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
