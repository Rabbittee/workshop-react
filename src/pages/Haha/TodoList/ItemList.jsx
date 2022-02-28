import React from 'react';
import Item from './Item';

function ItemList({ list, changeItem, delItem }) {
  const findThing = (target) => list.find((el) => el.id === target);

  const onChange = (val, remove) => {
    const index = list.indexOf(findThing(val.id));
    if (remove) return delItem(index);
    changeItem(index, { ...val, isDone: val.isDone });
  };
  const listItems = list.map((child) => <Item key={child.id} child={child} onChange={onChange} />);
  return <ul className="mt-10 w-3/4 rounded-xl bg-red-300">{listItems}</ul>;
}
export default ItemList;
