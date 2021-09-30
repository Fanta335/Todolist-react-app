import { Button, Grid, TextField } from '@mui/material';
import React, { VFC } from 'react';

type Props = {
  onClick: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textInput: string;
};

const TaskInputForm: VFC<Props> = (props) => {
  const { onClick, handleChange, textInput } = props;

  const disabled = textInput === '';

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={10}>
        <TextField
          id="taskForm"
          label="write a task"
          variant="standard"
          fullWidth
          autoComplete='off'
          onChange={handleChange}
          value={textInput}
        />
      </Grid>
      <Grid item xs={2}>
        {disabled ? (
          <Button variant="contained" onClick={onClick} disabled>
            Create
          </Button>
        ) : (
          <Button variant="contained" onClick={onClick}>
            Create
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default TaskInputForm;
