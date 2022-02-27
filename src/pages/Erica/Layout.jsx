import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="py-10 min-h-screen">
      <div className="max-w-xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
