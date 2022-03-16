import { Complete, Todo, Form, TodoListProvider } from './components';

const TodoList = () => {
  return (
    <div>
      <main className="mx-auto flex w-11/12 max-w-2xl flex-col items-center justify-center space-y-12 pt-40">
        <h1 className="text-4xl text-teal-700 drop-shadow-md">My Todo List</h1>
        <TodoListProvider>
          <Form />

          <Todo />

          <Complete />
        </TodoListProvider>
      </main>
    </div>
  );
};

export default TodoList;
