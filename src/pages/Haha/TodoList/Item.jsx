import { useState } from 'react';
import Dialog from './Dialog';
import clsx from 'clsx';
import Button from './Button';
import Input from './Input';

function Item({ child, onChange }) {
  const [editInput, setEditInput] = useState(false);
  const [editVal, setEditVal] = useState(child);
  const [showDialog, setShowDialog] = useState(false);
  const editLabel = editInput ? 'confirm' : 'edit';

  const toggleEdit = () => setEditInput(!editInput);

  const toggleDialog = () => setShowDialog(!showDialog);

  const toggleChecked = () => onChange({ ...child, isDone: !child.isDone });

  const handleEdit = (e) => {
    const editItem = { ...child, val: e.target.value };
    setEditVal(editItem);
    onChange(editItem);
  };

  const handleDelete = () => {
    onChange(child, true);
    toggleDialog();
  };

  const onKeyDown = ({ key }) => {
    if (key === 'Enter') return handleEdit();
  };

  return (
    <>
      <li className="place-item-center my-5 mx-12 grid grid-cols-8 gap-4">
        <div className="flex items-center justify-center">
          <input type="checkbox" checked={child.isDone} onChange={toggleChecked} />
        </div>

        {editInput ? (
          <Input item={editVal} onChange={handleEdit} onKeyDown={onKeyDown} Class="col-span-4" />
        ) : (
          <div
            className={clsx('col-span-4 flex items-center rounded bg-purple-100 pl-3', {
              'line-through': child.isDone,
            })}
            onClick={toggleEdit}
          >
            <span>{child.val}</span>
          </div>
        )}

        <Button
          logo={editInput ? 'greenCheck' : 'edit'}
          onClick={toggleEdit}
          label={editLabel}
          Class="bg-gray-400"
        />

        <Button logo="trash" onClick={toggleDialog} label="delete" Class="bg-red-400" />

        <Dialog show={showDialog} cancel={toggleDialog} confirm={handleDelete} />
      </li>
      <div className="divide-x-8  divide-gray-900"></div>
    </>
  );
}
export default Item;
