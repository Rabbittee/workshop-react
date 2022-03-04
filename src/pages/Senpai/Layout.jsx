import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen w-full bg-stone-800">
      <Outlet />
    </div>
  );
}

export default Layout;
