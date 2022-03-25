import { createContext, useContext, useState } from 'react';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const init = {
    done: false,
    edit: false,
  };

  const add = ({ key, target }, id = Date.now()) => {
    // 新增子項目
    if (key === 'Enter' && !!target.value) {
      const data = target.value.trim();
      setList([...list, { value: data, ...init, id }]);
      setInput(''); // clear
      return;
    }
    return setInput(target.value);
  };

  const addBtn = (val, id = Date.now()) => {
    // 新增子項目的按鈕
    const data = val.trim();
    if (!!value) {
      setList([...list, { value: data, ...init, id }]);
      setInput('');
    }
  };

  const edit = ({ target, key }, item) => {
    // 編輯子項目
    const newList = list.map((task) => {
      task.id === item.id && (task.value = target.value);
      return task;
    });
    setList(newList);
    // 按下 enter 時，切換回去顯示狀態
    key === 'Enter' && toggle(item, 'edit');
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
