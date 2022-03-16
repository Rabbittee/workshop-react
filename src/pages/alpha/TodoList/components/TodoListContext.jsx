import { useContext, createContext } from 'react';
import { useEffect, useState } from 'react';
import { STATUS, STATE } from '../constant';

export const TodoListContext = createContext();

const memory = 'alpha_list';

export function TodoListProvider({ children }) {
  const localList = JSON.parse(localStorage.getItem(memory)) || [];
  const [list, setList] = useState(localList);

  function createItem(value) {
    const item = { id: Date.now(), title: value, status: STATUS.todo, state: STATE.null };

    setList((list) => list.concat(item));
    localStorage.setItem(memory, JSON.stringify(list));
  }

  function onSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    createItem(formdata.get(STATUS.todo));
    event.target.reset();
  }

  function toggleStatus(item) {
    item.status = item.status === STATUS.complete ? STATUS.todo : STATUS.complete;
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function onDelete(item) {
    setList((list) => list.filter((_item) => _item.id !== item.id));
  }

  function toggleEdit(item) {
    item.state = STATE.edit;
    onUpdate(item);
  }

  function onChange(event) {
    const { name, value } = event.target;
    onUpdate({ id: Number(name), title: value, state: STATE.edit, status: STATUS.todo });
  }

  function onUpdate(item) {
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  useEffect(() => {
    localStorage.setItem(memory, JSON.stringify(list));
  }, [list]);

  const value = { list, setList, onSubmit, toggleStatus, onDelete, onUpdate, toggleEdit, onChange };
  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
}

export const useTodoList = () => {
  return useContext(TodoListContext);
};
