import './App.css';
import {
  add
  , calculator
  , context
  , converting
  , deafultUser
  , excel
  , Flag_of_Kazakhstan, Flag_of_Russia
  , forinput, freecodecamp
  , google, hackkerrank
  , headphones, html, instagram
  , linkedin, logic
  , mortarboard, multiple
  , next, practice
  , previous, python
  , repeat, shuffle
  , simple, sql
  , standard, telegram
  , testing, theory
} from './media/index';
import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { NotFound } from './pages/not-found';
import { HomePage } from './routes/home';
import { DefaultContext } from "./Context.js";
import kazakh from './data/kazakh.json';
import russian from './data/russian.json';
import { Test } from './Test';

// import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentLanguage = localStorage.getItem('language') === 'ru' ? russian : kazakh;
  const [language, setLanguage] = useState(currentLanguage);
  const handleSetLanguage = () => {
    let tempLanguage = localStorage.getItem('language');
    if (tempLanguage === 'ru') {
      setLanguage(kazakh);
      localStorage.setItem('language', 'kz');
    }
    else {
      setLanguage(russian);
      localStorage.setItem('language', 'ru');
    }
  }
  const flag = Flag_of_Kazakhstan;
  // const getUser = async () => {
  //   try {
  //     const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
  //     const { data } = await axios.get(url, { withCredentials: true });
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    setUser(true)
    setLoading(false)
    // getUser().then((data) => {
    //   setUser(data.user._json);
    // }).finally(() => {
    //   setLoading(false);
    // })
  }, []);
  if (loading) {
    return (
      <div>
        Please Wait...
      </div>
    );
  }
  return (
    <div>
      <DefaultContext.Provider value={{
        user, language, handleSetLanguage, add
        , calculator
        , context
        , converting
        , deafultUser
        , excel
        , Flag_of_Kazakhstan, Flag_of_Russia
        , forinput, freecodecamp
        , google, hackkerrank
        , headphones, html, instagram
        , linkedin, logic
        , mortarboard, multiple
        , next, practice
        , previous, python
        , repeat, shuffle
        , simple, sql
        , standard, telegram
        , testing, theory, flag
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path='/home/*' element={<HomePage />} />
            <Route path='/test' element={<Test />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DefaultContext.Provider>
    </div>
  );
}

export default App;