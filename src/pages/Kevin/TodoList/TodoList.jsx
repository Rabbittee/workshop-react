import { useState } from 'react';
import LocalStorageTodo from './js/todo/localstorageTodo.js';
import AddModal from './components/AddModal.jsx';
import TodoItems from './components/TodoItems.jsx';
// https://dribbble.com/shots/13884562-Daily-UI-042-ToDo-List

function TodoList() {
  const todo = new LocalStorageTodo('kevin-local-storage-todo-list', true);

  const [todoItems, setTodoItems] = useState(todo.todos);
  const [todoFilter, setTodoFilter] = useState('all');

  const listStatus = {
    completed: {
      value: 'completed',
      method: () => todoItems.filter((item) => item.isCompleted === true),
    },
    onProcessing: {
      value: 'onProcessing',
      method: () => todoItems.filter((item) => item.isCompleted === false),
    },
    all: {
      value: 'all',
      method: () => [...todoItems].sort((a, b) => b.isCompleted === true && -1),
    },
  };

  const filteredTodoItems = () => {
    const filteredMethod = listStatus[todoFilter]?.method;

    if (typeof filteredMethod !== 'function')
      throw new Error('filteredTodoItems: filteredMethod receive a wrong key.');

    return filteredMethod();
  };

  const addTodo = (newItem) => {
    const { todos } = todo.add(newItem);
    setTodoItems(todos);
  };

  const editTodo = (itemId, { task, isCompleted }) => {
    const { todos } = todo.edit(itemId, { task, isCompleted });
    setTodoItems(todos);
  };

  const removeTodo = (todoId) => {
    const { todos } = todo.remove(todoId);
    setTodoItems(todos);
  };

  const onTodoStatusChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTodoFilter(value);
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-slate-700 px-2 pt-8">
      <h1 className="text-3xl font-bold text-white">Todo List!</h1>
      <div className="flex w-full max-w-2xl flex-col gap-4">
        {/* search */}

        {/* filters (select) - time/status */}
        <select
          name="todo-status"
          id="todo-status"
          className="mr-auto cursor-pointer bg-slate-600 p-2 text-white"
          onChange={onTodoStatusChange}
        >
          <option value={listStatus.all.value}>Show all</option>
          <option value={listStatus.completed.value}>Completed</option>
          <option value={listStatus.onProcessing.value}>On processing</option>
        </select>

        {/* list */}
        <TodoItems items={filteredTodoItems()} editTodo={editTodo} removeTodo={removeTodo} />
      </div>

      {/* add  */}
      <AddModal addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
