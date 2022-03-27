import clsx from 'clsx';
import { useState } from 'react';
import Button from './components/Button';

function TodoForm({ item, updateTodo, toggleDataState, deleteItem }) {
  const [inputValue, setInputValue] = useState(item.text);

  const methods = {
    toggleEdit: () => toggleDataState(item.id, 'isEdit'),
    toggleDone: () => toggleDataState(item.id, 'isDone'),
    setInputValue: (e) => setInputValue(e.target.value),
    updateTodo: () => updateTodo(inputValue.trim(), item.id),
    deleteItem: () => deleteItem(item.id)
  }
  
  return (
    <>
      <div className={clsx('flex w-0 grow')}>
        {!item.isEdit && (
          <label>
            <input
              defaultChecked={item.isDone}
              type="checkbox"
              onClick={methods.toggleDone}
            />
          </label>
        )}

        {item.isEdit ? (
          <label className="w-full pr-2">
            <input
              className={clsx('w-full bg-cyan-600 px-2 text-white')}
              type="text"
              value={inputValue}
              onInput={methods.setInputValue}
            />
          </label>
        ) : (
          <p
            onClick={() => {
              methods.toggleEdit();
              item.isDone && methods.toggleDone();
            }}
            className="pl-1 overflow-hidden text-ellipsis whitespace-nowrap"
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
              methods.updateTodo();
              methods.toggleEdit();
            }}
            message="Save"
            customStyle="bg-emerald-900 text-emerald-100 hover:bg-emerald-100 hover:text-emerald-900"
          />
        ) : (
          <Button
            fn={methods.toggleEdit}
            message="Edit"
            customStyle="bg-emerald-600 text-emerald-100 hover:bg-emerald-100 hover:text-emerald-600"
          />
        )}
        <Button
          fn={methods.deleteItem}
          message="Delete"
          customStyle="text-rose-100 bg-rose-600 hover:text-rose-600 hover:bg-rose-100"
        />
      </div>
    </>
  );
}
export default TodoForm;
