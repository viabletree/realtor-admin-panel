import {
  TextField,
  List,
  Datagrid,
  Filter,
  SearchInput,
  DeleteButton,
  FunctionField,
  SimpleList,
  DateField,
  ReferenceField,
  EditButton,
  useNotify,
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";
import FaqsMobileGrid from "./FaqsMobileGrid";

// const UserFilter = (props) => {
//   return (
//     <Filter {...props}>
//       <SearchInput source="q" alwaysOn />
//     </Filter>
//   );
// };

const UserEmailUsername = (props) => {
  return props.record && props.record.parentId ? (
    <TextField source="username" label={props.label} />
  ) : (
    <TextField source="email" label={props.label} />
  );
};

const CreatedDate = (props) => {
  return props.record && props.record.createdAt ? (
    <FunctionField
      render={() => new Date(props.record.createdAt).toDateString()}
      label={props.label}
    />
  ) : (
    ""
  );
};

const UsersList = (props) => {
  const notify = useNotify();
  // const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      /*  filters={<UserFilter />} */
      bulkActionButtons={<BulkDeleteButton resourceName="users" />}
      // sort={{ field: "created_at", order: "DESC" }}
      hasShow={true}
      className="listWrap"
    >
      {isSmall ? (
        <FaqsMobileGrid />
      ) : (
        <Datagrid rowClick="show">
          {/* <TextField source="id" /> */}
          {/* <ReferenceField source="property_id" reference="properties">
            <TextField source="property_title" />
          </ReferenceField> */}

          <TextField source="term_and_condition" />
          <TextField source="privacy_policy" />
          <TextField source="about_us" />
          <DateField source="created_at" />
          <EditButton />
          
        </Datagrid>
      )}
    </List>
  );
};

UsersList.propTypes = {
  record: PropTypes.object,
  label: PropTypes.string,
};

UserEmailUsername.propTypes = {
  record: PropTypes.object,
  label: PropTypes.string,
};

CreatedDate.propTypes = {
  record: PropTypes.object,
  label: PropTypes.string,
};

export default UsersList;
