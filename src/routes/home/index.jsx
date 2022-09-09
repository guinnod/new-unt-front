import { Home } from "../../pages/home";
import { NotFound } from "../../pages/not-found";
import { Routes, Route } from 'react-router-dom';
import Protected from '../../protected';
import { DefaultContext } from "../../Context";
import { useContext } from "react";
export const HomePage = () => {
  const user = useContext(DefaultContext);
  return (
    <Protected isLoggedIn={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Protected>
  );
};