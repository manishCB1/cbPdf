import React, { useState } from "react";
import {
  Box,
  Grid,
  MenuItem,
  Paper,
  Typography,
  Select,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { one, two, three, four } from "../media";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function ChooseTemplate({
  setSelectedTemplate,
  selectedTemplate,
}) {
  const handleChange = (event) => {
    // console.log(event.target.value, "Testing template");
    setSelectedTemplate(event.target.value);
  };

  return (
    <Box className="templatebox">
      <Router>
        <Select
          value={selectedTemplate}
          onChange={handleChange}
          displayEmpty
          fullWidth
          variant="outlined"
          style={{ marginBottom: "20px" }}
        >
          <MenuItem value="" disabled>
            Choose a Template
          </MenuItem>
          <MenuItem value="template1">Template 1</MenuItem>
          <MenuItem value="template2">Template 2</MenuItem>
          <MenuItem value="template3">Template 3</MenuItem>
          <MenuItem value="template4">Template 4</MenuItem>
          <MenuItem value="template5">Template 5</MenuItem>
          {/* Add more MenuItem components for additional templates */}
        </Select>
        {/* 
        <Route path="/template1">
          <Template1 />
        </Route>
        <Route path="/template2">
          <Template2 />
        </Route> */}
        {/* Add more Route components for additional templates */}
      </Router>
    </Box>
  );
}
