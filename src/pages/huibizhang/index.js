import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TodoList from './TodoList';

function Erica() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />} />
        <Route path="todo" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default Erica;
