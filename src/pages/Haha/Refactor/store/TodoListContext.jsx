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
    // // 送出編輯
    update(target.value, id);
    key === 'Enter' && toggle(id, 'edit');
  };

  const editBtn = ({ value, id }) => {
    // 送出編輯的按鈕
    update(value, id);
    toggle(id, 'edit');
  };

  const update = (data, id) => {
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

  // const value = { list, input, submit, edit, del, toggle, submitBtn, editBtn, delBtn };

  const value = {
    list,
    input,
    Methods: { add: submit, edit, del, toggle },
    Buttons: { add: submitBtn, edit: editBtn, delete: delBtn },
  };

  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
}

export const useTodoList = () => useContext(TodoListContext);
