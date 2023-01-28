import * as React from 'react';
import { useState } from 'react';

type ListProps = {
  allowDelete: () => Promise<boolean>;
};

const data = ['Task 1', 'Task 2', 'Task 3'];

const List = ({ allowDelete }: ListProps) => {
  const [tasks, setTasks] = useState(data);

  const handleRemove = async (task: string) => {
    const canDelete = await allowDelete();
    if (!canDelete) return;

    const newTasks = tasks.filter((innerTask) => innerTask !== task);
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li style={{ marginBottom: 10 }}>
          <span>{task}</span>
          <button style={{ marginLeft: 10 }} onClick={() => handleRemove(task)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
