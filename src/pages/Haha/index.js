import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TodoList from './TodoList';
import StickyNote from './StickyNote';

function Haha() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="sticky-note" element={<StickyNote />} />
      </Route>
    </Routes>
  );
}

export default Haha;
