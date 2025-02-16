import React, { useEffect, useContext, useState } from "react";
import { DataContext } from "./../App";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import CropTest from "../components/CropImage";
import AlertDialog from "../components/AlertDialog";
import updateSateObject from "../Helpers/updateSateObject";
import { Typography } from "@material-ui/core";
import useGlobalStyles from "./../GlobalStyles";

/** This array contains all the data to be obtained the id is same as the the state where the values will be stored*/
const inputFields = [
  //   {
  //     id: "personalName",
  //     label: "Candidate Name",
  //   },
  {
    id: "employeeRole",
    label: "Role",
  },
  {
    id: "employeePayScale",
    label: "Employee Pay Scale",
  },
  {
    id: "date",
    label: "Date",
  },
];

const BusinessDetails = () => {
  const [data, setData] = useContext(DataContext);
  const [imageUrl, setImageUrl] = useState(null); // This state stores the logo url
  const global = useGlobalStyles();

  //Update the logoUrl state and trigger pdf rerender to show image
  useEffect(() => {
    updateSateObject(imageUrl, "logoUrl", setData);
  }, [imageUrl]);

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column">
        <Typography variant="h6">
          <Box fontWeight="bold" marginBottom="20px">
            Employee Details
          </Box>
        </Typography>
        {inputFields.map((item) => (
          <TextField
            onChange={(e) => updateSateObject(e.target.value, item.id, setData)}
            key={item.id}
            variant="outlined"
            size="small"
            label={item.label}
            value={data[item.id]}
            style={{ marginBottom: "15px" }}
            InputLabelProps={{
              classes: {
                root: global.placeholder,
              },
            }}
          />
        ))}
        {/* <Box display="flex" marginBottom={2}>
          <AlertDialog
            text={
              data.logoUrl ? "Change Business Logo" : "Upload business Logo"
            }
            content={<CropTest aspectRatio={1} croppedImageUrl={setImageUrl} />}
          />
        </Box> */}
      </Box>
    </Container>
  );
};

export default BusinessDetails;
