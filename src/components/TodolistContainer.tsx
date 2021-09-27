import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";

const TodolistContainer = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={10}>
          <TextField id="taskForm" label="Standard" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Create</Button>
        </Grid>
      </Grid>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            TODO: aaaaa
          </Typography>
          <Button variant="contained">Delete</Button>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            TODO: aaaaa
          </Typography>
          <Button variant="contained">Delete</Button>
        </CardContent>
      </Card>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            TODO: aaaaa
          </Typography>
          <Button variant="contained">Delete</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TodolistContainer;
