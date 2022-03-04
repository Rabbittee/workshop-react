import clsx from "clsx";
import { useState } from "react";
import Button from './button';

function TodoForm({
  item,
  formId,
  updateTodo,
  toggleDataState,
  deleteItem
}) {
  const [inputValue, setInputValue] = useState(item.text);

  function handleSave(id, target, nextValue) {
    updateTodo(nextValue, id);
    toggleDataState(id, target);
  }
  return (
    <form className={clsx('h-full')}>
      <ul className={clsx('flex items-center justify-start gap-2')}>
        <li className={clsx(
          'flex w-0 grow'
        )}>
          {!item.isEdit &&
            <label>
              <input type="checkbox" onClick={() => toggleDataState(formId, 'isDone')} />
            </label>
          }

          {item.isEdit ? (
            <label>
              <input
                className={clsx('w-full text-cyan-700')}
                type="text"
                value={inputValue}
                onInput={(e) => setInputValue(e.target.value.trim())}
              />
            </label>
          ) : (
            <p className={clsx(
              'pl-1',
              'whitespace-nowrap overflow-hidden text-ellipsis'
            )}>{inputValue}</p>
          )}
        </li>
        <li className="flex gap-1">
          {
            item.isDone ? ( <p className={clsx(
              'rounded-md w-20',
              'text-lime-300 bg-stone-800'
            )}>Done</p> ) :
            item.isEdit ? (
              <Button
                fn={handleSave}
                message="Save"
                customStyle="bg-emerald-900 text-emerald-100 hover:bg-emerald-100 hover:text-emerald-900"
                formId={formId}
                target="isEdit"
                nextValue={inputValue}
              />
            ) : (
              <Button 
                fn={toggleDataState}
                message="Edit"
                customStyle="bg-emerald-600 text-emerald-100 hover:bg-emerald-100 hover:text-emerald-600"
                formId={formId}
                target="isEdit"
              />
            )
          }
          <Button 
            fn={deleteItem}
            message="Delete"
            customStyle="text-rose-100 bg-rose-600 hover:text-rose-600 hover:bg-rose-100"
            formId={formId}
          />
        </li>
      </ul>
    </form>
  );
}
export default TodoForm;