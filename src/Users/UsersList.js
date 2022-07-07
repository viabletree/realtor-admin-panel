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
  EditButton
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";

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
  // const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
     /*  filters={<UserFilter />} */
      bulkActionButtons={<BulkDeleteButton resourceName="users" />}
      sort={{ field: "created_at", order: "DESC" }}
      hasShow={true}
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
          <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="id" label="User" reference="users">
              <TextField source="full_name" />
              </ReferenceField>
            <TextField source="agency_name" />
            <TextField source="bio" />
            <TextField source="location" />
            <TextField source="availability_from" />
            <TextField source="availability_to" />
            
            <EditButton />
            <DeleteButton undoable={false}/>
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
