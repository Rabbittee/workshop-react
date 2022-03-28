import { TodoListProvider } from './store/TodoListContext';
import { DialogProvider } from './store/DialogContext';
import Add from './views/Add';
import List from './views/List';
import Dialog from './components/Dialog';

function TodoList() {
  return (
    <div className="vertial-center h-screen flex-col bg-blue-300">
      <DialogProvider>
        <TodoListProvider>
          <div className="my-10 text-3xl text-yellow-300">Todolist Refactor</div>
          <Add />
          <List />
          <Dialog />
        </TodoListProvider>
      </DialogProvider>
    </div>
  );
}

export default TodoList;
