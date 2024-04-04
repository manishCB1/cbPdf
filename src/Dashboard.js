import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Hidden,
  Paper,
  Switch,
  useMediaQuery,
} from "@material-ui/core";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React, { useContext, useEffect, useRef, useState } from "react";
import Template1 from "./Templates/Template1";
import BusinessDetails from "./formdetails/BusinessDetails";
import AboutUs from "./formdetails/AboutUs";
import Partners from "./formdetails/Partners";
import PersonalDetails from "./formdetails/PersonalDetails";
import { DataContext } from "./App";
import List from "./formdetails/List";
import GetDocumentModal from "./components/GetDocumentModal";
import usePdfRerender from "./Hooks/usePdfRerender";
import { one, two } from "./media";
import Grow from "@material-ui/core/Grow";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Template2 from "./Templates/Template2";
import ChooseTemplate from "./Views/ChooseTemplate";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";
import Template5 from "./Templates/Template5";
import { PDFViewer } from "@react-pdf/renderer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      margin: 8,
      marginTop: 10,
    },
  },
  documentPreview: {
    maxHeight: "100vh",
    paddingBottom: "100px",
    overflow: "auto",
    position: "relative",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      zIndex: 20,
      position: "absolute",
      left: 0,
      width: "100vw",
    },
  },
  formsection: {
    maxHeight: "100vh",
    maxWidth: "360px",
    overflow: "auto",
    paddingTop: "40px",
    paddingBottom: "100px",
    paddingRight: "20px",
    paddingLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
      width: "100vw",
    },
  },
}));

export default function EditHome() {
  const growRef = useRef(null);
  const [data, setData] = useContext(DataContext);
  const { competencies, differentiators, naics } = data;
  const updateDocument = usePdfRerender();
  const themeColors = ["red", "blue", "green", "orange", "purple", "black"];
  const [showTemplateImage, setshowTemplateImage] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [showPreview, setShowPreview] = useState(false);
  const classes = useStyles();
  const [isPDFviwer, setisPDFviwer] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleSwitchChange = () => {
    setshowTemplateImage(!showTemplateImage);
  };

  useEffect(() => {
    matches && setShowPreview(true);
    console.log(matches);
  }, [matches]);

  const handleOpen = () => {
    setOpen(true);

    // updateDocument();
  };
  const handlePdf = () => {
    window.print();

    // const pdf = new jsPDF();

    // const element = growRef.current;

    // // Remove box shadows from all elements
    // const originalBoxShadows = [];
    // const elementsWithBoxShadow = element.querySelectorAll(
    //   "*[style*=box-shadow]"
    // );
    // elementsWithBoxShadow.forEach((el) => {
    //   originalBoxShadows.push(el.style.boxShadow);
    //   el.style.boxShadow = "none";
    // });

    // html2canvas(element, {
    //   // Set the background color to white
    //   // backgroundColor: "#ffffff",
    // }).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");

    //   // Add canvas image to PDF
    //   pdf.addImage(
    //     imgData,
    //     "PNG",
    //     0,
    //     0,
    //     pdf.internal.pageSize.getWidth(),
    //     pdf.internal.pageSize.getHeight()
    //   );

    //   // Restore original box shadows
    //   elementsWithBoxShadow.forEach((el, index) => {
    //     el.style.boxShadow = originalBoxShadows[index];
    //   });

    //   // Save the PDF file
    //   pdf.save("component.pdf");
    // });
  };

  const handleClose = () => {
    setisPDFviwer(false);
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  const [selectedTemplate, setSelectedTemplate] = useState("");
  console.log(selectedTemplate, "sele");
  return (
    <div>
      <ChooseTemplate
        setSelectedTemplate={setSelectedTemplate}
        selectedTemplate={selectedTemplate}
      />

      <Box
        className={classes.root}
        maxHeight="100vh"
        maxWidth="100vw"
        overflow="hidden"
        padding="20px"
        boxSizing="border-box"
      >
        <Grid container>
          <Grid item className={classes.formsection}>
            <PersonalDetails />
            <Box height="40px" />
            <BusinessDetails />
            <Box height="20px" />
            {/* <AboutUs /> */}
            <Box height="40px" />
            <Partners />
            <Box height="40px" />
            {/* <List sectionData={competencies} sectionName="competencies" />, */}
            {/* <Box height="40px" /> */}
            {/* <List sectionData={differentiators} sectionName="differentiators" /> */}
            ,{/* <Box height="40px" /> */}
            {/* <List sectionData={naics} sectionName="naics" />, */}
          </Grid>

          <Grow
            in={showPreview}
            // className="paper-box"
            // style={{ border: "2px solid red" }}
          >
            <Grid item xs className={classes.documentPreview}>
              <Container>
                <Grid container>
                  {themeColors.map((item) => (
                    <Grid key={item} item>
                      {/* <SelectColor key={item} color={item} /> */}
                    </Grid>
                  ))}
                  {/* <FormControlLabel
                    style={{ marginLeft: "auto" }}
                    control={<Switch onChange={handleSwitchChange} />}
                    label="View template"
                  /> */}
                </Grid>
                <div ref={growRef}>
                  {showTemplateImage ? (
                    <img width="100%" src={one} alt="kjjnjknk" />
                  ) : (
                    (selectedTemplate === "template1" && <Template1 />) ||
                    (selectedTemplate === "template2" && <Template2 />) ||
                    (selectedTemplate === "template3" && <Template3 />) ||
                    (selectedTemplate === "template4" && <Template4 />) ||
                    (selectedTemplate === "template5" && <Template5 />)
                  )}
                </div>
              </Container>
            </Grid>
          </Grow>
        </Grid>

        {isPDFviwer ? (
          <PDFViewer>
            <Template1 />
            {/* {selectedTemplate === "template1" && <Template1 />} */}
            {/* {selectedTemplate === "template2" && <Template2 />}
                  {selectedTemplate === "template3" && <Template3 />}
                  {selectedTemplate === "template4" && <Template4 />}
                  {selectedTemplate === "template5" && <Template5 />} */}
          </PDFViewer>
        ) : (
          <></>
        )}
        <Box
          display="flex"
          flexDirection="row"
          zIndex={60}
          right={10}
          position="fixed"
          bottom="20px"
          bgcolor="white"
        >
          {/* <GetDocumentModal open={open} close={handleClose} /> */}
          {/* <Hidden mdUp>
            <Button variant="contained" color="primary" onClick={handlePreview}>
              {showPreview ? "Close Preview" : "Preview Document"}
            </Button>
          </Hidden> */}
        </Box>
      </Box>
      <Button
        className="button-export"
        variant="contained"
        color="primary"
        onClick={handlePdf}
      >
        Export Document
      </Button>
    </div>
  );
}

const SelectColor = ({ color }) => {
  const [data, setData] = useContext(DataContext);

  const updateColor = () => {
    setData({ ...data, themeColor: color });
  };
  return (
    <></>
    // <Box
    //   width="30px"
    //   height="30px"
    //   marginBottom="10px"
    //   marginRight="5px"
    //   onClick={updateColor}
    // >
    //   {/* <Paper elevation={2} style={{ backgroundColor: color }}>
    //     {/* <Box padding="20px" width="100%" height="100%"></Box> */}
    //   </Paper> */}
    // </Box>
  );
};
