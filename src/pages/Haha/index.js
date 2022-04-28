import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TodoList from './TodoList';
import Refactor from './Refactor';

function Haha() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="todoV2" element={<Refactor />} />
      </Route>
    </Routes>
  );
}

export default Haha;
