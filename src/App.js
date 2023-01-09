import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { NotFound } from './pages/not-found';
import { Home } from './pages/home';
import { Additional } from './pages/additional';
import { Profile } from './pages/profile';
import { Test } from './Test';
import { useSelector } from 'react-redux';
import Protected from './protected';
import { getRoutes } from './data/consts';
import { universalRoutes } from './components/universals/universal-routes';
function App() {
  const language = useSelector((state) => {
    return state.language.value;
  });
  const auth = useSelector((state) => {
    return state.auth;
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path='home' element={<Protected isAuthorized={auth} />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path='additional' element={<Additional />} />
          <Route path='testing'>
            {universalRoutes(getRoutes('testing', language))}
          </Route>
          <Route path='practice'>
            {universalRoutes(getRoutes('practice', language))}
          </Route>
          <Route path='theory'>
            {universalRoutes(getRoutes('theory', language))}
          </Route>
        </Route>
        <Route path='/test' element={<Test />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;