import { Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';

function Husky() {
  return (
    <Routes>
      <Route index element={<TodoList />} />
      <Route path="todo" element={<TodoList />} />
    </Routes>
  );
}

export default Husky;
