import { useState } from 'react';
import AddItems from './AddItems';
import ItemList from './ItemList';
import Dialog from './Dialog';

function TodoList() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState();
  const [dialogContent, setDialogContent] = useState({
    dialogStatus: false,
    message: '',
    deleteStatus: false,
  });

  const toggleDialog = (message, index) => {
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

  const addItem = (value) => setList([...list, value]);

  const changeItem = (index, val) => {
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
      <AddItems addItem={addItem} handleDialog={toggleDialog} className="bg-red-300" />
      <ItemList list={list} changeItem={changeItem} handleDialog={toggleDialog} />
      {dialogContent.dialogStatus && (
        <Dialog
          message={dialogContent.message}
          cancel={toggleDialog}
          confirm={dialogContent.deleteStatus && delItem}
        />
      )}
    </div>
  );
}

export default TodoList;
