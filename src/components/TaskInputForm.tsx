import { Button, Grid, TextField } from '@mui/material';
import { VFC } from 'react';

const TaskInputForm: VFC = () => (
  <Grid container spacing={3} justifyContent="center" alignItems="center">
    <Grid item xs={10}>
      <TextField id="taskForm" label="write a task" variant="standard" fullWidth />
    </Grid>
    <Grid item xs={2}>
      <Button variant='contained'>Create</Button>
    </Grid>
  </Grid>
);

export default TaskInputForm;
