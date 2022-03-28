import { createContext, useContext, useState } from 'react';
import { useDialog } from './DialogContext';
import { Init } from '../utils/Init';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const { dialog, setDialog } = useDialog();
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const add = ({ key, target }) => {
    // 送出新增
    if (key === 'Enter' && target.value) {
      return setAdd(target.value);
    }
    return setInput(target.value);
  };

  const addBtn = () => {
    // 送出新增的按鈕
    if (!!input) return setAdd(input);
  };

  const setAdd = (data) => {
    // 新增項目
    setList([...list, { value: data.trim(), ...Init.item() }]);
    setInput('');
  };

  const edit = ({ target, key }, { id }) => {
    // // 送出編輯
    setEdit(target.value, id);
    key === 'Enter' && toggle(id, 'edit');
  };

  const editBtn = ({ value, id }) => {
    // 送出編輯的按鈕
    setEdit(value, id);
    toggle(id, 'edit');
  };

  const setEdit = (data, id) => {
    // 確認編輯結果
    const newList = list.map((task) => {
      task.id === id && (task.value = data);
      return task;
    });
    setList(newList);
  };

  const del = () => {
    // 刪除項目
    const newList = list.filter((el) => el.id !== dialog.deleteID);
    setList(newList);
    setDialog(Init.dialog());
  };

  const delBtn = (id) => {
    // 刪除項目的按鈕
    setDialog(Init.dialog(true, id));
  };

  const toggle = (id, parm) => {
    // 切換不同狀態
    const newItem = list.map((el) => {
      el.id === id && (el[parm] = !el[parm]);
      return el;
    });
    setList(newItem);
  };

  const value = {
    list,
    input,
    Methods: { add, edit, delete: del, toggle },
    Buttons: { add: addBtn, edit: editBtn, delete: delBtn },
  };

  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
}

export const useTodoList = () => useContext(TodoListContext);
