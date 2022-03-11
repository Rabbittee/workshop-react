import React from 'react';
import Item from './Item';

function ItemList({ list, changeItem, handleDialog }) {
  const findIndex = (val) => list.findIndex(({ id }) => val.id === id);

  const editItem = (val) => {
    changeItem(findIndex(val), { ...val, isDone: val.isDone });
  };

  const toggleDialog = (item) => {
    handleDialog('Do you sure delete?', findIndex(item), { ...item, isDone: item.isDone });
  };

  return (
    <ul className="mt-10 w-3/4 rounded-xl bg-red-300">
      {list.map((el) => (
        <Item key={el.id} item={el} edit={editItem} dialog={toggleDialog} />
      ))}
    </ul>
  );
}
export default ItemList;
