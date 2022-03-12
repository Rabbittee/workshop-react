import React from 'react';
import Item from './Item';

function ItemList({ list, change, dialog }) {
  const index = (val) => list.findIndex(({ id }) => val.id === id);

  const edit = (val) => {
    change(index(val), { ...val, isDone: val.isDone });
  };

  const handleDialog = (item) => {
    dialog('Do you sure delete?', index(item), { ...item, isDone: item.isDone });
  };

  return (
    <ul className="mt-10 w-3/4 rounded-xl bg-red-300">
      {list.map((el) => (
        <Item key={el.id} item={el} edit={edit} dialog={handleDialog} />
      ))}
    </ul>
  );
}
export default ItemList;
