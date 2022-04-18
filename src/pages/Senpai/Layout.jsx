import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const [currentPath, setCurrentPath] = useState('');
  const pathArr = useLocation().pathname.split('/senpai/');
  const path = pathArr[pathArr.length - 1];

  useEffect(() => {
    setCurrentPath(path);
  }, [path])

  const currentTag = (currentPath, tagName) => {
    return currentPath === tagName
      ? 'border-white text-white'
      : 'text-gray-300 border-transparent'
  }

  return (
    <div className="min-h-screen w-full bg-stone-800">
      <h1 className="text-white text-2xl">Pencil's React workshop dashboard</h1>
      <nav className="flex justify-around box-border bg-cyan-700">
        <Link
          className={clsx(
            'border-solid border',
            currentTag(currentPath, 'todo')
          )}
          to="todo">
          TodoList
        </Link>
        <Link
          className={clsx(
            'border-solid border',
            currentTag(currentPath, 'todo_useContext')
          )}
          to="todo_useContext">
          TodoList Refactor
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
