import { VFC } from 'react';

import TaskCard, { Task } from './TaskCard';

type Props = {
  tasks: Task[];
};

const TaskList: VFC<Props> = (props) => {
  const { tasks } = props;

  return (
    <>
      {tasks.length === 0
        ? 'TODO リストがありません'
        : tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </>
  );
};

export default TaskList;
