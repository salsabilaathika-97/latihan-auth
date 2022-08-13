import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './HOC/ProtectedRoute';
import { useEffect, useState } from 'react';
import DetailPage from './pages/DetailPage';

function App() {
  const [login, setLogin] = useState("");

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("myToken");
      if (!token) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    };
    checkIfLogin();

  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLogin={setLogin} />}/>
        <Route path="/dashboard" element={
          <ProtectedRoute user={login}>
              <Dashboard />
          </ProtectedRoute>
        }/>
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
