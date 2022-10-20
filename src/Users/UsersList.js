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
  useRecordContext,
  downloadCSV,
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UsersMobileGrid from "./UsersMobileGrid";
import moment from "moment";
import { LISTING } from "../constants";
import jsonExport from "jsonexport/dist";

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

const AvailabilityFromField = (props) => {
  const record = useRecordContext(props);
  const conversionTo12Hr = moment(
    record.availability_from,
    "hh:mm:ss A"
  ).format("hh:mm:ss A");
  return <span>{conversionTo12Hr}</span>;
};

AvailabilityFromField.defaultProps = {
  label: "",
  addLabel: true,
};

const AvailabilityToField = (props) => {
  const record = useRecordContext(props);
  const conversionTo12Hr = moment(record.availability_to, "hh:mm:ss A").format(
    "hh:mm:ss A"
  );
  return <span>{conversionTo12Hr}</span>;
};

AvailabilityToField.defaultProps = {
  label: "",
  addLabel: true,
};

const UsersList = (props) => {
  const classes = useStyles();
  const notify = useNotify();
  const refresh = useRefresh();

  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      exporter={false}
      {...props}
      title={isSmall ? " " : LISTING.settings}
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

            <TextField label="SubscriptionType" source="subscription_id.type" />

            <TextField label="AgencyName" source="agency_name" />
            <TextField source="bio" className={classes.descriptionText} />
            <TextField source="location" aria-sort="none" />
            {/* <TextField label="AvailabilityFrom" source="availability_from" /> */}
            <AvailabilityFromField label="AvailabilityFrom" />
            {/* <TextField label="AvailabilityTo" source="availability_to" /> */}
            <AvailabilityToField label="AvailabilityTo" />

            <EditButton className="editIcon"/>
            <DeleteButton
              undoable={false}
              onSuccess={() => {
                refresh();
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
