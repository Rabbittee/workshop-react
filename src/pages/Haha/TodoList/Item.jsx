import { useState } from 'react';
import clsx from 'clsx';
import Button from './components/Button';
import Input from './components/Input';

function Item({ item, edit, handleDialog }) {
  const [editInput, setEditInput] = useState(false);
  const [editVal, setEditVal] = useState(item);
  const editLabel = editInput ? 'confirm' : 'edit';
  const buttonClass =
    'items-centerinline-flex flex items-center justify-center rounded-lg py-2 pl-4 pr-3 text-center text-sm font-medium text-gray-900 hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 dark:focus:ring-[#F7BE38]/50';

  const toggleEdit = () => setEditInput(!editInput);

  const toggleDialog = () => handleDialog(item);

  const toggleChecked = () => edit({ ...item, isDone: !item.isDone });

  const handleEdit = (e) => {
    const editItem = { ...item, val: e.target.value };
    setEditVal(editItem);
    edit(editItem);
    if (e.key === 'Enter') setEditInput(!editInput);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') return handleEdit(e);
  };

  return (
    <>
      <li className="place-item-center my-5 mx-12 grid grid-cols-8 gap-4">
        <div className="flex items-center justify-center">
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
            className={clsx('col-span-4 flex items-center rounded bg-purple-100 pl-3', {
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
          className={clsx(buttonClass, 'bg-gray-400')}
        />

        <Button
          onClick={toggleDialog}
          size="25"
          logo="trash"
          message="delete"
          className={clsx(buttonClass, 'bg-red-400')}
        />
      </li>
      <div className="divide-x-8  divide-gray-900"></div>
    </>
  );
}
export default Item;
