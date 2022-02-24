import Button from "./button";

function TodoForm({ handleSubmit, inputValue, setInputValue }) {
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="todoInput"></label>
      <input
        id="todoInput"
        type="text"
        name="todo"
        placeholder="type something"
        onInput={e => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button type="submit" text="Click Me!!!" />
    </form>
  );
}
export default TodoForm;