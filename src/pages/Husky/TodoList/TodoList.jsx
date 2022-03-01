import { useState } from 'react';

import { List } from './components/utils';
import { Item } from './Item';
import { Add } from './Add';

function addTask(taskTitle, todoList, setTodoList) {
  if ([null, undefined, ''].includes(taskTitle)) {
    return;
  }
  const task = {
    id: new Date().getTime(),
    title: taskTitle,
    editTitle: taskTitle,
    status: false,
    edit: false,
  };
  setTodoList([...todoList, ...[task]]);
}

function deleteTask(deleteIndex, todoList, setTodoList) {
  const newTodoList = todoList.filter((task) => task.id !== deleteIndex);
  setTodoList(newTodoList);
}

function editTask(newTitle, id, todoList, setTodoList) {
  const newTodoList = todoList.map((task) => {
    task.id === id && (task.editTitle = newTitle);
    return task;
  });
  setTodoList(newTodoList);
}

function toggleTask(id, todoList, setTodoList) {
  const newTodoList = todoList.map((task) => {
    task.id === id && (task.status = !task.status);
    return task;
  });
  setTodoList(newTodoList);
}

function toggleEditTask(id, todoList, setTodoList) {
  const newTodoList = todoList.map((task) => {
    if (task.id === id) {
      if (task.edit && task.editTitle !== '') {
        task.title = task.editTitle;
      }
      task.edit = !task.edit;
    }
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
      <Add
        setNewTalk={setNewTalk}
        addTask={addTask}
        newTalk={newTalk}
        todoList={todoList}
        setTodoList={setTodoList}
      />

      {/* list */}
      <List
        items={todoList.map((task) => {
          return (
            <Item
              key={task.id}
              task={task}
              onClick={() => toggleTask(task.id, todoList, setTodoList)}
              clickDelete={() => deleteTask(task.id, todoList, setTodoList)}
              clickEdit={() => toggleEditTask(task.id, todoList, setTodoList)}
              editTask={(newTitle) => editTask(newTitle, task.id, todoList, setTodoList)}
            />
          );
        })}
      />
    </div>
  );
}

export default TodoList;
