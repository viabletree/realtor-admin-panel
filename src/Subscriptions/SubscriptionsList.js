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
import { makeStyles } from "@material-ui/core/styles";

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

const DurationCustomField = (props) => {
  const { record } = props;
  let durationType = record.duration_type;
  let duration = record.duration;
  return durationType === "D" ? (
    <span>{`${duration} Day`}</span>
  ) : durationType === "M" ? (
    <span>{`${duration} Month`}</span>
  ) : durationType === "Y" ? (
    <span>{`${duration} Year`}</span>
  ) : (
    ""
  );
};

DurationCustomField.defaultProps = {
  label: "",
  addLabel: true,
};

const SubscriptionsList = (props) => {
  const classes = useStyles();
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

          <TextField source="type" className={classes.descriptionText} />
          <TextField source="price" className={classes.descriptionText} />
          <DurationCustomField label="Duration" />
          <DateField source="created_at" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

SubscriptionsList.propTypes = {
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

export default SubscriptionsList;
