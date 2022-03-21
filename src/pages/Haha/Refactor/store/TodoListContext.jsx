import { createContext, useContext, useState } from 'react';
// import useMiddleDialog from '../utils/useDialog';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({ text: 'add new item', value: '' });

  const add = ({ key, target }, done = false, id = Date.now(), edit = false) => {
    if (key === 'Enter' && !!target.value) {
      const data = target.value.trim();
      setList([...list, { value: data, done, id, edit }]);
      setInput({ ...input, value: '' }); // clear
    }
  };

  const edit = ({ target }) => {
    // when input type..input value is type things
    setInput({ ...input, value: target.value });
  };

  const toggle = (item, parm) => {
    const newItem = list.map((el) => {
      el.id === item.id && (el[parm] = !el[parm]);
      return el;
    });
    setList(newItem);
  };

  const value = { list, setList, input, setInput, add, edit, toggle };

  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
}

export const useTodoList = () => useContext(TodoListContext);
