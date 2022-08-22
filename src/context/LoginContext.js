import React, {createContext, useEffect, useState} from 'react';

export const LoginContext = createContext();

export const LoginContextProvider = (props) => {
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

    const authData = {
        login,
        setLogin
    };

    return (
        <LoginContext.Provider value = {authData}>
            {props.children}
        </LoginContext.Provider>
    )
}