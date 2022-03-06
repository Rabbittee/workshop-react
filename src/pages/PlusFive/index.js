/*
 * @Author:Claire Li
 * @Date:2022-02-28 14:35:47
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-06 15:26:48
 * @Description:
 */
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TodoList from './TodoList';

const DATA = [{ id: 1, name: 'React Work Shop', completed: true }];

function PlusFive() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList tasks={DATA} />} />
        <Route path="todo" element={<TodoList tasks={DATA} />} />
      </Route>
    </Routes>
  );
}

export default PlusFive;
