import { useState } from 'react';

import { List } from './components/utils';
import { Item } from './Item';
import { Add } from './Add';

function TodoList() {
  const [newTalk, setNewTalk] = useState('');
  const [todoList, setTodoList] = useState([]);

  function addTask() {
    /**
     * 因為 Add 的 input 直接呼叫 setNetTalk，所以會直接更新 newTalk，
     * 就不需要再從 Add 中把 newTalk 傳遞過來，可以直接使用。
     *
     * 並且這時候 trim 的時機比較好
     */
    if (newTalk.trim() === '') {
      return;
    }
    const task = {
      id: new Date().getTime(),
      title: newTalk,
      editTitle: newTalk,
      status: false,
      edit: false,
    };

    // task 不需要先包成 array 再解構
    setTodoList([...todoList, task]);
  }

  function deleteTask(id) {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  }

  function editTask(id, newTitle) {
    const newTodoList = todoList.map((task) => {
      task.id === id && (task.editTitle = newTitle);
      return task;
    });
    setTodoList(newTodoList);
  }

  function toggleTask(id) {
    const newTodoList = todoList.map((task) => {
      task.id === id && (task.status = !task.status);
      return task;
    });
    setTodoList(newTodoList);
  }

  function toggleEditTask(id) {
    const newTodoList = todoList.map((task) => {
      if (task.id === id) {
        task.edit && task.editTitle !== '' && (task.title = task.editTitle);
        task.edit = !task.edit;
      }
      return task;
    });
    setTodoList(newTodoList);
  }

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 bg-slate-500 pt-12">
      {/* add */}
      <Add setNewTalk={setNewTalk} newTalk={newTalk} addTask={addTask} />

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
