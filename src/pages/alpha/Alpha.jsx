import './style.css';
import { Complete, Todo, Form } from './components';
import { useEffect, useState } from 'react';

const Alpha = () => {
  const localList = JSON.parse(localStorage.getItem('alpha_list')) || [];
  const [list, setList] = useState(localList);

  function createItem(value) {
    const item = { id: Date.now(), title: value, status: 'todo', state: 'null' };
    console.log(list);
    setList((list) => list.concat(item));
    localStorage.setItem('alpha_list', JSON.stringify(list));
    // event.target.reset();
  }

  function onSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    createItem(formdata.get('todo'));
  }

  function toggleStatus(item) {
    item['status'] === 'complete' ? (item['status'] = 'todo') : (item['status'] = 'complete');
    console.log(item);
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function onDelete(item) {
    setList((list) => list.filter((_item) => _item !== item));
  }

  function toggleEdit(item) {
    item['state'] = 'edit';
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function onChange(event) {
    const { name, value } = event.target;
    onUpdate({ id: Number(name), title: value, state: 'edit', status: 'todo' });
  }

  function onUpdate(item) {
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  useEffect(() => {
    localStorage.setItem('alpha_list', JSON.stringify(list));
  }, [list]);
  return (
    <div>
      <main className="mx-auto flex w-11/12 max-w-2xl flex-col items-center justify-center space-y-12 pt-40">
        <h1 className="text-4xl text-teal-700 drop-shadow-md">My Todo List</h1>

        <Form onSubmit={onSubmit} />

        <section className="flex w-full flex-col">
          <h2 className="w-full self-start border-b-2 border-blue-500 pb-4 text-xl text-blue-500">
            To do
          </h2>
          <Todo
            list={list}
            onChange={onChange}
            onUpdate={onUpdate}
            onDelete={onDelete}
            toggleEdit={toggleEdit}
            toggleStatus={toggleStatus}
          />
        </section>
        <Complete list={list} toggleStatus={toggleStatus} onDelete={onDelete} />
      </main>
    </div>
  );
};

export default Alpha;
