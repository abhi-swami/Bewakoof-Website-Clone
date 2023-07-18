import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const[cartCount,setCartCount]=useState(0);
    const IncrementcartCount=()=>{
      let x=cartCount+1
      setCartCount(x)
    }
    const DecrementcartCount=(x)=>{
      if(cartCount>0){
        let x=cartCount-1
        setCartCount(x)
      }
    }
  return <CartContext.Provider value={{cartCount, IncrementcartCount,DecrementcartCount }}>{children}</CartContext.Provider>;
}
