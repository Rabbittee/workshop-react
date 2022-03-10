import clsx from 'clsx';
import { useState } from 'react';
import Button from './Button_test';

function TodoForm({ item, updateTodo, toggleDataState, deleteItem }) {
  const [inputValue, setInputValue] = useState(item.text);

  return (
    <>
      <div className={clsx('flex w-0 grow')}>
        {!item.isEdit && (
          <label>
            <input type="checkbox" onClick={() => toggleDataState(item.id, 'isDone')} />
          </label>
        )}

        {item.isEdit ? (
          <label className="w-full pr-2">
            <input
              className={clsx('w-full bg-cyan-600 px-2 text-white')}
              type="text"
              value={inputValue}
              onInput={(e) => setInputValue(e.target.value)}
            />
          </label>
        ) : (
          <p
            onDoubleClick={() => toggleDataState(item.id, 'isEdit')}
            className={clsx('pl-1', 'overflow-hidden text-ellipsis whitespace-nowrap')}
          >
            {inputValue}
          </p>
        )}
      </div>
      <div className="flex gap-1">
        {item.isDone ? (
          <p className={clsx('w-20 rounded-md', 'bg-stone-800 text-lime-300')}>Done</p>
        ) : item.isEdit ? (
          <Button
            fn={() => {
              updateTodo(inputValue.trim(), item.id);
              toggleDataState(item.id, 'isEdit');
            }}
            message="Save"
            customStyle="bg-emerald-900 text-emerald-100 hover:bg-emerald-100 hover:text-emerald-900"
          />
        ) : (
          <Button
            fn={() => toggleDataState(item.id, 'isEdit')}
            message="Edit"
            customStyle="bg-emerald-600 text-emerald-100 hover:bg-emerald-100 hover:text-emerald-600"
          />
        )}
        <Button
          fn={() => deleteItem(item.id)}
          message="Delete"
          customStyle="text-rose-100 bg-rose-600 hover:text-rose-600 hover:bg-rose-100"
        />
      </div>
    </>
  );
}
export default TodoForm;
