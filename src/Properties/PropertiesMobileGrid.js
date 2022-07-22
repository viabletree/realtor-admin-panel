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

const PropertiesMobileGrid = (props) => {
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
                      Property #
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
                        redirect("edit", "properties", data[record].id)
                      }
                    />
                  }
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> User Name:&nbsp;</span>
                    <ReferenceField source="id" reference="users">
                      <TextField source="full_name" />
                    </ReferenceField>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Type:&nbsp;</span>
                    <ReferenceField
                      source="property_type_id"
                      reference="property_types"
                    >
                      <TextField source="category_name" />
                    </ReferenceField>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Address:&nbsp; </span>
                    <TextField
                      source="property_address"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Title:&nbsp; </span>
                    <TextField
                      source="property_title"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Price:&nbsp;</span>
                    <NumberField
                      source="property_price"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Area:&nbsp;</span>
                    <NumberField
                      source="property_area"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>SQFT:&nbsp;</span>
                    <NumberField
                      source="property_square_feet"
                      className={classes.descriptionText}
                    />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Year Built:&nbsp;</span>
                    <DateField source="property_year_built" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}>Description:&nbsp;</span>
                    <TextField
                      source="property_description"
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

PropertiesMobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default PropertiesMobileGrid;
