import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
    const[favCount,setFavCount]=useState(0);
    const IncrementFavCount=()=>{
      let x=favCount+1
      setFavCount(x)
    }
    const DecrementFavCount=()=>{
      if(favCount>=0){
        const x=favCount-1;
        setFavCount(x)
      }
    }
  return <FavoriteContext.Provider value={{favCount, IncrementFavCount,DecrementFavCount }}>{children}</FavoriteContext.Provider>;
}
