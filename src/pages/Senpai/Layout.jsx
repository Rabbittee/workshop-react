import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="bg-stone-800 min-h-screen w-full">
      <Outlet />
    </div>
  );
}

export default Layout;
