import { Add } from './views/Add';
import { List } from './views/List';
// import Dialog from './components/Dialog';
import { TodoListProvider } from './store/TodoListContext';
// import { DialogProvider } from './store/DialogContext';

// TODO Dialog 的溝通邏輯 custom hook

function TodoList() {
  return (
    <>
      <TodoListProvider>
        <div>Todolist</div>
        <Add />
        <List />
      </TodoListProvider>
      {/* <DialogProvider>
        <Dialog />
      </DialogProvider> */}
    </>
  );
}

export default TodoList;
