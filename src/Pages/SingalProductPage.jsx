import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import  RadioGroup from "./RadioGroup"
import axios from "axios";

const url = `https://becool-project.onrender.com`;

export default function SingleProductPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const {IncrementcartCount}=useContext(CartContext)
  const [isSizeSelected,setIsSizeSelected]=useState(false)
  const [size ,setSize]=useState(" ")
  const navigate = useNavigate();

  const getData = () => {
    return fetch(`${url}/allProduct/${id}`).then((res) => res.json());
  };

  const fetchData = () => {
    setLoading(true)
    getData()
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  };

  const uploadData=async(obj)=>{

    try{
      axios.post(
        `${url}/cart`,
        obj,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      navigate("/cart")
    }catch(err){
      console.log(err)
    }
  }
  const handleSize=(x)=>{
    setSize(x);
    setIsSizeSelected(true);
  }

  const handleCartCount=()=>{
      IncrementcartCount()
      const obj={...data,"size":size}
   
      uploadData(obj)
  }
  useEffect(() => {
    fetchData();
  }, []);

  let { actualPrice, brand,  discountPrice, image, rating, title } =
    data
  return loading ? (
    <Image
      ml={"300px"}
      src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
      alt={"loader imag"}
    ></Image>
  ) :(
    <Box>
      <Wrap
        spacing={30}
        justify="top"
        style={{ marginTop: "10px", marginBottom: "50px" }}
      >
        <HStack spacing={5} maxH={"60vh"} w={"50%"}>
          <VStack mt={-10}>
            <ChevronUpIcon boxSize="30px" color="gray.500" cursor="pointer" />

            {/*{data[0].moreImage.map((img)=> (*/}
            {/*alt={data[0].Title} */}
            {/*onClick={()=>setImage("https://tse3.mm.bing.net/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&pid=Api&P=0")}*/}
            <Image
              borderRadius={5}
              width="100px"
              objectFit="cover"
              src={
                image
              }
              cursor="pointer"
            />
            <ChevronDownIcon boxSize="30px" color="gray.500" cursor="pointer" />
          </VStack>
          {/*DefaultImg*/}
          <Image
            borderRadius={15}
            src={
              image
            }
            w="550px"
            minW="200px"
          />
        </HStack>
        <VStack width={550} align="revert-layer" spacing={5}>
          <Text
            fontSize="20px"
            fontWeight="bold"
            marginTop={50}
            color="gray.500"
          >
            {brand}
          </Text>
          <Text marginTop={30} fontSize="l" color="gray.500">
            {/*data[0].Title*/}{title}
          </Text>
          <Badge
            fontSize="18px"
            variant="outline"
            width="fit-content"
            colorScheme="teal"
          >
           {rating} {"⭐"}
          </Badge>
          <Stack>
            <HStack alignContent="center">
              <Text fontWeight="bold" fontSize="lg">
                ₹{/*data[0].price*/}{discountPrice}
              </Text>
              <Text as="s" marginLeft={4} mt={3} fontSize="sm">
                ₹{/*data[0].strikeprice*/}{actualPrice}
              </Text>
            </HStack>
            <Text>inclusive of all taxes</Text>
          </Stack>
          <Divider />
          <Badge fontSize="xl" variant="subtle" bgColor="yellow.400">
            {" "}
            ₹{Math.ceil(discountPrice-((discountPrice)*8/100))} for tribe members only{" "}
          </Badge>
          <Text>
            TriBe members get an extra discount of ₹20 and FREE shipping.Learn
            more
          </Text>
          <Divider />
          <Text fontWeight="extrabold">SELECT SIZE</Text>
          <HStack spacing={5}>
            <RadioGroup handleSize={handleSize}/>
          </HStack>
          <Text>
            Garment:Chest (in Inch):44.0 Front Length (in Inch):30.0 leeve
            Length (in Inch):25.5
          </Text>
          <Divider />


          <HStack w="full">
            {/*onClick={()=>handleClick()}*/}
            <Tooltip hasArrow label={isSizeSelected?"Add to Cart":"Please Select A Size"} bg='lightcoral'>
            <Button
              fontSize="lg"
              padding={8}
              w="full"
              colorScheme="yellow"
              onClick={ handleCartCount}
              isDisabled={!isSizeSelected}
            >
              {/* <BiShoppingBag fontSize="30px" /> 
    {!isButLoading &&  bagbutton && "ADD TO BAG" }
    {!isButLoading &&  !bagbutton && "ADDED" }
        {isButLoading && (
          <Spinner
            thickness="4px"
            speed="0.55s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        )}*/}
              Add
            </Button>
            </Tooltip>
            <Button
              fontSize="lg"
              padding={8}
              w="full"
              colorScheme="teal"
              variant="outline"
            >
              WISHLIST
            </Button>
          </HStack>
        </VStack>
      </Wrap>
    </Box>
  );
}
