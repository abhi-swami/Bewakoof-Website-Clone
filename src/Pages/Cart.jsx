
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import EmptyCart from "./Cart/Cart1";
import FullCart from "./Cart/Cart2";


export default function Cart() {
  const {cartCount}=useContext(CartContext)
  if(cartCount===0){
   return <EmptyCart/>
  }
  return <FullCart /> 
}
