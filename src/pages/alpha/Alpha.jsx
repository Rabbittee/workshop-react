import { Route, Routes } from 'react-router-dom';
import AlphaLayout from './AlphaLayout';
import TodoList from './TodoList';

function Alpha() {
  return (
    <Routes>
      <Route path="/" element={<AlphaLayout />}>
        <Route index element={<TodoList />} />
        <Route path="todo" element={<TodoList />} />
      </Route>
    </Routes>
  );
}

export default Alpha;
