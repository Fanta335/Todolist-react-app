import { VFC } from 'react';

import TaskCard, { Task } from './TaskCard';

type Props = {
  tasks: Task[];
  onClick: (target: Task) => void;
};

const TaskList: VFC<Props> = (props) => {
  const { tasks, onClick } = props;

  return (
    <>
      {tasks.length === 0
        ? 'TODO リストがありません'
        : tasks.map((task) => (
            <TaskCard key={task.id} task={task} onClick={onClick} />
          ))}
    </>
  );
};

export default TaskList;
