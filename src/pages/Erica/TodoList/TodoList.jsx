import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Button, Input, TodoItem } from './components';
import { storage } from './utils';

function TodoList() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState(() => storage().get());

  function onInput(e) {
    setValue(e.target.value);
  }

  function toggleState(id, key) {
    setTodo(
      todo.map((item) => {
        if (item.id === id) item[key] = !item[key];
        return item;
      })
    );
  }

  function addTodo() {
    if (!value.trim()) return;
    const newTodo = {
      id: Date.now(),
      title: value.trim(),
      isDone: false,
      isEdit: false,
    };
    setTodo(() => [newTodo, ...todo]);
    setValue('');
  }

  function updateTodo(e, id) {
    setTodo(
      todo.map((item) => {
        if (item.id === id) item.title = e.target.value;
        return item;
      })
    );
  }

  function deleteTodo(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  useEffect(() => {
    storage().set(todo);
  }, [todo]);

  return (
    <>
      <h1 className={clsx('mb-5 text-center text-2xl font-medium uppercase tracking-widest')}>
        Todo List
      </h1>

      <form
        className={clsx(
          'mb-5 p-5 text-center',
          'flex items-center justify-center',
          'rounded-lg bg-slate-100'
        )}
      >
        <Input value={value} onInput={onInput} />
        <Button text="Add" onClick={addTodo} />
      </form>

      <ul className="mx-auto divide-y px-3">
        {todo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleState={() => toggleState(todo.id, 'isDone')}
            toggleEdit={() => toggleState(todo.id, 'isEdit')}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
