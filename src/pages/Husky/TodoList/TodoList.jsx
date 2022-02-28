import { useState } from 'react';

import { Input, Button } from './components/utils';
import { AddIcon } from './components/svg';

function addTask(taskTitle, todoList, setTodoList) {
  if ([null, undefined, ''].includes(taskTitle)) {
    return;
  }
  const task = {
    id: new Date().getTime(),
    title: taskTitle,
  };
  setTodoList([...todoList, ...[task]]);
}

function TodoList() {
  const [newTalk, setNewTalk] = useState();
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="flex flex-col items-center pt-12">
      {/* add */}
      <div className="flex gap-2">
        <div className="relative">
          <span className="absolute top-4 left-4">
            <AddIcon />
          </span>
          <Input placeholder="new task describe" onInput={(e) => setNewTalk(e.target.value)} />
        </div>
        <Button text="add" onClick={() => addTask(newTalk, todoList, setTodoList)} />
      </div>

      {/* filter */}

      {/* list */}
      <ul>
        {todoList.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
