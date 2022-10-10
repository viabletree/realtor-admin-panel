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
  TextField,
  SelectInput,
  userRedirect,
  useNotify,
  useRedirect,
} from "react-admin";
const validateQes = [required("Please enter question")];
const validateAns = [required("Please enter answer")];

const FaqCreate = (props) => {
  const redirect = useRedirect();
  const notify = useNotify();

  const onSuccess = () => {
    notify("Property faq created successfully");
    redirect("list", "/faqs");
  };
  return (
    <Create {...props} onSuccess={onSuccess}>
      <SimpleForm>
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
      </SimpleForm>
    </Create>
  );
};

export default FaqCreate;
