
import {
  Circle ,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  VStack,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  Search2Icon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import becool from "../Images/becool.png";
import { useContext, useState } from "react";
import Logout from "./Logout";
import { LinkContext } from "../Context/LinkContext";
import { SearchContext } from "../Context/SearchContext";
import {  LoginContext } from "../Context/LoginContext";
import { FavoriteContext } from "../Context/FavoriteContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

// import ProductPage from "../Pages/ProductPage";
const initial = { search: "" };
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [input, setInput] = useState(initial);
  const { inputQuery } = useContext(SearchContext);
  const { isLoggedIn } = useContext(LoginContext);
  const { favCount } = useContext(FavoriteContext);
  const {cartCount}=useContext(CartContext)


  const navigate=useNavigate();
  
  const { value } = input.search;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    inputQuery(input.search);
  };
  const handleKeyDown = (e) => {
    if(e.key==="Enter"){
      navigate("/searchPage")
    }
  };
  const handleHeart=()=>{
    if(isLoggedIn&& favCount){
      navigate("/login")

    }
  }

  return (
    <Box w={"100%"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justify={"normal"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: "10%" }}
          justify={{ base: "center", md: "left" }}
          ml={20}
          size={"sm"}
          border="0px solid black"
        >
    
            <Image
              src={becool}
              alt="asdfas"
              w="130px"
              h={"25px"}
              mr={-5}
              _hover={{
                cursor: "pointer",
              }}
              onClick={()=>navigate("/")}
            />
       

          <Flex display={{ base: "left", md: "flex" }} mt="5px">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1 }}
          justify={"center"}
          direction={"row"}
          spacing={3}
          border={"0px solid black"}
        >
          <InputGroup w="35%" variant="filled" size={"md"} color={"gray.600"}>
          
              <InputLeftElement
                pl={5}
                pointerEvents="change"
                children={<Search2Icon color="gray.600" />}
              />
         
            <Input
              ml={2}
              px={9}
              type="text"
              name="search"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              focusBorderColor="lightcoral"
              placeholder="Search here"
              color={"gray.600"}
              fontWeight={400}
            />
          </InputGroup>
          {isLoggedIn ? (
            <Logout />
          ) : (
         
              <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"gray.600"}
                _hover={{
                  bg: "lightcoral",
                  textDecor: "none",
                }}
                onClick={()=>navigate("/login")}
              >
                Login
              </Button>
            
          )}
          <Button
            fontSize={"lg"}
            variant="link"
            _hover={{
              bg: "lightcoral",
            }}
            color={
              isLoggedIn ? (favCount === 0 ? "gray.400" : "yellow.400") : null
            }
            onClick={()=>handleHeart()}
          >
            <i color="yellow" class="fa-solid fa-heart"></i>
          </Button>
            <Button
              fontSize={"lg"}
              spacing={-5}
              variant="link"
              _hover={{
                bg: "lightcoral",
              }}
              >
             
              <i class="fa-solid fa-cart-shopping" onClick={()=>navigate("/cart")}></i>
              {isLoggedIn ? (cartCount === 0 ?  null:<Circle size='40px'w={"14px"} h={"14px"} bg='tomato' color='white'><Text as={"span"} fontSize={"10px"} color={"white"}>{cartCount}</Text></Circle> ) : null}
          {/* </Link> */}
            </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("lightcoral");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { inputLink } = useContext(LinkContext);
  const navigate=useNavigate();


  const handleNavButton=(name,address)=>{
    inputLink(name)
    navigate(address)
  }
 
  return (
    <Stack direction={"row"} ml={10} spacing={-3}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Button
                onClick={() =>handleNavButton (navItem.label,navItem.href)}
                variant="link"
                m={4}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Button>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={3}
                rounded={"xl"}
                minW={"300%"}
              >
                <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, subLabel }) => {
  return (
    <>
      <VStack>
        <GridItem>
          <Text transition={"all .3s ease"} fontWeight={500} p={4}>
            {label}
          </Text>
          {subLabel.map((el) => (
            <Text fontSize={"sm"} key={el.id} m={3}>
              <Link rounded={"md"} _hover={{ bg: "lightcoral" }}>
                {el.key}
              </Link>
            </Text>
          ))}
        </GridItem>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"space-between"}
          align={"center"}
          flex={1 / 2}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </VStack>
    </>
  );
};

