import { useState } from 'react';
import AddItems from './AddItems';
import ItemList from './ItemList';
import Dialog from './Dialog';

function TodoList() {
  const [list, setList] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    status: false,
    message: '',
  });

  const toggleDialog = (message, fn) => {
    setDialogContent({ message, status: !dialogContent.status });
  };

  const addItem = (value) => setList([...list, value]);

  const changeItem = (index, val) => {
    setList(list.map((el, i) => (index === i ? val : el)));
  };

  const delItem = (index) => {
    setList(() => list.filter((el, i) => i !== index));
  };

  return (
    <div className="flex h-screen flex-col items-center bg-blue-300 font-Amatic">
      <div className="my-10 text-3xl font-black text-yellow-300">Todolist</div>
      <AddItems addItem={addItem} handleDialog={toggleDialog} className="bg-red-300" />
      <ItemList list={list} changeItem={changeItem} delItem={delItem} />
      {dialogContent.status && <Dialog message={dialogContent.message} cancel={toggleDialog} />}
    </div>
  );
}

export default TodoList;
