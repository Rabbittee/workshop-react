import { useEffect, useState } from "react";
import storage from "./components/storage.js";
import TodoForm from "./components/todoForm";
import TodoWrapper from "./components/todoWrapper";
import Button from "./components/button";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState(() => storage().get() || []);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('inputValue: ' + inputValue);
    const addItem = {
      done: false,
      text: inputValue
    }
    setDataList([...dataList, addItem]);
    storage().set(dataList);
    setInputValue("");
  }
  return (
    <div>
      <h1 className="h-full text-3xl text-center">here is pencil's todo list</h1>
      <TodoForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TodoWrapper>
        {dataList.map(({done, text}, index) => 
          <li key={`list${index}`}>
            <input type="checkbox" onChange={() => {
              
              console.log(dataList);
              console.log('current state: ' + done);
            }}/>
            <p>{text} and status: {done + ''}</p>
            <Button type="button" text="Delete"/>
            <Button type="button" text="Edit"/>
          </li>
        )}
      </TodoWrapper>
    </div>
  );
}

export default TodoList;
