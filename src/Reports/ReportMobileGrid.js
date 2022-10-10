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

const ReportMobileGrid = (props) => {
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
                      Report #
                      <TextField
                        source="id"
                        variant="h6"
                        style={{ fontWeight: 800 }}
                      />
                    </>
                  }
                  titleTypographyProps={{ variant: "h6", fontWeight: 800 }}
                  // action={
                  //   <EditButton
                  //     onClick={() => redirect("edit", "reports", data[record].id)}
                  //   />
                  // }
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Property ID:&nbsp;</span>
                      <TextField source="id" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Property Title:&nbsp;</span>
                    <TextField source="property_title" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Agent Name:&nbsp; </span>
                    <TextField
                      source="full_name"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Property Buyer:&nbsp; </span>
                    <TextField source="buyer_name" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Property Seller:&nbsp;
                    </span>
                    <TextField source="seller_name" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Amount of Contract:&nbsp;
                    </span>
                    <TextField source="amount_of_contract" />
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>
                      Sold At:&nbsp;
                    </span>
                    <DateField source="sold_at" />
                  </Typography>
                </CardContent>
              </Card>
            </RecordContextProvider>
          );
        })}
    </Box>
  );
};

ReportMobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default ReportMobileGrid;
