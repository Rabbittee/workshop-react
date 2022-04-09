import { TodoProvider } from './components/TodoContext.jsx';
import AddModal from './components/AddModal.jsx';
import TodoItems from './components/TodoItems.jsx';
import TodoSelect from './components/TodoSelect.jsx';

function TodoList() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-slate-700 px-2 pt-8">
      <TodoProvider>
        <h1 className="text-3xl font-bold text-white">Todo List!</h1>
        <div className="flex w-full max-w-2xl flex-col gap-4">
          {/* search */}

          <TodoSelect />

          <TodoItems />
        </div>

        <AddModal />
      </TodoProvider>
    </div>
  );
}

export default TodoList;
