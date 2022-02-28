import { useState } from 'react';

import { Input, Button, List } from './components/utils';
import { Item } from './Item';
import { Add } from './components/button';

function addTask(taskTitle, todoList, setTodoList) {
  if ([null, undefined, ''].includes(taskTitle)) {
    return;
  }
  const task = {
    id: new Date().getTime(),
    title: taskTitle,
    status: false,
  };
  setTodoList([...todoList, ...[task]]);
}

function deleteTask(deleteIndex, todoList, setTodoList) {
  const newTodoList = todoList.filter((task) => task.id !== deleteIndex);
  setTodoList(newTodoList);
}

function editTask(taskTitle, todoList, setTodoList) {}

function toggleTask(id, todoList, setTodoList) {
  const newTodoList = todoList.map((task) => {
    task.id === id && (task.status = !task.status);
    return task;
  });
  setTodoList(newTodoList);
}

function TodoList() {
  const [newTalk, setNewTalk] = useState();
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 bg-slate-500 pt-12">
      {/* add */}
      <div className="flex gap-2">
        <div className="relative">
          <span className="absolute top-4 left-4">
            <Add />
          </span>
          <Input placeholder="new task describe" onInput={(e) => setNewTalk(e.target.value)} />
        </div>
        <Button text="add" onClick={() => addTask(newTalk, todoList, setTodoList)} />
      </div>

      {/* list */}
      <List
        items={todoList.map((task) => {
          return (
            <Item
              key={task.id}
              task={task}
              onClick={() => toggleTask(task.id, todoList, setTodoList)}
              clickDelete={() => deleteTask(task.id, todoList, setTodoList)}
              clickEdit={() => {
                console.log('edit');
              }}
            />
          );
        })}
      />
    </div>
  );
}

export default TodoList;
