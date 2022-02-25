import { Fragment } from "react";
// import Button from "./button"

function ButtonArea({id, isDone, isEdit, deleteItem, toggleDataState}) {
  return (
    <Fragment>
      {isEdit ? (
        <button
          type="submit"
          onClick={() => toggleDataState(id, 'isEdit')}
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