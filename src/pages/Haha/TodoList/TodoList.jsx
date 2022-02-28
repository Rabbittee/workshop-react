import { useState } from 'react';
import AddItems from './AddItems';
import ItemList from './ItemList';
function TodoList() {
  return <div>Haha's TodoList</div>;
  return (
    <div className="flex h-screen flex-col items-center bg-blue-300 font-Amatic">
      <div className="my-10 text-3xl font-black text-yellow-300">Todolist</div>
      <AddItems addItem={addItem} className="bg-red-300" />
      <ItemList list={list} changeItem={changeItem} delItem={delItem} />
    </div>
  );
}

export default TodoList;
