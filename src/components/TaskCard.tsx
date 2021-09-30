import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { VFC } from 'react';

type Props = {
  task: Task;
  onClick: (target: Task) => void;
};

export type Task = {
  id: number;
  description: string;
};

const TaskCard: VFC<Props> = (props) => {
  const { task, onClick } = props;

  return (
    <>
      <Card
        variant="outlined"
        sx={{ mb: 2, width: '100%', maxWidth: 500, overflow: 'auto' }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            TODO {task.id}:
          </Typography>
          <Typography variant="h6" gutterBottom>
            {task.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onClick(task)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default TaskCard;