const NAV_ITEMS = [
  {
    label: "MEN",
    children: [
      {
        label: "Top Wear",
        subLabel: [
          { id: 1, key: "Printed T-shirt" },
          { id: 2, key: "Oversized T-Shirts" },
          { id: 3, key: "Plain T-shirts" },
          { id: 4, key: "Fashion T-Shirts" },
          { id: 5, key: "Activewear T-Shirts" },
          { id: 6, key: "Full Sleeve T-Shirts" },
          { id: 7, key: "Half Sleeve T-Shirts" },
          { id: 8, key: " T-Shirts" },
          { id: 9, key: "Shirts" },
          { id: 10, key: "Vests" },
          { id: 11, key: "Co-ord Sets" },
          { id: 12, key: "Kurtas" },
          { id: 13, key: "Henleys" },
          { id: 14, key: "Plus Size Topwear" },
          { id: 15, key: "Polo T-shirt" },
          { id: 16, key: "Jackets" },
          { id: 17, key: "Sweaters" },
          { id: 18, key: "All Tops" },
        ],
        href: "#",
      },
      {
        label: "Bottamwears",
        subLabel: [
          { id: 1, key: "Joggers" },
          { id: 2, key: "Pyjamas" },
          { id: 3, key: "Shorts" },
          { id: 4, key: "Jeans & Demins" },
          { id: 5, key: "Boxers" },
          { id: 6, key: "Briefs" },
          { id: 7, key: "Trunks" },
          { id: 8, key: "Hipsters Trunks" },
          { id: 9, key: "Trousers & Pants" },
          { id: 10, key: "Active Shorts" },
          { id: 11, key: "Active Joggers" },
          { id: 12, key: "Plus Size Bottamwears" },
          { id: 13, key: "All Bottomwears" },
        ],
        href: "#",
      },
      {
        label: "Winterwears",
        subLabel: [
          { id: 1, key: "Shirts & Hoodies" },
          { id: 2, key: "Jackets" },
          { id: 3, key: "Sweaters" },
          { id: 4, key: "Joggers" },
          { id: 5, key: "Full Sleves T-Shirt" },
        ],
        href: "#",
      },
      {
        label: "SPECIAL",
        subLabel: [
          { id: 1, key: "Made In India Sale", imgSrc: "" },
          { id: 2, key: "Made In India Sale", imgSrc: "" },
          { id: 3, key: "Made In India Sale", imgSrc: "" },
          { id: 4, key: "Joggers", imgSrc: "" },
          { id: 5, key: "Full Sleves T-Shirt", imgSrc: "" },
        ],
        href: "#",
      },
    ],
    href: "/productPage",
  },
  {
    label: "WOMEN",
    children: [
      {
        label: "Top Wear",
        subLabel: [
          { id: 1, key: "Printed T-shirt" },
          { id: 2, key: "Oversized T-Shirts" },
          { id: 3, key: "Plain T-shirts" },
          { id: 4, key: "Fashion T-Shirts" },
          { id: 5, key: "Activewear T-Shirts" },
          { id: 6, key: "Full Sleeve T-Shirts" },
          { id: 7, key: "Half Sleeve T-Shirts" },
          { id: 8, key: " T-Shirts" },
          { id: 9, key: "Shirts" },
          { id: 10, key: "Vests" },
          { id: 11, key: "Co-ord Sets" },
          { id: 12, key: "Kurtas" },
          { id: 13, key: "Henleys" },
          { id: 14, key: "Plus Size Topwear" },
          { id: 15, key: "Polo T-shirt" },
          { id: 16, key: "Jackets" },
          { id: 17, key: "Sweaters" },
          { id: 18, key: "All Tops" },
        ],
        href: "#",
      },
      {
        label: "Bottamwears",
        subLabel: [
          { id: 1, key: "Joggers" },
          { id: 2, key: "Pyjamas" },
          { id: 3, key: "Shorts" },
          { id: 4, key: "Jeans & Demins" },
          { id: 5, key: "Boxers" },
          { id: 6, key: "Briefs" },
          { id: 7, key: "Trunks" },
          { id: 8, key: "Hipsters Trunks" },
          { id: 9, key: "Trousers & Pants" },
          { id: 10, key: "Active Shorts" },
          { id: 11, key: "Active Joggers" },
          { id: 12, key: "Plus Size Bottamwears" },
          { id: 13, key: "All Bottomwears" },
        ],
        href: "#",
      },
      {
        label: "Winterwears",
        subLabel: [
          { id: 1, key: "Shirts & Hoodies" },
          { id: 2, key: "Jackets" },
          { id: 3, key: "Sweaters" },
          { id: 4, key: "Joggers" },
          { id: 5, key: "Full Sleves T-Shirt" },
        ],
        href: "#",
      },
      {
        label: "SPECIAL",
        subLabel: [
          { id: 1, key: "Made In India Sale", imgSrc: "" },
          { id: 2, key: "Made In India Sale", imgSrc: "" },
          { id: 3, key: "Made In India Sale", imgSrc: "" },
          { id: 4, key: "Joggers", imgSrc: "" },
          { id: 5, key: "Full Sleves T-Shirt", imgSrc: "" },
        ],
        href: "#",
      },
    ],
  },
  {
    label: "MOBILE COVERS",
    children: [
      {
        label: "Job Board",
        subLabel: [
          { id: 1, key: "TopwearPrinted" },
          { id: 2, key: "T-ShirtsOversized" },
          { id: 3, key: "T-shirtsPlain" },
          { id: 4, key: "T-ShirtsFashion" },
          { id: 5, key: "T-ShirtsActivewear" },
          { id: 6, key: "T-ShirtsFull Sleeve" },
          { id: 7, key: "T-ShirtsHalf Sleeve" },
          { id: 8, key: "T-Shirts" },
          { id: 9, key: "Shirts" },
        ],
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: [
          { id: 1, key: "TopwearPrinted" },
          { id: 2, key: "T-ShirtsOversized" },
          { id: 3, key: "T-shirtsPlain" },
          { id: 4, key: "T-ShirtsFashion" },
          { id: 5, key: "T-ShirtsActivewear" },
          { id: 6, key: "T-ShirtsFull Sleeve" },
          { id: 7, key: "T-ShirtsHalf Sleeve" },
          { id: 8, key: "T-Shirts" },
          { id: 9, key: "Shirts" },
        ],
        href: "#",
      },
    ],
  },
];
