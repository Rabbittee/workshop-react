import { createContext, useContext, useState } from 'react';

export const TodolistContext = createContext();

export function TodolistProvider({ children }) {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const value = { list, setList };

  return <TodolistContext.Provider value={value}>{children}</TodolistContext.Provider>;
}

export const useTodolist = () => useContext(TodolistContext);
