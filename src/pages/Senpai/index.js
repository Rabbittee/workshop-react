import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TodoList from './TodoList';
import TodoList_useContext from './TodoList_useContext';

function Senpai() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index />
        <Route path="todo" element={<TodoList />} />
        <Route path="todo_useContext" element={<TodoList_useContext />} />
      </Route>
    </Routes>
  );
}

export default Senpai;
