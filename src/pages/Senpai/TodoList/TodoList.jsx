import { useEffect, useState } from "react";
import storage from "./components/storage.js";
import TodoForm from "./components/todoForm";
import { ADD_TODO } from "./components/constant.js";
import clsx from "clsx";
import Button from "./components/button.jsx";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [dataList, setDataList] = useState(() => storage().get() || []);

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
    <div className="mx-auto max-w-sm w-full">
      <h1 className="h-full py-5 text-3xl text-center text-gray-300">here is pencil's todo list</h1>
      <form className={clsx(
        'flex justify-around items-center py-2',
        'bg-gray-300 border-2 border-solid border-gray-300',
        'rounded-t-md'
      )}>
        <label>
          <input
            id={ADD_TODO}
            type="text"
            name={ADD_TODO}
            placeholder="type something"
            onInput={e => setInputValue(e.target.value.trim())}
            value={inputValue}
            className={clsx(
              'h-full px-1',
              'text text-lg text-cyan-700 placeholder-gray-300',
              'border-cyan-700 rounded-md'
            )}
          />
        </label>
        <Button 
          fn={addTodo}
          message="Submit"
          customStyle="hover:bg-white hover:text-cyan-700 h-full"
          inputValue={inputValue}
        />
      </form>
      <ul className={clsx(
          'flex flex-col gap-3',
          'text-gray-300 text-lg'
        )}>
        {dataList.length === 0 ? (
          <li className={clsx(
            'h-full w-full py-2',
            'bg-cyan-700 text-center',
            'rounded-b-md'
          )}>empty list</li>
         ):(
          dataList.map((item) => (
            <li
              key={`list_${item.id}`}
              className={clsx(
                'h-full w-full py-1 px-4',
                'bg-cyan-700 text-center',
                'rounded-b-md'
            )}>
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
