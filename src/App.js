import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './HOC/ProtectedRoute';
import DetailPage from './pages/DetailPage';
import { LoginContextProvider } from './context/LoginContext';

function App() {

  return (
    <LoginContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
              <Dashboard />
          </ProtectedRoute>
        }/>
        <Route path="/detailpage/:id" element={
          <ProtectedRoute>
              <DetailPage />
          </ProtectedRoute>
        } />
      </Routes>
    </LoginContextProvider>
  );
}

export default App;
