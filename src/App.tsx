import React from "react";

import TodolistContainer from "components/TodolistContainer";
import "./App.css";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container >
      <Grid item>
        <TodolistContainer />
      </Grid>
    </Grid>
  );
}

export default App;
