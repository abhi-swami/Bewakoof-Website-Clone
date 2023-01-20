import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Mens from "./Mens"
import Womens from "./Womens";
import Accessories from "./Accessories";
import WinterWears from "./WinterWears";
import Login from "./Login";
import SignUp from "./SignUp"


export default function AllPages(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mens" element={<Mens/>}/>
            <Route path="/womens" element={<Womens/>}/>
            <Route path="/accessories" element={<Accessories/>}/>
            <Route path="/winterwears" element={<WinterWears/>}/>
            <Route path="/login" element={<Login/>}/> 
            <Route path="/signup" element={<SignUp/>}/> 
        </Routes>
    )
}