import { useState } from "react";
// import ButtonArea from "./buttonArea";
// import Button from "./button";

function TodoForm({ formId, updateTodo}) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // const currentForm = new FormData(e.target);
    // const nextValue = currentForm.get(formId);
    // e.target.reset();
    // updateTodo(nextValue);
    console.log('click input submit');
    updateTodo(inputValue, formId);
    setInputValue("");
    // return nextValue;
  }

  return (
    <form
      className="border-solid border-emerald-600 border-4 mb-5"
      onSubmit={(e) => handleSubmit(e) }>
      <label htmlFor={formId}></label>
      <input
        id={formId}
        type="text"
        name={formId}
        placeholder="type something"
        onInput={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit">Submit</button>
      {/* <ButtonArea formId={formId} /> */}
    </form>
  );
}
export default TodoForm;