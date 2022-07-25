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
import { makeStyles } from "@material-ui/core/styles";
import UsersMobileGrid from "./UsersMobileGrid";

const useStyles = makeStyles((theme) => ({
  descriptionText: {
    display: "block",
    width: 250,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
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
  const classes = useStyles();
  const notify = useNotify();

  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      /*  filters={<UserFilter />} */
      bulkActionButtons={<BulkDeleteButton resourceName="users" />}
      sort={{ field: "created_at", order: "DESC" }}
      hasShow={true}
      className="listWrap"
    >
      {isSmall ? (
        <UsersMobileGrid />
      ) : (
        <>
          <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="id" label="User" reference="users">
              <TextField source="full_name" />
            </ReferenceField>
            <TextField label="AgencyName" source="agency_name" />
            <TextField source="bio" className={classes.descriptionText} />
            <TextField source="location" />
            <TextField label="AvailabilityFrom" source="availability_from" />
            <TextField label="AvailabilityTo" source="availability_to" />

            <EditButton />
            <DeleteButton
              undoable={false}
              onSuccess={() => {
                notify(`User Deleted`);
              }}
              onError={() => {
                notify(`Unable to delete`);
              }}
            />
          </Datagrid>
          <Datagrid optimized rowClick="edit">
            content
          </Datagrid>
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
