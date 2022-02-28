import React from 'react';
import Item from './Item';

function ItemList({ list, changeItem, delItem }) {
  const findThing = (target) => list.find((el) => el.id === target);

  const onChange = (val, remove) => {
    const index = list.indexOf(findThing(val.id));
    if (remove) return delItem(index);
    changeItem(index, { ...val, isDone: val.isDone });
  };

  return (
    <ul className="mt-10 w-3/4 rounded-xl bg-red-300">
      {list.map((child) => (
        <Item key={child.id} child={child} onChange={onChange} />
      ))}
    </ul>
  );
}
export default ItemList;
