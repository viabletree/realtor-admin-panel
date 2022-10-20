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
  useRefresh,
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";
import NotesMobileGrid from "./ShowingsMobileGrid";
import { makeStyles } from "@material-ui/core/styles";
import { LISTING } from "../constants";

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
  const notify = useNotify();
  const refresh = useRefresh();
  const classes = useStyles();
  // const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
    exporter={false}
      
      {...props}
      title={isSmall ? " " : LISTING.showings}
    
      /*  filters={<UserFilter />} */
      bulkActionButtons={false}
      sort={{ field: "created_at", order: "DESC" }}
      hasShow={true}
      className="listWrap"
    >
      {isSmall ? (
        <NotesMobileGrid />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          {/* <ReferenceField source="property_id" reference="properties">
            <TextField source="property_title" />
          </ReferenceField> */}
          <TextField source="name" />
          <TextField source="address" />
          <TextField source="description" className={classes.descriptionText} />
          <DateField source="created_at" />
          {/* <EditButton /> */}
          <DeleteButton
            undoable={false}
            onSuccess={() => {
              refresh();
              notify(`Showing Deleted`);
            }}
            onError={() => {
              notify(`Unable to delete`);
            }}
          />
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
