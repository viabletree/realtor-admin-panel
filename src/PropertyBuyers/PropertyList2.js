import {
  TextField,
  List,
  Datagrid,
  Filter,
  SearchInput,
  DeleteButton,
  FunctionField,
  SimpleList,
  EditButton
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";

const UserFilter = (props) => {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
    </Filter>
  );
};

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
  // const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  console.log(props);
  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      filters={<UserFilter />}
      bulkActionButtons={<BulkDeleteButton resourceName="users" />}
      sort={{ field: "createdAt", order: "DESC" }}
    >
      {isSmall ? (
        <SimpleList
          // leftAvatar={<ImageAvatar />}
          primaryText={<TextField source="name" />}
          secondaryText={
            <UserEmailUsername label="Email / Username" sortBy="email" />
          }
          // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
          // linkType={record => record.canEdit ? "edit" : "show"}
          // rowStyle={record => ({ backgroundColor: record.nb_views >= 500 ? '#efe' : 'white' })}
        />
      ) : (
        <>
          <Datagrid optimized rowClick="show">
            <ImageAvatar />
            <TextField source="name" />
            <UserEmailUsername label="Email / Username" sortBy="email" />
            <CreatedDate label="Created at" sortBy="createdAt" />
            <TextField source="roleName" label="Role" sortable={false} />
            <EditButton/>
            <MarkAsBlocked />
            <DeleteButton
              undoable={false}
              confirmTitle="Delete user"
              confirmContent="Are you sure you want to delete this user?"
            />
          </Datagrid>
          <Datagrid optimized rowClick="edit">content</Datagrid>
        </>
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
