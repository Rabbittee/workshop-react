import { Button, Input, TodoItem } from './components';
import {clsx, storate} from './utils';
import { useState, useEffect } from 'react';

function TodoList() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(storate().get());
  const [id, setId] = useState(todos.length || 0);

  function onInput(e) {
    setValue(e.target.value.trim());
  }

  function toggleState(id, key) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) item[key] = !item[key];
        return item;
      })
    );
  }

  function addTodo() {
    if (!value) return;
    const newTodo = {
      id: id,
      title: value,
      isDone: false,
      isEdit: false,
    };
    setTodos(() => [...todos, newTodo]);
    setId(id + 1);
    setValue('');
  }

  function updateTodo(e, id) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) item.title = e.target.value;
        return item;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  useEffect(() => {
    if (!todos.length) setId(0);
    storate().set(todos);
  }, [todos]);

  return (
    <>
      <h1 className={clsx(
        'mb-5 text-center text-2xl font-medium uppercase tracking-widest'
      )}>Todo List</h1>

      <form className={clsx(
        'mb-5 p-5 text-center',
        'flex items-center justify-center',
        'rounded-lg bg-slate-100'
      )}>
        <Input value={value} onInput={onInput} />
        <Button text="Add" onClick={addTodo} />
      </form>

      <ul className="mx-auto divide-y px-3">
        {todos
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleState={() => toggleState(todo.id, 'isDone')}
              toggleEdit={() => toggleState(todo.id, 'isEdit')}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
          .reverse()}
      </ul>
    </>
  );
}

export default TodoList;
