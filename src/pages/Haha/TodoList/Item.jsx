import { useState } from 'react';
import Icon from './Icon';
import Dialog from './Dialog';
import clsx from 'clsx';

function Item({ child, onChange }) {
  const [editInput, setEditInput] = useState(false);
  const [editVal, setEditVal] = useState(child);
  const [showDialog, setShowDialog] = useState(false);
  let editLabel = editInput ? 'confirm' : 'edit';

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

  const basicClass =
    'items-centerinline-flex flex items-center justify-center rounded-lg py-2 pl-4 pr-3 text-center text-sm font-medium text-gray-900 hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 dark:focus:ring-[#F7BE38]/50';

  return (
    <>
      <li className="place-item-center my-5 mx-12 grid grid-cols-8 gap-4">
        <div className="flex items-center justify-center">
          <input type="checkbox" checked={child.isDone} onChange={toggleChecked} />
        </div>
        {editInput ? (
          <input
            value={editVal.val}
            onChange={handleEdit}
            onKeyDown={onKeyDown}
            data-id={child.id}
            className="edit focus:shadow-outline col-span-4 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          />
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
        <button onClick={toggleEdit} className={`${basicClass} col-span-1 bg-gray-400`}>
          <Icon logo={editInput ? 'greenCheck' : 'edit'} size="25" />
          <label className="mx-2 text-blue-50">{editLabel}</label>
        </button>
        <button onClick={toggleDialog} className={`${basicClass} col-span-1 bg-red-400`}>
          <Icon logo="trash" size="25" />
          <label className="mx-2 text-white ">delete</label>
        </button>
        <Dialog show={showDialog} cancel={toggleDialog} confirm={handleDelete} />
      </li>
      <div className="divide-x-8  divide-gray-900"></div>
    </>
  );
}
export default Item;
