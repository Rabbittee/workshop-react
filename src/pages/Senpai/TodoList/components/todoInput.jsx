import { useState } from "react";
import Button from "./button";

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
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
    </div>
  );
}

export default TodoInput;