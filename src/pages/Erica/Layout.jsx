import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen py-10">
      <div className="mx-auto max-w-xl">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
