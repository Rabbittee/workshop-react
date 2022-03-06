import { useState } from 'react';

import { List } from './components/utils';
import { Item } from './Item';
import { Add } from './Add';

class TodoListMethods {
  constructor(todoList, setTodoList) {
    this.todoList = todoList;
    this.setTodoList = setTodoList;
  }

  setData(todoList) {
    this.setTodoList(todoList);
  }

  add(taskTitle) {
    if (taskTitle === '') {
      return;
    }
    const task = {
      id: new Date().getTime(),
      title: taskTitle,
      editTitle: taskTitle,
      status: false,
      edit: false,
    };
    this.setData([...this.todoList, ...[task]]);
  }

  delete(id) {
    const newTodoList = this.todoList.filter((task) => task.id !== id);
    this.setData(newTodoList);
  }

  edit(id, newTitle) {
    const newTodoList = this.todoList.map((task) => {
      task.id === id && (task.editTitle = newTitle);
      return task;
    });
    this.setData(newTodoList);
  }

  toggleTask(id) {
    const newTodoList = this.todoList.map((task) => {
      task.id === id && (task.status = !task.status);
      return task;
    });
    this.setData(newTodoList);
  }

  toggleEditTask(id) {
    const newTodoList = this.todoList.map((task) => {
      if (task.id === id) {
        task.edit && task.editTitle !== '' && (task.title = task.editTitle);
        task.edit = !task.edit;
      }
      return task;
    });
    this.setData(newTodoList);
  }
}

function TodoList() {
  const [newTalk, setNewTalk] = useState('');
  const [todoList, setTodoList] = useState([]);

  const methods = new TodoListMethods(todoList, setTodoList);

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 bg-slate-500 pt-12">
      {/* add */}
      <Add setNewTalk={setNewTalk} newTalk={newTalk} methods={methods} />

      {/* list */}
      <List>
        {todoList.map((task) => {
          return (
            <Item
              key={task.id}
              task={task}
              clickDelete={() => methods.delete(task.id)}
              editTask={(newTitle) => methods.edit(task.id, newTitle)}
              onClick={() => methods.toggleTask(task.id)}
              clickEdit={() => methods.toggleEditTask(task.id)}
            />
          );
        })}
      </List>
    </div>
  );
}

export default TodoList;
