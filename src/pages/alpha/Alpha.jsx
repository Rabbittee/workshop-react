import './style.css';
import { Complete, Input } from './components';
import { useEffect, useState } from 'react';
import { clsx } from './utils';

const Alpha = () => {
  const localList = JSON.parse(localStorage.getItem('alpha_list')) || [];
  const [list, setList] = useState(localList);

  function createItem(value) {
    console.log(value);
    const item = { id: Date.now(), title: value, status: 'todo', state: 'null' };
    setList((list) => list.concat(item));
    localStorage.setItem('alpha_list', JSON.stringify(list));
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const formdata = new FormData(event.target);
    createItem(formdata.get('todo'));
  }

  function toggleStatus(item) {
    item['status'] === 'complete' ? (item['status'] = 'todo') : (item['status'] = 'complete');
    console.log(item);
    setList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
    localStorage.setItem('alpha_list', JSON.stringify(list));
  }

  function onDelete(item) {
    setList((list) => list.filter((_item) => _item !== item));
    localStorage.setItem('alpha_list', JSON.stringify(list));
  }

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <div>
      <main className="mx-auto flex w-11/12 max-w-2xl flex-col items-center justify-center space-y-12 pt-40">
        <h1 className="text-4xl text-teal-700 drop-shadow-md">My Todo List</h1>
        <form
          className="flex w-full justify-center space-x-5 rounded-lg border-2 border-teal-200 bg-gray-100 p-8 shadow-lg"
          onSubmit={onSubmit}
        >
          <Input name="todo" />
          <button
            type="submit"
            className="rounded-md bg-gray-400 px-4 py-2 text-white transition-colors duration-300 hover:bg-gray-700"
          >
            +
          </button>
        </form>

        <section className="flex w-full flex-col">
          <h2 className="w-full self-start border-b-2 border-blue-500 pb-4 text-xl text-blue-500">
            To do
          </h2>
          <ul className="in-progress mt-6 flex flex-col space-y-12">
            {list.map((item) => {
              return (
                item.status === 'todo' && (
                  <li
                    className="flex items-center justify-between rounded-lg bg-zinc-50 p-4 "
                    key={item.id}
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        className={clsx(
                          'flex h-6 w-6 items-center justify-center',
                          'rounded-full border  transition-all duration-300 active:scale-90',
                          item.status === 'complete'
                            ? 'border-green-400 text-green-400'
                            : 'border-gray-400 text-gray-400'
                        )}
                        onClick={() => toggleStatus(item)}
                      >
                        ✓
                      </button>
                      <label className="text-gray-600">{item.title}</label>
                    </div>
                    <button
                      className={clsx(
                        'rounded-lg border border-red-500 p-2 text-red-500',
                        'transition-colors duration-300 hover:bg-red-500 hover:text-white'
                      )}
                      onClick={() => onDelete(item)}
                    >
                      Delete
                    </button>
                  </li>
                )
              );
            })}
          </ul>
        </section>
        <Complete list={list} toggleStatus={toggleStatus} onDelete={onDelete} />
      </main>
    </div>
  );
};

export default Alpha;
