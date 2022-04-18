import { Outlet } from 'react-router-dom';

function AlphaLayout() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-teal-100 to-cyan-300 bg-opacity-20 bg-fixed bg-no-repeat">
      <Outlet />
    </div>
  );
}

export default AlphaLayout;
