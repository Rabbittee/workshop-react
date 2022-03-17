import { useState } from 'react';

import { List } from './components/utils';
import { Item } from './Item';
import { Add } from './Add';

function TodoList() {
  const [newTalk, setNewTalk] = useState('');
  const [todoList, setTodoList] = useState([]);

  function addTask() {
    const newTalkTitle = newTalk.trim();
    if (newTalkTitle === '') {
      return;
    }
    const task = {
      id: new Date().getTime(),
      title: newTalkTitle,
      editTitle: newTalkTitle,
      status: false,
      edit: false,
    };
    setTodoList([...todoList, task]);
    setNewTalk('');
  }

  function deleteTask(id) {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  }

  function editTask(id, newTitle) {
    const newTodoList = todoList.map((task) => {
      if (task.id !== id) return task;

      task.editTitle = newTitle;
      return { ...task };
    });
    setTodoList(newTodoList);
  }

  function toggleTask(id) {
    const newTodoList = todoList.map((task) => {
      if (task.id !== id) return task;

      task.status = !task.status;
      return { ...task };
    });
    setTodoList(newTodoList);
  }

  function toggleEditTask(id) {
    const newTodoList = todoList.map((task) => {
      if (task.id !== id) return task;

      task.edit && task.editTitle !== '' && (task.title = task.editTitle);
      task.edit = !task.edit;
      return { ...task };
    });
    setTodoList(newTodoList);
  }

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 bg-slate-500 pt-12">
      {/* add */}
      <Add setNewTalk={setNewTalk} newTalk={newTalk} addClick={addTask} />

      {/* list */}
      <List>
        {todoList.map((task) => {
          return (
            <Item
              key={task.id}
              task={task}
              clickDelete={() => deleteTask(task.id)}
              editTask={(newTitle) => editTask(task.id, newTitle)}
              onClick={() => toggleTask(task.id)}
              clickEdit={() => toggleEditTask(task.id)}
            />
          );
        })}
      </List>
    </div>
  );
}

export default TodoList;
