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
  SelectInput,
  TextInput,
  NumberField,
  downloadCSV,
} from "react-admin";
import BulkDeleteButton from "../components/Buttons/BulkDeleteButton";
import ImageAvatar from "../components/ImageAvatar";
import PropTypes from "prop-types";
import MarkAsBlocked from "../components/Buttons/MarkAsBlocked";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UsersMobileGrid from "./ReportMobileGrid";
import moment from "moment";
import ReportMobileGrid from "./ReportMobileGrid";
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
const FanFilter = [
  <TextInput label="Search" source="agent_name" alwaysOn />,
  <SelectInput
    label="By Month"
    source="month_name"
    defaultValue="all"
    allowEmpty={false}
    choices={[
      { id: "all", name: "All" },
      { id: 1, name: "Jan" },
      { id: 2, name: "Feb" },
      { id: 3, name: "March" },
      { id: 4, name: "April" },
      { id: 5, name: "May" },
      { id: 6, name: "June" },
      { id: 7, name: "July" },
      { id: 8, name: "August" },
      { id: 9, name: "September" },
      { id: 10, name: "October" },
      { id: 11, name: "November" },
      { id: 12, name: "December" },
    ]}
  />,
];
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
const exporter = (reports) => {
  console.log({ reports });
  const reportsForExport = reports.map((report) => {
    const { id,property_title,buyer_name,seller_name,amount_of_contract,sold_at } = report;
    const sold_date =  moment(sold_at).format('MM/DD/YYYY');// omit backlinks and author
    return { id,property_title,buyer_name,seller_name,amount_of_contract,sold_date }; // add a field
    // return userForExport;
  });
  jsonExport(
    reportsForExport,
    {
      headers: ["id","property_title","buyer_name","seller_name","amount_of_contract","sold_date"], // order fields in the export
    },
    (err, csv) => {
      downloadCSV(csv, "reports"); // download as 'posts.csv` file
    }
  );
};

const ReportList = (props) => {
  const classes = useStyles();

  let isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      exporter={exporter}
      title={isSmall ? " " : LISTING.reports}
      /*  filters={<UserFilter />} */
      bulkActionButtons={<BulkDeleteButton resourceName="users" />}
      sort={{ field: "created_at", order: "DESC" }}
      // hasShow={true}
      className="listWrap"
      filters={FanFilter}
    >
      {isSmall ? (
        <ReportMobileGrid />
      ) : (
        <>
          <Datagrid>
            <TextField label="Property ID" source="id" />
            <TextField label="Property Title" source="property_title" />
            {/* <TextField source="bio" className={classes.descriptionText} /> */}
            {/* <TextField source="Buyer" aria-sort="none" /> */}
            {/* <TextField label="AvailabilityFrom" source="availability_from" /> */}
            <TextField label="Agent Name" source="full_name" />
            <TextField label="Property buyer" source="buyer_name" />
            <TextField label="Property seller" source="seller_name" />
            <NumberField
              label="Amount of contract"
              source="amount_of_contract"
              options={{ style: "currency", currency: "USD" }}
            />
            <DateField label="Sold At" source="sold_at" />
          </Datagrid>
          <Datagrid optimized rowClick="edit">
            content
          </Datagrid>
        </>
      )}
    </List>
  );
};

ReportList.propTypes = {
  record: PropTypes.object,
  label: PropTypes.string,
};

// UserEmailUsername.propTypes = {
//   record: PropTypes.object,
//   label: PropTypes.string,
// };

// CreatedDate.propTypes = {
//   record: PropTypes.object,
//   label: PropTypes.string,
// };

export default ReportList;
