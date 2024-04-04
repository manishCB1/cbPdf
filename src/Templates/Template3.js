import { Avatar, Box, Container, Grid, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { DataContext } from "./../App";
import { makeStyles } from "@material-ui/core";
import CompanyLogo from "../cblogo.png";
import CbLogo from "../CB_Logo.png";
import backgroundImage from "../bg.png"
// import robotoBlack from "../font/Roboto-Black.ttf";
// import robotoLight from "../font/Roboto-Light.ttf";
// import robotoMedium from "../font/Roboto-Medium.ttf";
// import robotoRegular from "../font/Roboto-Regular.ttf";

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
    padding: "20px",
    minHeight: "90vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "black",
  },
}));

export default function Template3() {
  const [data, setData] = useContext(DataContext);
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={CbLogo} height={100} width={250} />
        <Typography style={{ fontSize: '10px', fontWeight: '400' }}>
          office@createbytes.com<br />www.createbytes.com
        </Typography>
      </Box>
      <Box minHeight="250px" marginTop="5px" color="black" className={classes.paperWithLogo}>
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
                  <br></br>
                  <DocumentText>
                    Successful background verification and confirmation on all
                    the information provided is true and correct. In case, any
                    information provided by you is found to be false/incorrect
                    or misleading, the organization reserves a right to
                    terminate your employment on an immediate basis; You hereby
                    confirm that there is no litigation/conviction against you
                    before any court of law which involves any criminal offences
                    involving moral turpitude; By accepting the terms of this
                    letter, you warrant that all information provided by you is
                    true and correct to the best of your knowledge, you agree to
                    abide/execute by any or all documentation necessary for the
                    organization to conduct a background check and you expressly
                    release the organization from any claim or cause of action
                    arising out of the organization’s verification of such
                    information.
                  </DocumentText>
                  {/* <DocumentText>
                    {data.personalAddress === ""
                      ? "ADDRESS"
                      : data.personalAddress}
                  </DocumentText> */}
                  {/* <DocumentText>{data.personalMobile}</DocumentText>
                    <DocumentText>{data.personalEmail}</DocumentText> */}
                </Box>
              </Grid>
              <Grid item={24}>
                <DocumentText>
                  <strong>6. Confidentiality</strong>
                  <DocumentText>
                    You will not, at any time, during the employment or after,
                    without the consent of the Management disclose or divulge or
                    make public, any information regarding the organization’s
                    affairs or administration or research carried out, whether
                    the same is confided to you or becomes known to you in the
                    course of your service or otherwise.
                  </DocumentText>
                </DocumentText>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs>
                  <SectionHeading />
                  <Box marginTop={2} marginBottom={2}>
                    <DocumentText>
                      {" "}
                      <strong>7. Intellectual Property</strong>
                    </DocumentText>

                    <DocumentText>
                      If you conceive any new or advanced method of improving
                      designs/ processes/ formulae/ systems, etc. in relation to
                      the business/ operations of the organization, such
                      developments will be fully communicated to the
                      organization and will be, and remain, the sole right/
                      property of the organization.
                    </DocumentText>

                    <Grid item={24}>
                      <DocumentText>
                        <strong>8. Responsibilities & Duties</strong>
                        <DocumentText>
                          Your work in the organization will be subject to the
                          rules and regulations of the organization as laid down
                          in relation to conduct, discipline, and other matters.
                          You will always be alive to responsibilities and
                          duties attached to your office and conduct yourself
                          accordingly. You must effectively perform to ensure
                          results.
                        </DocumentText>
                      </DocumentText>
                    </Grid>

                    <Grid item={24}>
                      <DocumentText>
                        <strong>9. Past Records</strong>
                        <DocumentText>
                          This offer is based on the information furnished in
                          your application for employment and during the
                          interviews, you had with us. If any declaration given,
                          or information furnished by you to the organization
                          proves to be false, or if you are found to have
                          willfully suppressed any material information, in such
                          cases, you will be liable to removal from services
                          without any notice.
                        </DocumentText>
                      </DocumentText>
                    </Grid>

                    {/* <Grid item={24}>
                      <DocumentText>
                        <strong>5. Pre-Employment Conditions</strong>
                        <DocumentText>
                          Your acceptance of this offer and commencement of the
                          services with the organization is contingent upon the
                          following conditions:
                        </DocumentText>
                        <br></br>
                        <DocumentText>
                          Verification by the organization of the information
                          and documents provided by you and as listed in
                          <strong>Annexure III</strong> hereto, including any
                          changes in the status of such information and
                          documentation;
                        </DocumentText>
                      </DocumentText>
                    </Grid> */}

                    {/* <br></br>
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
                    </DocumentText> */}
                    {/* <br></br>
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
                    <br></br> */}
                    {/* <DocumentText>
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
                    <br></br> */}
                    {/* <DocumentText>
                      We look forward to a long-term and mutually rewarding
                      relationship with you. We are confident that you will make
                      a significant contribution to the organization.
                    </DocumentText> */}
                    {/* <br></br>
                    <DocumentText>
                      <strong>Sincerely,</strong>
                    </DocumentText> */}
                  </Box>
                  <Box />
                </Grid>
              </Grid>
            </Grid>
          )}
        <Grid container>
          {/* Left half */}
          {/* <Grid item xs={12} md={6}>
              <DocumentText>
                <strong>Authorised Signatory</strong>
              </DocumentText>
              <DocumentText>
                <strong>CreateBytes@123</strong>
              </DocumentText>
            </Grid> */}
          {/* Right half */}
          {/* <Grid item xs={12} md={6}>
              <DocumentText>ABC</DocumentText>
              <DocumentText>ABC</DocumentText>
            </Grid> */}
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
        <Box
        // fontWeight="bold"
        // padding="2px"
        // display="inline-block"
        // bgcolor={data.themeColor}
        // color="white"
        >
          {text}
        </Box>
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
