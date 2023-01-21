import { createContext, useState } from "react";

export const LinkContext = createContext();

export default function LinkContextProvider({ children }) {
    const[link,setLink]=useState("Mens");
    const inputLink=(val)=>{
        setLink(val)
    }
  return <LinkContext.Provider value={{link, inputLink }}>{children}</LinkContext.Provider>;
}
