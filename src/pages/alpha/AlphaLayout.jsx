import { Outlet } from 'react-router-dom';

function AlphaLayout() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-teal-300 to-cyan-600 bg-fixed bg-no-repeat">
      <Outlet />
    </div>
  );
}

export default AlphaLayout;
