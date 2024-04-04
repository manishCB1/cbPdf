import { Avatar, Box, Container, Grid, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { DataContext } from "./../App";
import { makeStyles } from "@material-ui/core";
import CompanyLogo from "../cblogo.png";
import CbLogo from "../CB_Logo.png";
import backgroundImage from "../bg.png"
import robotoBlack from "../font/Roboto-Black.ttf";
import robotoLight from "../font/Roboto-Light.ttf";
import robotoMedium from "../font/Roboto-Medium.ttf";
import robotoRegular from "../font/Roboto-Regular.ttf";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.values.sm,
    [theme.breakpoints.down("sm")]: {
      maxWidth: theme.breakpoints.values.md,
    },
    "& p": {
      wordBreak: "break-word",
    },
  },
  mainHeader: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  header: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  documentText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  paperWithLogo: {
    // padding: "20px",
    // minHeight: "90vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "black",
  },
  // Print-specific styles
  "@media print": {
    root: {
      maxWidth: "100%",
    },
    paperWithLogo: {
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      minHeight: "100%",
    },
    documentText: {
      fontSize: "12px",
    },
  },
}));

export default function Template1() {
  const [data, setData] = useContext(DataContext);
  const classes = useStyles();
  return (
    <Container className={classes.root} >
      <Box sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={CbLogo} height={100} width={250} />
        <Typography style={{ fontSize: '10px', fontWeight: '400' }}>
          office@createbytes.com<br />www.createbytes.com
        </Typography>
      </Box>
      <Box minHeight="250px" marginTop="5px" color="black" className={classes.paperWithLogo} >
        {(data.personalName ||
          data.personalEmail ||
          data.personalAddress) && (
            <Grid
              item
              xs
              container
              wrap="nowrap"
              direction="column"
              style={{ minHeight: "200px" }}
            >
              <Grid item>
                <SectionHeading />
                <Box marginTop={2} marginBottom={2}>
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <DocumentText>
                      <strong>
                        {data.personalName === ""
                          ? "NAME OF CANDIDATE"
                          : data.personalName}
                      </strong>
                    </DocumentText>
                    <DocumentText>{data.date}</DocumentText>
                  </Box>
                  <DocumentText>
                    {data.personalAddress === ""
                      ? "ADDRESS"
                      : data.personalAddress}
                  </DocumentText>
                </Box>
              </Grid>
              <Grid item={24}>
                <DocumentText>
                  <strong>
                    {data.subject === ""
                      ? "Sub:OFFER LETTER"
                      : `Sub:${data.subject}`}
                  </strong>
                </DocumentText>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs>
                  <SectionHeading />
                  <Box marginTop={2} marginBottom={2}>
                    <DocumentText>{`Hello ${data.personalName},`}</DocumentText>
                    <br></br>
                    <DocumentText>
                      Congratulations! We are pleased to confirm that you have
                      been selected to work for <strong>CreateBytes</strong>. We
                      are delighted to make you the following job offer:
                    </DocumentText>
                    <br></br>
                    <DocumentText>
                      You will be joining as a{" "}
                      <strong>"{data.employeeRole}"</strong> with an annual
                      fixed CTC of Rs.{" "}
                      <strong>"{data.employeePayScale}"</strong>. Your reporting
                      manager will be <strong>Ms. Roli Kapoor.</strong>
                    </DocumentText>
                    <br></br>
                    <DocumentText>
                      You are expected to join us on or before{" "}
                      <strong>21/03/2022</strong>, failing which this employment
                      oﬀer will stand rescinded.
                    </DocumentText>
                    <br></br>
                    <DocumentText>
                      This offer shall remain open for your acceptance for a
                      period of <strong>(02) two days</strong> from the date of
                      this letter mentioned above. You may indicate your
                      acceptance to the terms of this offer by affixing a
                      digital/scanned signature and return it within the above
                      specified period, failing which the offer stands cancelled
                      without any communication from the organization.{" "}
                      <strong>
                        You are required to attest to all the pages with the
                        date undersigned along with the declaration enclosed
                        (signature should be the same as your valid ID proof).
                      </strong>
                    </DocumentText>
                    <br></br>
                    <DocumentText>
                      A detailed appointment letter shall be given to you on the
                      date of joining. Please note that this offer is
                      conditional to successful completion of pre-employment
                      conditions as mentioned in <strong>Annexure I</strong>{" "}
                      hereto, failing which the offer letter shall stand
                      cancelled.
                    </DocumentText>
                    <br></br>
                    <DocumentText>
                      Please refer to the enclosed{" "}
                      <strong>Annexures - I, II & III</strong> for further
                      employment details.
                    </DocumentText>
                    <br></br>
                    <DocumentText>
                      We look forward to a long-term and mutually rewarding
                      relationship with you. We are confident that you will make
                      a significant contribution to the organization.
                    </DocumentText>
                    <br></br>
                    <DocumentText>
                      <strong>Sincerely,</strong>
                    </DocumentText>
                  </Box>
                  <Box />
                </Grid>
              </Grid>
            </Grid>
          )}
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Left half */}
          <Grid item xs={12} md={6}>
            <DocumentText>
              <strong>Authorised Signatory</strong>
            </DocumentText>
            <DocumentText>
              <strong>CreateBytes</strong>
            </DocumentText>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            style={{ textAlign: "right", paddingRight: "10px" }}
          >
            <DocumentText>
              <strong>Name</strong>
            </DocumentText>
            <DocumentText>
              <strong>Sign & Date</strong>
            </DocumentText>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

const SectionHeading = ({ text }) => {
  const [data, setData] = useContext(DataContext);
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="body2" className={classes.header}>
        <Box>{text}</Box>
      </Typography>
    </Box>
  );
};

const BulletPoint = ({ full, text }) => (
  <Box
    style={{
      marginLeft: 8,
      display: "flex",
      flexDirection: "row",
      width: full ? "100%" : "50%",
      alignItems: "flex-start",
      paddingVertical: 3,
    }}
  >
    <Box
      style={{
        width: 5,
        height: 5,
        marginTop: 5,
        borderRadius: 100,
        backgroundColor: "black",
      }}
    />
    <DocumentText>
      {" "}
      <Box marginLeft={1}>{text}</Box>{" "}
    </DocumentText>
  </Box>
);

const DocumentText = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography
      display="block"
      component="p"
      className={classes.documentText}
      variant="caption"
    >
      {children}
    </Typography>
  );
};
