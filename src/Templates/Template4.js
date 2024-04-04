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

export default function Template4() {
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
                  <strong>10. Termination & Notice</strong>
                  <DocumentText>
                    Your appointment can be terminated by giving 1 month (30
                    days) notice or salary in lieu thereof by the employer.
                    However, if you wish to resign you are liable to serve 3
                    months (90 days) notice period after acceptance of
                    resignation.
                  </DocumentText>
                  <br></br>
                  <DocumentText>
                    Upon resignation/termination of employment, you will
                    immediately hand over to the organization all property that
                    may be in your possession such as correspondence,
                    specifications, formulae, books, code & credentials,
                    documents, market data, cost data, drawings, or records
                    belonging to the organization or relating to its business
                    and shall not retain or make copies of these items.
                  </DocumentText>
                </DocumentText>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs>
                  <SectionHeading />
                  <Box marginTop={2} marginBottom={2}>
                    <DocumentText>
                      {" "}
                      <strong>11. Authority</strong>
                    </DocumentText>

                    <DocumentText>
                      No authority is vested upon you to make any financial
                      commitment and enter into
                      agreements/contracts/understandings of any nature with any
                      second party and third party without seeking the prior
                      permission/approval of the management. Any violation to
                      exceed your specified authority as mentioned will be
                      seriously viewed and disciplinary/appropriate legal action
                      will be taken.
                    </DocumentText>

                    {/* <Grid item={24}>
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
