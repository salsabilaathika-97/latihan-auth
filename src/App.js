import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './HOC/ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {
  const [login, setLogin] = useState("");

  useEffect(() => {
      const token = localStorage.getItem('myToken')
      if(token) {
        setLogin(token);
      }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={
          <ProtectedRoute isLogin={login}>
              <Dashboard />
          </ProtectedRoute>
        }/>
      </Routes>
    </>
  );
}

export default App;
