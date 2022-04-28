import { useState } from 'react';
import AddItems from './AddItems';
import ItemList from './ItemList';
import Dialog from './components/Dialog/Dialog';

function TodoList() {
  const [list, setList] = useState([]);
  const [id, setID] = useState();
  const [dialogContent, setDialogContent] = useState({
    message: '',
    alert: false,
    confirm: false,
  });

  const handleDialog = (message, id) => {
    const { alert, confirm } = dialogContent;
    setID(id);
    if (id !== undefined) {
      setDialogContent({
        message,
        alert: !alert,
        confirm: !confirm,
      });
    } else {
      setDialogContent({ message, alert: !alert });
    }
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
    const { alert, confirm } = dialogContent;
    setList(() => list.filter((el) => el.id !== id));
    setDialogContent({
      ...dialogContent,
      alert: !alert,
      confirm: !confirm,
    });
  };

  return (
    <div className="vertical-center h-screen flex-col  bg-blue-300 font-Amatic">
      <div className="my-10 text-3xl text-yellow-300">Todolist</div>

      <AddItems add={add} handleDialog={handleDialog} className="bg-red-300" />

      <ItemList list={list} change={change} handleDialog={handleDialog} />

      {dialogContent.alert && (
        <Dialog
          message={dialogContent.message}
          cancel={handleDialog}
          confirm={dialogContent.confirm && delItem}
        />
      )}
    </div>
  );
}

export default TodoList;
