import { useState } from 'react';
import Add from './AddItems';
import Tasks from './ItemList';
import Dialog from './components/Dialog';

function TodoList() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState();
  const [dialogContent, setDialogContent] = useState({
    message: '',
    dialogStatus: false,
    deleteStatus: false,
  });

  const handleDialog = (message, index) => {
    const { dialogStatus, deleteStatus } = dialogContent;
    setIndex(index);
    if (index !== undefined)
      setDialogContent({
        message,
        dialogStatus: !dialogStatus,
        deleteStatus: !deleteStatus,
      });
    else setDialogContent({ message, dialogStatus: !dialogStatus });
  };

  const add = (value) => setList([...list, value]);

  const change = (index, val) => {
    setList((items) => {
      const newItems = [...items];
      newItems[index] = val;
      return newItems;
    });
  };

  const delItem = () => {
    const { dialogStatus, deleteStatus } = dialogContent;
    setList(() => list.filter((el, i) => i !== index));
    setDialogContent({
      ...dialogContent,
      dialogStatus: !dialogStatus,
      deleteStatus: !deleteStatus,
    });
  };

  return (
    <div className="flex h-screen flex-col items-center bg-blue-300 font-Amatic">
      <div className="my-10 text-3xl font-black text-yellow-300">Todolist</div>

      <Add add={add} dialog={handleDialog} className="bg-red-300" />

      <Tasks list={list} change={change} dialog={handleDialog} />

      {dialogContent.dialogStatus && (
        <Dialog
          message={dialogContent.message}
          cancel={handleDialog}
          confirm={dialogContent.deleteStatus && delItem}
        />
      )}
    </div>
  );
}

export default TodoList;
