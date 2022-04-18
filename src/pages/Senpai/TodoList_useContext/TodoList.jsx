import { useEffect, useState, useContext, createContext } from 'react';
import storage from './components/storage.js';
import AddTodo from './AddTodo.jsx';
import TodoWrapper from './TodoWrapper.jsx';

const MethodContext = createContext();

export default function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState(() => storage().get() || []);

  const methods = { addTodo, updateTodo, toggleDataState, deleteItem };
  
  function addTodo(text) {
    if (!text.trim()) return;
    const newItem = {
      id: new Date().getTime(),
      isDone: false,
      isEdit: false,
      text: text.trim(),
    };
    setDataList([newItem, ...dataList]);
    setInputValue('');
  }

  function updateTodo(text, id) {
    setDataList(
      dataList.map((item) => {
        if (item.id === id) item.text = text;
        return item;
      })
    );
  }

  function toggleDataState(id, toggleState) {
    setDataList(
      dataList.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          [toggleState]: !item[toggleState],
        };
      })
    );
  }

  function deleteItem(id) {
    setDataList(dataList.filter((item) => item.id !== id));
  }

  useEffect(() => {
    storage().set(dataList);
  }, [dataList]);

  return (
    <div className="mx-auto w-full max-w-lg">

      <h1 className="h-full py-5 text-center text-3xl text-gray-300">here is pencil's todo list ver2.0</h1>

      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={() => addTodo(inputValue)}
      />

      <MethodContext.Provider value={methods}>
        <TodoWrapper dataList={dataList} />
      </MethodContext.Provider>

    </div>
  );
}

export const useMethods = () => useContext(MethodContext);