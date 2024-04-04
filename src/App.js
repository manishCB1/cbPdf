import React, { useState } from "react";
import { Box } from "@material-ui/core";
import ChooseTemplate from "./Views/ChooseTemplate";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "./components/Preloader";
import EditHome from "./Dashboard";
import Login from "./Login";

export const DataContext = React.createContext();
const CreatePdf = React.lazy(() => import("./Views/CreatePdf"));

export default function App() {
  // const [logoUrl, setLogoUrl] = useState(null)
  const [data, setData] = useState({
    personalName: "NAME OF CANDIDATE",
    personalAddress: "ADDRESS",
    subject: "OFFER LETTER",
    themeColor: "black",
    employeeRole: "SOFTWARE ENGINEER",
    date: "02/03/2024",
    employeePayScale: "1,00,000",
    naics: [],
    competencies: [],
    differentiators: [],
    partnersImage: [],
    triggerUpdate: false,
    documentUrl: null,
  });
  return (
    <Box>
      <DataContext.Provider value={[data, setData]}>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/dashboard" component={EditHome} />
            {/* <Route component={Template1} />
            <Route exact path="/" component={ChooseTemplate} />
            <Route exact path="/template2" component={Template2} />
            <Route exact path="/" component={ChooseTemplate} />
            <Route exact path="/template3" component={Template3} />
            <Route exact path="/" component={ChooseTemplate} />
            <Route exact path="/template4" component={Template4} />
            <Route exact path="/" component={ChooseTemplate} />
            <Route exact path="/template5" component={Template5} /> */}
          </Switch>
        </Suspense>

        {/* <EditHome /> */}
      </DataContext.Provider>
    </Box>
  );
}
