import { Fragment, useState, useEffect } from "react";
// import Button from './button';

function TodoForm({
  item,
  formId,
  updateTodo,
  toggleDataState,
  deleteItem
}) {
  const [inputValue, setInputValue] = useState(item.text);
  function handleSave() {
    updateTodo(inputValue, formId);
    toggleDataState(formId, 'isEdit');
  }
  return (
    <form className="border-solid border-emerald-600 border-4 mb-5">
      <ul>
        <li>
          {!item.isEdit &&
            <label>
              <input type="checkbox" onClick={() => toggleDataState(formId, 'isDone')} />
            </label>
          }
        </li>
        <li>
          {item.isEdit ? (
            <label>
              <input
                type="text"
                value={inputValue}
                onInput={(e) => setInputValue(e.target.value.trim())}
              />
            </label>
          ) : (
            <p>{inputValue}</p>
          )}
        </li>
        <li>
          {
          item.isDone ? ( <p>Done</p> ) :
          item.isEdit ? (
            <button
              type="button"
              onClick={() => handleSave()}
            >Save</button>
          ) : (
            <button
              type="button"
              onClick={() => toggleDataState(formId, 'isEdit')}
            >Edit</button>
          )}
          <button
            type="button"
            onClick={() => deleteItem(formId)}
          >Delete</button>
        </li>
      </ul>
    </form>
  );
}
export default TodoForm;