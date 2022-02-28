import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from 'components/Welcome';
import Layout from 'components/Layout';
import Cola from 'pages/Cola';
import Erica from 'pages/Erica';
import Haha from 'pages/Haha';
import Kevin from 'pages/Kevin';
import Kim from 'pages/Kim';
import PlusFive from 'pages/PlusFive';
import Senpai from 'pages/Senpai';
import White from 'pages/White';
import Husky from 'pages/Husky';

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />

        <Route path="cola/*" element={<Cola />} />

        <Route path="erica/*" element={<Erica />} />
        <Route path="haha/*" element={<Haha />} />
        <Route path="kevin/*" element={<Kevin />} />
        <Route path="kim/*" element={<Kim />} />
        <Route path="plusfive/*" element={<PlusFive />} />
        <Route path="senpai/*" element={<Senpai />} />
        <Route path="white/*" element={<White />} />
        <Route path="Husky/*" element={<Husky />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
