import { useState } from 'react';
import clsx from 'clsx';
import Dialog from './Dialog';
import Button from './Button';
import Input from './Input';

function Item({ item, onChange }) {
  const [editInput, setEditInput] = useState(false);
  const [editVal, setEditVal] = useState(item);
  const [showDialog, setShowDialog] = useState(false);
  const editLabel = editInput ? 'confirm' : 'edit';

  const toggleEdit = () => setEditInput(!editInput);

  const toggleDialog = () => setShowDialog(!showDialog);

  const toggleChecked = () => onChange({ ...item, isDone: !item.isDone });

  const handleEdit = (e) => {
    const editItem = { ...item, val: e.target.value };
    setEditVal(editItem);
    onChange(editItem);
    if (e.key === 'Enter') setEditInput(!editInput);
  };

  const handleDelete = () => {
    onChange(item, true);
    toggleDialog();
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
          <Input item={editVal} onChange={handleEdit} onKeyDown={onKeyDown} Class="col-span-4" />
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
          logo={editInput ? 'greenCheck' : 'edit'}
          onClick={toggleEdit}
          label={editLabel}
          Class="bg-gray-400"
        />

        <Button logo="trash" onClick={toggleDialog} label="delete" Class="bg-red-400" />

        {showDialog && <Dialog cancel={toggleDialog} confirm={handleDelete} />}
      </li>
      <div className="divide-x-8  divide-gray-900"></div>
    </>
  );
}
export default Item;
