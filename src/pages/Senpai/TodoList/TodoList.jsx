import { useEffect, useState } from "react";
import storage from "./components/storage.js";
import TodoForm from "./components/todoForm";
import TodoWrapper from "./components/todoWrapper";
// import Button from "./components/button";

function TodoList() {
  // const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState(() => storage().get() || []);

  function updateTodo( text, id) {
    console.log(text, id);
    const nextItem = {
      id: new Date().getTime(),
      isDone: false,
      isEdit: false,
      text
    }
    if (id === 'addTodo') {
      setDataList([...dataList, nextItem]);
    } else {
      setDataList(dataList.map(item => {
        if (item.id !== id) return item;
        return {
          ...item,
          text,
        }
      }))
    }
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
      <TodoForm
        formId="addTodo"
        updateTodo={updateTodo}
      />
      <TodoWrapper
        dataList={dataList}
        // inputValue={inputValue}
        // setInputValue={setInputValue}
        updateTodo={updateTodo}
        toggleDataState={toggleDataState}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default TodoList;
