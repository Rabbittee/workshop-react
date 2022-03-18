import { useState } from 'react';
import clsx from 'clsx';
import Button from './components/Button';
import Input from './components/Input';

function Item({ item, edit, handleDialog }) {
  const [editInput, setEditInput] = useState(false);
  const [editVal, setEditVal] = useState(item);
  const editLabel = editInput ? 'confirm' : 'edit';

  const toggleEdit = () => setEditInput(!editInput);

  const toggleDialog = () => handleDialog(item);

  const toggleChecked = () => edit({ ...item, isDone: !item.isDone });

  const handleEdit = (e) => {
    const editItem = { ...item, val: e.target.value };
    setEditVal(editItem);
    edit(editItem);
    e.key === 'Enter' && setEditInput(!editInput);
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && handleEdit(e);
  };

  return (
    <>
      <li className="my-5 mx-12 grid grid-cols-8 gap-4">
        <div className="flex-center flex">
          <input type="checkbox" checked={item.isDone} onChange={toggleChecked} />
        </div>

        {editInput ? (
          <Input
            inputVal={editVal.val}
            onChange={handleEdit}
            onKeyDown={onKeyDown}
            className="col-span-4"
          />
        ) : (
          <div
            className={clsx('vertial-center col-span-4 rounded bg-purple-100 pl-3', {
              'line-through': item.isDone,
            })}
            onClick={toggleEdit}
          >
            <span>{item.val}</span>
          </div>
        )}

        <Button
          size="25"
          logo={editInput ? 'greenCheck' : 'edit'}
          onClick={toggleEdit}
          message={editLabel}
          className="button-hover bg-gray-400"
        />

        <Button
          onClick={toggleDialog}
          size="25"
          logo="trash"
          message="delete"
          className="button-hover bg-red-400"
        />
      </li>
    </>
  );
}
export default Item;
