import { createContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {

    const[isLoggedIn,setIsLoggedIn]=useState(false);

    const inputLogin=()=>{
        setIsLoggedIn(true)
    }
    const inputLogout=()=>{
        setIsLoggedIn(false)
    }
  return <LoginContext.Provider value={{isLoggedIn, inputLogin,inputLogout }}>{children}</LoginContext.Provider>}