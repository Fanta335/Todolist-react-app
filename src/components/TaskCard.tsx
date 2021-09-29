import { Button, Card, CardContent, Typography } from '@mui/material';
import { VFC } from 'react';

type Props = {
  task: Task;
};

export type Task = {
  id: number;
  description: string;
};

const TaskCard: VFC<Props> = (props) => {
  const { task } = props;

  return (
    <>
      <Card variant="outlined" sx={{mb: 2}}>
        <CardContent>
          <Typography variant="h5" component="div">
            TODO {task.id}: {task.description}
          </Typography>
          <Button variant="outlined" color='error'>Delete</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TaskCard;