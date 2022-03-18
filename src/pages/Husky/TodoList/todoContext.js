import { useState, createContext, useContext } from 'react';

const NewTaskContext = createContext();
const useNewTaskContext = () => {
  return useContext(NewTaskContext);
};

const ItemContext = createContext();
const useItemContext = () => {
  return useContext(ItemContext);
};

function useTodoList() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  function updateNewTask(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    const newTaskTitle = newTask.trim();
    if (newTaskTitle === '') {
      return;
    }
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      editTitle: newTaskTitle,
      status: false,
      edit: false,
    };
    setTodoList([...todoList, task]);
    setNewTask('');
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

  return {
    newTaskContextValue: {
      newTask,
      addTask,
      updateNewTask,
    },
    createItemMethods: (task) => {
      return {
        clickDelete: () => deleteTask(task.id),
        editTask: (newTitle) => editTask(task.id, newTitle),
        onClick: () => toggleTask(task.id),
        clickEdit: () => toggleEditTask(task.id),
      };
    },
    todoList,
  };
}

export { useTodoList, NewTaskContext, useNewTaskContext, ItemContext, useItemContext };
