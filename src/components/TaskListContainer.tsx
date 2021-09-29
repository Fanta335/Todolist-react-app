import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { VFC } from 'react';
import { Task } from './TaskCard';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';

const TodolistContainer: VFC = () => {
  // const [tasks, setTasks] = useState([]);

  // const createTask = (e) => setTasks((t) => t.push(e.value));

  const tasks: Task[] = [
    {
      id: 1,
      description: 'aasd',
    },
    {
      id: 2,
      description: 'sdgdgs',
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, py: 4 }}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <TaskInputForm />
          </Grid>
          <Grid item>
            <TaskList tasks={tasks} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default TodolistContainer;
