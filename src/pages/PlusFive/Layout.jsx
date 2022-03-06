import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="bg-slate-800">
      <Outlet />
    </div>
  );
}

export default Layout;
