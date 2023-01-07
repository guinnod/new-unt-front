import { Home } from "../../pages/home";
import { Profile } from "../../pages/profile";
import { Additional } from "../../pages/additional";
import { NotFound } from "../../pages/not-found";
import { Routes, Route } from 'react-router-dom';
import Protected from '../../protected';
import { DefaultContext } from "../../Context";
import { useContext } from "react";
import { getRoutes } from "../../data/consts";
import { universalRoutes } from "../../components/universals/universal-routes";

export const HomePage = () => {
  const { user, language } = useContext(DefaultContext);
  return (
    <Protected isLoggedIn={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/additional' element={<Additional />} />
        <Route path='testing'> 
        {universalRoutes(getRoutes('testing', language))}
        </Route>
        <Route path='practice'> 
        {universalRoutes(getRoutes('practice', language))}
        </Route>
        <Route path='theory'> 
        {universalRoutes(getRoutes('theory', language))}
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Protected>
  );
};