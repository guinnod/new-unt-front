import './App.css';
import { DefaultContext } from "./Context.js";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { NotFound } from './pages/not-found';
import { HomePage } from './routes/home';
import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getUser().then((data) => {
        setUser(data.user._json);
      }).finally(() => {
        setLoading(false);
      })
    }, 500);
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
      <DefaultContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path='/home/*' element={<HomePage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DefaultContext.Provider>
    </div>
  );
}

export default App;