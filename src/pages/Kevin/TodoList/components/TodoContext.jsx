import { createContext, useState, useContext } from 'react';
import LocalStorageTodo from './../js/todo/localstorageTodo.js';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const todo = new LocalStorageTodo('kevin-local-storage-todo-list', true);

  const [todoItems, setTodoItems] = useState(todo.todos);
  const [todoFilter, setTodoFilter] = useState('all');

  const listStatus = {
    completed: {
      value: 'completed',
      method: () => todoItems.filter((item) => item.isCompleted === true),
    },
    onProcessing: {
      value: 'onProcessing',
      method: () => todoItems.filter((item) => item.isCompleted === false),
    },
    all: {
      value: 'all',
      method: () => [...todoItems].sort((a, b) => b.isCompleted === true && -1),
    },
  };

  const filteredTodoItems = () => {
    const filteredMethod = listStatus[todoFilter]?.method;

    if (typeof filteredMethod !== 'function')
      throw new Error('filteredTodoItems: filteredMethod receive a wrong key.');

    return filteredMethod();
  };

  const addTodo = (newItem) => {
    const { todos } = todo.add(newItem);
    setTodoItems(todos);
  };

  const editTodo = (itemId, { task, isCompleted }) => {
    const { todos } = todo.edit(itemId, { task, isCompleted });
    setTodoItems(todos);
  };

  const removeTodo = (todoId) => {
    const { todos } = todo.remove(todoId);
    setTodoItems(todos);
  };

  const value = { filteredTodoItems, listStatus, setTodoFilter, addTodo, editTodo, removeTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  return useContext(TodoContext);
}
