import { Complete, Todo, Form } from './components';
import { useEffect, useState } from 'react';
import { Status, State } from './constant';

const memory = 'alpha_list';

const TodoList = () => {
  const localList = JSON.parse(localStorage.getItem(memory)) || [];
  const [list, setList] = useState(localList);

  function createItem(value) {
    const item = { id: Date.now(), title: value, status: Status.todo, state: State.null };

    setList((list) => list.concat(item));
    localStorage.setItem(memory, JSON.stringify(list));
  }

  function onSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    createItem(formdata.get(Status.todo));
    event.target.reset();
  }

  function toggleStatus(item) {
    item['status'] === 'complete' ? (item['status'] = 'todo') : (item['status'] = 'complete');
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function onDelete(item) {
    setList((list) => list.filter((_item) => _item.id !== item.id));
  }

  function toggleEdit(item) {
    item.state = State.edit;
    onUpdate(item);
  }

  function onChange(event) {
    const { name, value } = event.target;
    onUpdate({ id: Number(name), title: value, state: State.edit, status: Status.todo });
  }

  function onUpdate(item) {
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  useEffect(() => {
    localStorage.setItem(memory, JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <main className="mx-auto flex w-11/12 max-w-2xl flex-col items-center justify-center space-y-12 pt-40">
        <h1 className="text-4xl text-teal-700 drop-shadow-md">My Todo List</h1>

        <Form onSubmit={onSubmit} />

        <Todo
          list={list}
          onChange={onChange}
          onUpdate={onUpdate}
          onDelete={onDelete}
          toggleEdit={toggleEdit}
          toggleStatus={toggleStatus}
        />

        <Complete list={list} toggleStatus={toggleStatus} onDelete={onDelete} />
      </main>
    </div>
  );
};

export default TodoList;
