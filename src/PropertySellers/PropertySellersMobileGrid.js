// in src/comments.js
import * as React from "react";
import { Box, Card, CardHeader, CardContent, Typography } from "@mui/material";
import {
  DateField,
  EditButton,
  NumberField,
  TextField,
  BooleanField,
  useTranslate,
  useListContext,
  RaRecord,
  RecordContextProvider,
  DeleteButton,
  useNotify,
  ReferenceField,
  useRedirect,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { fontWeight } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  descriptionText: {
    overflowWrap: "anywhere",
  },
}));

const PropertySellersMobileGrid = (props) => {
  const classes = useStyles();
  const redirect = useRedirect();

  const { data } = props;

  return (
    <Box margin="0.5em">
      {Object.keys(data)
        .sort((a, b) => data[b].id - data[a].id)
        .map(function (record, index) {
          return (
            <RecordContextProvider key={data[record].id} value={data[record]}>
              <Card sx={{ margin: "0.5rem 0" }}>
                <CardHeader
                  title={
                    <>
                      Property Seller #
                      <TextField
                        source="id"
                        variant="h6"
                        style={{ fontWeight: 800 }}
                      />
                    </>
                  }
                  titleTypographyProps={{ variant: "h6", fontWeight: 800 }}
                  action={
                    <EditButton
                      onClick={() =>
                        redirect("edit", "property_sellers", data[record].id)
                      }
                    />
                  }
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> User Name:&nbsp;</span>
                    <ReferenceField source="user_id" reference="users">
                      <TextField source="full_name" />
                    </ReferenceField>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Property Title:&nbsp;
                    </span>
                    <ReferenceField source="property_id" reference="properties">
                      <TextField source="property_title" />
                    </ReferenceField>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Seller Name:&nbsp;</span>
                    <TextField
                      source="seller_name"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Address:&nbsp; </span>
                    <TextField
                      source="address"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Title Company Closer:&nbsp;
                    </span>
                    <TextField
                      source="title_company_closer"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Amount Of Contract:&nbsp;
                    </span>
                    <NumberField source="amount_of_contract" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Is Earnest Money Received:&nbsp;
                    </span>
                    <BooleanField source="is_earnest_money_received" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Earnest Money Received Date:&nbsp;
                    </span>
                    <DateField source="earnest_money_received_date" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Is Contract To Lender:&nbsp;
                    </span>
                    <BooleanField source="is_contract_to_lender" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Contract To Lender Date:&nbsp;
                    </span>
                    <DateField source="contract_to_lender_date" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Is Home Warranty:&nbsp;
                    </span>
                    <BooleanField source="is_home_warranty" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Home Warranty Date:&nbsp;
                    </span>
                    <DateField source="home_warranty_date" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Is Survey Received:&nbsp;
                    </span>
                    <BooleanField source="is_survey_received" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Is New Survey:&nbsp;
                    </span>
                    <BooleanField source="is_new_survey" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      New Survey Info:&nbsp;
                    </span>
                    <TextField
                      source="new_survey_info"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Home Inspection Date:&nbsp;
                    </span>
                    <DateField source="home_inspection_date" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Home Inspection Info:&nbsp;
                    </span>
                    <TextField
                      source="home_inspection_info"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Termite Inspection Date:&nbsp;
                    </span>
                    <DateField source="termite_inspection_date" />
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Termite Inspection Info:&nbsp;
                    </span>
                    <TextField
                      source="termite_inspection_info"
                      className={classes.descriptionText}
                    />
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Appraisal Date:&nbsp;
                    </span>
                    <DateField source="appraisal_date" />
                  </Typography>

                  {/* <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Appraisal Due Date:&nbsp;
                    </span>
                    <DateField source="appraisal_due_date" />
                  </Typography> */}

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Appraisal Additional Info:&nbsp;
                    </span>
                    <TextField
                      source="appraisal_additional_info"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Is Cda Sent:&nbsp;</span>
                    <BooleanField source="is_cda_sent" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Is Switch Over Utilities:&nbsp;
                    </span>
                    <BooleanField source="is_switch_over_utilities" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Option Period End Date:&nbsp;
                    </span>
                    <DateField source="option_period_end_date" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Additional Info Entire:&nbsp;
                    </span>
                    <TextField
                      source="additional_info_entire"
                      className={classes.descriptionText}
                    />
                  </Typography>
                </CardContent>
              </Card>
            </RecordContextProvider>
          );
        })}
    </Box>
  );
};

PropertySellersMobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default PropertySellersMobileGrid;
