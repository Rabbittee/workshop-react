import { useEffect, useState } from 'react';
import storage from './components/storage.js';
import TodoForm from './components/TodoForm';
import { ADD_TODO } from './components/constant.js';
import clsx from 'clsx';
import Button from './components/Button.jsx';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState(() => storage().get() || []);

  function addTodo(text) {
    const newItem = {
      id: new Date().getTime(),
      isDone: false,
      isEdit: false,
      text,
    };
    setDataList([newItem, ...dataList]);
    setInputValue('');
  }
  function updateTodo(text, id) {
    setDataList(
      dataList.map((item) => {
        if (item.id === id) item.text = text;
        return item;
      })
    );
  }
  function toggleDataState(id, toggleState) {
    setDataList(
      dataList.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          [toggleState]: !item[toggleState],
        };
      })
    );
  }
  function deleteItem(id) {
    setDataList(dataList.filter((item) => item.id !== id));
  }
  useEffect(() => {
    storage().set(dataList);
  }, [dataList]);
  return (
    <div className="mx-auto w-full max-w-lg">
      <h1 className="h-full py-5 text-center text-3xl text-gray-300">here is pencil's todo list</h1>
      <form
        className={clsx(
          'flex items-center justify-around py-2',
          'border-2 border-solid border-gray-300 bg-gray-300',
          'rounded-t-md'
        )}
      >
        <label>
          <input
            id={ADD_TODO}
            type="text"
            name={ADD_TODO}
            placeholder="type something"
            onInput={(e) => setInputValue(e.target.value.trim())}
            value={inputValue}
            className={clsx(
              'h-full px-1',
              'text text-lg text-cyan-700 placeholder-gray-300',
              'rounded-md border-cyan-700'
            )}
          />
        </label>
        <Button
          fn={() => addTodo(inputValue)}
          message="Submit"
          customStyle="hover:bg-white hover:text-cyan-700 h-full"
        />
      </form>
      <ul className={clsx('flex flex-col gap-3', 'text-lg text-gray-300')}>
        {dataList.length === 0 ? (
          <li className={clsx('h-full w-full py-2', 'bg-cyan-700 text-center', 'rounded-b-md')}>
            empty list
          </li>
        ) : (
          dataList.map((item) => (
            <li
              key={`list_${item.id}`}
              className={clsx(
                'flex h-full w-full items-center py-1 px-4',
                'bg-cyan-700 text-center',
                'rounded-md first:rounded-t-none'
              )}
            >
              <TodoForm
                item={item}
                updateTodo={updateTodo}
                toggleDataState={toggleDataState}
                deleteItem={deleteItem}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
