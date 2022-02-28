import { Fragment } from "react";
// import Button from "./button"

function ButtonArea({
  id,
  isDone,
  isEdit,
  text,
  deleteItem,
  toggleDataState,
  updateTodo
}) {
  function saveButton(id, text) {
    toggleDataState(id, 'isEdit');
    updateTodo(text, id)
  }
  return (
    <Fragment>
      {isEdit ? (
        <button
          type="submit"
          onClick={() => saveButton(id, text)}
        >
          Save
        </button>
      ) : (
        <button
          type="button"
          onClick={() => toggleDataState(id, 'isEdit')}
          disabled={isDone}
        >
          Edit
        </button>
      )}
      <button
        type="button"
        onClick={() => deleteItem(id)}
      >
        Delete
      </button>
    </Fragment>
  )
}

export default ButtonArea;