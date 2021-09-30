import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useState, VFC } from 'react';
import { Task } from './TaskCard';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';

const TodolistContainer: VFC = () => {
  const [idCount, setIdCount] = useState(1);
  const [textInput, setTextInput] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const increment = () => setIdCount((c) => c + 1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTextInput(event.target.value);

  const clearText = () => setTextInput('');

  const createTask = () => {
    increment();
    const newTask: Task = {
      id: idCount,
      description: textInput,
    };
    clearText();
    const prevTasks: Task[] = tasks.slice();
    prevTasks.push(newTask);
    setTasks(prevTasks);
  };

  const deleteTask = useCallback(
    (target: Task) => {
      const newTasks: Task[] = tasks.slice().filter((t) => t !== target);
      setTasks(newTasks);
    },
    [tasks],
  );

  return (
    <>
      <Box sx={{ flexGrow: 1,  px: 3, py: 4, maxWidth:'50%' }}>
        <Grid container direction="column" spacing={4}>
          <Grid item xs>
            <TaskInputForm
              onClick={createTask}
              handleChange={handleChange}
              textInput={textInput}
            />
          </Grid>
          <Grid item xs>
            <TaskList tasks={tasks} onClick={deleteTask} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default TodolistContainer;
