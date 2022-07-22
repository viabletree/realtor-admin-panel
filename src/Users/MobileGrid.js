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

const useStyles = makeStyles((theme) => ({
  descriptionText: {
    display: "block",
    width: 250,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const MobileGrid = (props) => {
  const classes = useStyles();
  const redirect = useRedirect();

  const { data } = props;

  return (
    <Box margin="0.5em">
      {/* {data?.map((record) => ( */}
      {Object.keys(data)
        .sort((a, b) => data[b].id - data[a].id)
        .map(function (record, index) {
          return (
            <RecordContextProvider key={data[record].id} value={data[record]}>
              <Card sx={{ margin: "0.5rem 0" }}>
                <CardHeader
                  title={
                    <>
                      User #
                      <TextField source="id" variant="h6" />
                    </>
                  }
                  titleTypographyProps={{ variant: "h6" }}
                  action={
                    <EditButton
                      onClick={() => redirect("edit", "users", data[record].id)}
                    />
                  }
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2" gutterBottom>
                    Full Name:&nbsp;
                    <ReferenceField source="id" label="User" reference="users">
                      <TextField source="full_name" />
                    </ReferenceField>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Agency Name:&nbsp;
                    <TextField source="agency_name" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Bio:&nbsp;
                    <TextField
                      source="bio"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Location:&nbsp;
                    <TextField source="location" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Availability From:&nbsp;
                    <TextField source="availability_from" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Availability To:&nbsp;
                    <TextField source="availability_to" />
                  </Typography>
                </CardContent>
              </Card>
            </RecordContextProvider>
          );
        })}

      {/* ))} */}
    </Box>
  );
};

MobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default MobileGrid;
