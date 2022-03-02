import { useEffect, useState } from "react";
import storage from "./components/storage.js";
import TodoForm from "./components/todoForm";
// import TodoWrapper from "./components/todoWrapper";
import { ADD_TODO } from "./components/constant.js";
// import Button from "./components/button";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState(() => storage().get() || []);
  console.log(dataList);
  function addTodo(text) {
    const newItem = {
      id: new Date().getTime(),
      isDone: false,
      isEdit: false,
      text 
    }
    setDataList([newItem, ...dataList]);
    setInputValue("");
  }
  function updateTodo( text, id) {
    setDataList(dataList.map(item => {
      if (item.id === id) item.text = text;
      return item;
    }))
  }
  function toggleDataState(id, toggleState) {
    setDataList(dataList.map(item => {
      if (item.id !== id) return item;
      return {
        ...item,
        [toggleState]: !item[toggleState]
      }
    }))
  }
  function deleteItem(id) {
    setDataList(dataList.filter((item) => item.id !== id))
  }
  useEffect(() =>{
    storage().set(dataList);
  }, [dataList]);
  return (
    <div className="mx-auto w-1/2">
      <h1 className="h-full text-3xl text-center">here is pencil's todo list</h1>
      {/* <TodoForm
        formId={ADD_TODO}
        updateTodo={updateTodo}
      /> */}
      <form action="" className="border-solid border-emerald-600 border-4 mb-5">
        <label htmlFor={ADD_TODO}></label>
        <input
          id={ADD_TODO}
          type="text"
          name={ADD_TODO}
          placeholder="type something"
          onInput={e => setInputValue(e.target.value.trim())}
          value={inputValue}
        />
        <button type="button" onClick={() => addTodo(inputValue)}>Submit</button>
      </form>
      <ul className="flex flex-col gap-3">
        {dataList.length === 0 ? (
          <li>empty list</li>
         ):(
          dataList.map((item) => (
            <li
              key={`list_${item.id}`}
              className="flex flex-raw justify-center items-center gap-3 border-b-2 border-blue-400 border-dashed"
            >
              <TodoForm
                item={item}
                formId={item.id}
                updateTodo={updateTodo}
                toggleDataState={toggleDataState}
                deleteItem={deleteItem}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
