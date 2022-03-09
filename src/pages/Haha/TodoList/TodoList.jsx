import { useState } from 'react';
import AddItems from './AddItems';
import ItemList from './ItemList';

function TodoList() {
  const [list, setList] = useState([]);

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
      <AddItems addItem={addItem} className="bg-red-300" />
      <ItemList list={list} changeItem={changeItem} delItem={delItem} />
    </div>
  );
}

export default TodoList;
