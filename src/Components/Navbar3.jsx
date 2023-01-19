import { NavLink } from "react-router-dom";
import { Flex,  useColorModeValue, } from '@chakra-ui/react'

const links=[
    {to:"/mens",text:"MENS"},
    {to:"/womens",text:"WOMENS"},
    {to:"/winterwears",text:"WINTER WEAR"},
    {to:"/accessories",text:"ACCESSORIES"},
]



export default function Navbar3(){
  
    return(
        <Flex justifyContent="center" gap={9} templateRows={"repeate(3,1fr)"} space={3} bg={useColorModeValue("gray.200", "gray.700")} fontSize={"lg"}>
 
            {links.map((el)=><NavLink style={({isActive})=>{
                return isActive?{color:"lightcoral",textDecoration:"underline"}:{color:"black"}
            }} key={el.to} to={el.to}>{el.text}</NavLink>)}

        </Flex>
    )
    
}