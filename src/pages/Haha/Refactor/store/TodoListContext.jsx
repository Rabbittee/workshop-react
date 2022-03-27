import { createContext, useContext, useState } from 'react';
import { useDialog } from './DialogContext';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const { dialog, setDialog } = useDialog();
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const init = {
    done: false,
    edit: false,
  };

  const submit = ({ key, target }) => {
    // 送出新增
    if (key === 'Enter' && target.value) {
      return add(target.value);
    }
    return setInput(target.value);
  };

  const submitBtn = () => {
    // 送出新增的按鈕
    if (!!input) return add(input);
  };

  const add = (data, id = Date.now()) => {
    // 新增項目
    setList([...list, { value: data.trim(), ...init, id }]);
    setInput('');
  };

  const edit = ({ target, key }, { id }) => {
    // 編輯項目
    const newList = list.map((task) => {
      task.id === id && (task.value = target.value);
      return task;
    });
    setList(newList);
    // 按下 enter 時，切換回去顯示狀態
    key === 'Enter' && toggle(id, 'edit');
  };

  const editBtn = (item) => {
    // 編輯項目的按鈕
    const newList = list.map((task) => {
      task.id === item.id && (task.value = item.value);
      return task;
    });
    setList(newList);
    toggle(item.id, 'edit');
  };

  const del = () => {
    // 刪除項目
    const newList = list.filter((el) => el.id !== dialog.deleteID);
    setList(newList);
    setDialog({ show: false, deleteID: {} });
  };

  const delBtn = (id) => {
    // 刪除項目的按鈕
    setDialog({ show: true, deleteID: id });
  };

  const toggle = (id, parm) => {
    // 切換不同狀態
    const newItem = list.map((el) => {
      el.id === id && (el[parm] = !el[parm]);
      return el;
    });
    setList(newItem);
  };

  const value = { list, input, submit, edit, del, toggle, submitBtn, editBtn, delBtn };

  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
}

export const useTodoList = () => useContext(TodoListContext);
