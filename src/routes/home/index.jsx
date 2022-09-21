import { Home } from "../../pages/home";
import { Profile } from "../../pages/profile";
import { Additional } from "../../pages/additional";
import { NotFound } from "../../pages/not-found";
import { Routes, Route } from 'react-router-dom';
import Protected from '../../protected';
import { DefaultContext } from "../../Context";
import { useContext } from "react";
import { UniversalRoutes } from "../../components/universal-routes";
import { routesTesting, routesPractice, routesTheory } from "../../data/consts";

export const HomePage = () => {
  const { user, language } = useContext(DefaultContext);
  return (
    <Protected isLoggedIn={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/testing/*' element={<UniversalRoutes routes={routesTesting(language)} />} />
        <Route path='/practice/*' element={<UniversalRoutes routes={routesPractice(language)} />} />
        <Route path='/theory/*' element={<UniversalRoutes routes={routesTheory(language)} />} />
        <Route path='/additional' element={<Additional />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Protected>
  );
};