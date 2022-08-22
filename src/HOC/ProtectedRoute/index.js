import React, {useContext} from "react";
import { Navigate } from "react-router";
import { LoginContext } from "../../context/LoginContext";

const ProtectedRoute = ({ children}) => {
  const loginContextData = useContext(LoginContext);
  const {setLogin} = loginContextData;

  if (!setLogin) {
    return <Navigate to = "/login" replace/>
  }

    return children;
};

export default ProtectedRoute;
