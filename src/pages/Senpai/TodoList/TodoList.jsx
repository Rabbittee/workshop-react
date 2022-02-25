import { useEffect, useState } from "react";
import storage from "./components/storage.js";
import TodoForm from "./components/todoForm";
import TodoWrapper from "./components/todoWrapper";
// import Button from "./components/button";

function TodoList() {
  // const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState(() => storage().get() || []);

  function addTodo(text) {
    const nextItem = {
      id: new Date().getTime(),
      isDone: false,
      isEdit: false,
      text
    } 
    setDataList([...dataList, nextItem]);
  }
  function toggleDataState(id, toggleState) {
    console.log('event', toggleState);
    setDataList(dataList.map(item => {
      if (item.id !== id) return item;
      return {
        ...item,
        [toggleState]: !item[toggleState]
      }
    }))
    // console.log('update data list');
    // 這邊 clg dataList 不會即時反應，顯示的會是上一個更改的資料
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
        formName="todoInput"
        addTodo={addTodo}
      />
      <TodoWrapper
        dataList={dataList}
        inputValue={inputValue}
        setInputValue={setInputValue}
        toggleDataState={toggleDataState}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default TodoList;
