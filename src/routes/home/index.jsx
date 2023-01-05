import { Home } from "../../pages/home";
import { Profile } from "../../pages/profile";
import { Additional } from "../../pages/additional";
import { NotFound } from "../../pages/not-found";
import { Routes, Route, Outlet } from 'react-router-dom';
import Protected from '../../protected';
import { DefaultContext } from "../../Context";
import { useContext } from "react";
import { UniversalRoutes } from "../../components/universals/universal-routes";
import { getRoutes } from "../../data/consts";
import { temp } from "../../components/universals/universal-routes/temp";

export const HomePage = () => {
  const { user, language } = useContext(DefaultContext);
  return (
    <Protected isLoggedIn={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/testing/*' element={<UniversalRoutes routes={getRoutes('testing', language)} />} />
        <Route path='/practice/*' element={<UniversalRoutes routes={getRoutes('practice', language)} />} />
        <Route path='/theory/*' element={<UniversalRoutes routes={getRoutes('theory', language)} />} />
        <Route path='/additional' element={<Additional />} />
        <Route path='ala'> 
        {temp(getRoutes('testing', language))}
        <Route path="a" element={<div>AAAAAAAAA
        </div>}></Route>
        <Route path="aa" element={<div>AAAAAAAAAB
        </div>}></Route>

        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Protected>
  );
};