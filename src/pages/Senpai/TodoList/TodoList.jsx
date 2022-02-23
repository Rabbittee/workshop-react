import { useState } from "react";
import TodoInput from "./components/todoInput";
import TodoWrapper from "./components/todoWrapper";
import Button from "./components/button";

function TodoList() {
  const [dataList, setDataList] = useState([
    {
      done: true,
      text: "1 - a"
    },{
      done: false,
      text: "2 - b"
    },{
      done: false,
      text: "3 - c"
    }
  ])
  return (
    <div>
      <h1 className="h-full text-3xl text-center">here is pencil's todo list</h1>
      <TodoInput />
      <TodoWrapper>
        {dataList.map((data, index) => 
          <p key={`list${index}`}>{data.text}</p>
        )}
        <li>
          <p>1 - a</p>
          <Button type="button" text="Delete"/>
          <Button type="button" text="Edit"/>
        </li>
      </TodoWrapper>
    </div>
  );
}

export default TodoList;
