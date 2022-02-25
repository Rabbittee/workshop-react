import { useState } from "react";
// import Button from "./button";

function TodoForm({ formName, addTodo}) {
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e, formName) {
    e.preventDefault();
    const currentForm = new FormData(e.target);
    const nextValue = currentForm.get(formName);
    e.target.reset();
    addTodo(nextValue);
    return nextValue;
  }
  return (
    <form
      className="border-solid border-emerald-600 border-4 mb-5"
      onSubmit={e => handleSubmit(e, formName) }>
      <label htmlFor={formName}></label>
      <input
        id={formName}
        type="text"
        name={formName}
        placeholder="type something"
        onInput={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default TodoForm;