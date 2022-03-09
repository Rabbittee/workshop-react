import React from 'react';
import Item from './Item';

function ItemList({ list, changeItem, delItem }) {
  const findIndex = (val) => list.findIndex(({ id }) => val.id === id);

  const editItem = (val) => {
    changeItem(findIndex(val), { ...val, isDone: val.isDone });
  };

  const deleteItem = (val) => {
    delItem(findIndex(val), { ...val, isDone: val.isDone });
  };

  return (
    <ul className="mt-10 w-3/4 rounded-xl bg-red-300">
      {list.map((el) => (
        <Item key={el.id} item={el} edit={editItem} del={deleteItem} />
      ))}
    </ul>
  );
}
export default ItemList;
