import React from 'react';
import Item from './Item';

function ItemList({ list, changeItem, delItem }) {
  const onChange = (val, remove) => {
    const index = list.findIndex(({ id }) => val.id === id);
    if (remove) return delItem(index);
    changeItem(index, { ...val, isDone: val.isDone });
  };

  return (
    <ul className="mt-10 w-3/4 rounded-xl bg-red-300">
      {list.map((el) => (
        <Item key={el.id} item={el} onChange={onChange} />
      ))}
    </ul>
  );
}
export default ItemList;
