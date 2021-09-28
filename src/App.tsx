import { VFC } from 'react';

import TodolistContainer from 'components/TodolistContainer';
import './App.css';
import { Grid } from '@mui/material';

const App: VFC = () => (
  <Grid container>
    <Grid item>
      <TodolistContainer />
    </Grid>
  </Grid>
);

export default App;
