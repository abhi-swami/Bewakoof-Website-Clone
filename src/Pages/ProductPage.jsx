import {
  Box,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Flex,
  VStack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";

import { useState,useEffect, useContext } from "react";
import CardComponent from "../Components/CardComponent"
import { LinkContext } from "../Context/LinkContext";
import { useNavigate } from "react-router-dom";


const categories=[
  {id:1,category:"T-Shirt"},
  {id:2,category:"Shrit"},
  {id:3,category:"Jeans"},
  {id:4,category:"Sweatshirt"},
  {id:5,category:"Brief"},
  {id:6,category:"Hoodies"},
  {id:7,category:"Boxers"},
  {id:8,category:"Jacket"},
  {id:9,category:"Joggers"},
  {id:10,category:"Kurta"},
  {id:11,category:"Shorts"},
  {id:12,category:"Track Pants"},
  {id:13,category:"Vest"},
]
const sizes=[
  {id:1,category:"XS"},
  {id:2,category:"S"},
  {id:3,category:"M"},
  {id:4,category:"L"},
  {id:5,category:"XL"},
  {id:6,category:"2XL"},
  {id:7,category:"3XL"},
  {id:8,category:"26"},
  {id:9,category:"28"},
  {id:10,category:"30"},
  {id:11,category:"32"},
  {id:12,category:"34"},
  {id:13,category:"36"},
  {id:14,category:"38"},
  {id:15,category:"40"},
  {id:16,category:"42"},
]
const Brands=[
  {id:1,category:"Bewakoof"},
  {id:2,category:"Xyxx"},
  {id:3,category:"Snitch"},
  {id:4,category:"Dillinger"},
  {id:5,category:"Campus Sutra"},
  {id:6,category:"Adro"},
  {id:7,category:"Rigo"},
  {id:8,category:"Difference Of Opinion"},
  {id:9,category:"Bushirt"},
  {id:10,category:"Hubberholme"},
]

const url=`https://becool-project.onrender.com/allProduct`
export default function ProductPage() {
  
  const [data,setData]=useState([]);
  const {link}=useContext(LinkContext);
  const navigate=useNavigate()


  const getData=()=>{
    return fetch(`${url}`).then((res)=>res.json())
  }
  const fetchData=async()=>{
    const res=await getData();
    setData(res)
  }
  useEffect(()=>{
    fetchData()
  },[])
  // console.log(data)
  return (
    <Box pos={"relative"}>
      <Grid
        minHeight={"200vh"}
        pos={"relative"}
        templateColumns={"28% 60%"}
        gap={4}
        py={{ base: 1, sm: 2, lg: 2 }}
        mt={15}
      >
        {/* <Scrollbars  style={{ width: 380, height: 100 }}> */}
        <GridItem ml={3} position={"-webkit-sticky"}>
          <Heading size={"sm"} fontWeight={"md"} textDecor={"underline"} color={"lightcoral"} ml={20} my={5}>Result For {link} Cataegory</Heading>
          <Box
            // border={"1px solid black"}
            pos={"sticky"}
            top={120}
            w={"70%"}
            ml={"20"}
          >
            <Accordion allowToggle>
              <AccordionItem >
                <h2>
                  <AccordionButton _hover={{backgroundColor:"lightcoral"}}>
                    <Box as="span" flex="1" textAlign="left">
                      Categories
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack>
                    {categories.map((el)=><Button key={el.id} fontSize={"16px"} _hover={{backgroundColor:"lightcoral"}} w={"100%"}>{el.category}</Button>)}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _hover={{backgroundColor:"lightcoral"}}>
                    <Box as="span" flex="1" textAlign="left">
                      Sizes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <VStack >
                    {sizes.map((el)=><Button _hover={{backgroundColor:"lightcoral"}} key={el.id} fontSize={"sm"} w={"100%"}>{el.category}</Button>)}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _hover={{backgroundColor:"lightcoral"}}>
                    <Box as="span" flex="1" textAlign="left">
                      Sizes
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <VStack>
                    {Brands.map((el)=><Button _hover={{backgroundColor:"lightcoral"}} key={el.id} fontSize={"sm"} w={"100%"}>{el.category}</Button>)}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </GridItem>

        <GridItem
          p={{ base: 1, sm: 1, md: 1 }}
        >
          <Flex justifyContent={"flex-end"} mb={59}>
            <Menu closeOnSelect={true}>
              <MenuButton as={Button} _hover={{backgroundColor:"lightcoral"}}>
                Short
              </MenuButton>
              <MenuList minW="10px" >
                <MenuOptionGroup defaultValue="asc" type="radio">
                  <MenuItemOption _hover={{backgroundColor:"lightcoral"}} value="asc">Ascending</MenuItemOption>
                  <MenuItemOption _hover={{backgroundColor:"lightcoral"}} value="desc">Descending</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>
          <SimpleGrid columns={3} spacing='50px'>
            {data.map((el)=><Box onClick={()=>navigate(`/allProduct/${el.id}`)}  key={el.id}><CardComponent key={el.id} {...el} /></Box>)}
            
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
}

