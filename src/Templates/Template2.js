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
    padding: "20px",
    minHeight: "90vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "black",
  },
}));

export default function Template2() {
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
                  <DocumentText>
                    <strong>Annexure - I (Other Terms)</strong>
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
                  <strong>1. Posting and Transfer</strong>
                  <DocumentText>
                    Your services are liable to be transferred/deputed, at the
                    sole discretion of Management, in such other capacity as the
                    organization may determine, to any department/section,
                    location, associate, a sister concern, or subsidiary, at any
                    place in India or abroad, whether existing today or which
                    may come up in future. In such a case, you will be governed
                    by the terms and conditions of the service applicable at the
                    new placement location.
                  </DocumentText>
                </DocumentText>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs>
                  <SectionHeading />
                  <Box marginTop={2} marginBottom={2}>
                    <DocumentText>
                      {" "}
                      <strong>2. Probation</strong>
                    </DocumentText>

                    <DocumentText>
                      That you will be on probation for a period of (06) six
                      months. The period of probation can be extended at the
                      discretion of the Management and you will continue to be
                      on probation till an order of confirmation has been issued
                      in writing. During the probationary period and any
                      extension thereof, your services can be terminated without
                      giving any notice or salary in lieu thereof by the
                      employer.
                    </DocumentText>

                    <Grid item={24}>
                      <DocumentText>
                        <strong>3. Full-time employment</strong>
                        <DocumentText>
                          Your position is full-time employment with the
                          organization and you shall devote yourself exclusively
                          to the business and interests of the organization. You
                          will not take up any other work for remuneration
                          (part-time or otherwise) or work in an advisory
                          capacity, or be interested directly or indirectly (as
                          shareholder/debenture holder), in any other trade or
                          business during your employment with the organization,
                          without permission in writing of the Management of the
                          organization. You will also not seek membership of any
                          local or public bodies without first obtaining
                          specific permission from the Management.
                        </DocumentText>
                      </DocumentText>
                    </Grid>

                    <Grid item={24}>
                      <DocumentText>
                        <strong>4. Timings</strong>
                        <DocumentText>
                          The standard work days would be from
                          <strong> Monday to Friday ie. 5 days a week </strong>
                          on a regular basis for{" "}
                          <strong>9 hours per day</strong>. Also depending on
                          your deliverables, you will be required to manage your
                          work hours/days to achieve your goals for the defined
                          periods. The work timings may extend beyond the
                          specified hours based on the organization's
                          requirements. The organization reserves the right to
                          change work days and hours of work at any time and as
                          per exigencies of work.
                        </DocumentText>
                      </DocumentText>
                    </Grid>

                    <Grid item={24}>
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
                      <DocumentText>TEsting</DocumentText>
                    </Grid>

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
