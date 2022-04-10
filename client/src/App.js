import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom"

import Login from './components/Login';
import Home from './container/Home';
import { useEffect } from 'react';
import { fetchUser } from './utils/fetchUser';

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser()
    console.log(user)

    if (!user) navigate("/login")
  }, [])

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
