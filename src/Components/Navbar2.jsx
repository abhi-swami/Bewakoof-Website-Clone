import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
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
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  Search2Icon,
  ChevronRightIcon,
} from "@chakra-ui/icons";


import becool from "../images/becool.png";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
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
          <Link href="./">
          <Image
            src={becool}
            alt="asdfas"
            w="130px"
            h={"25px"}
            mr={-5}
            _hover={{
              cursor: "pointer",
            }}
          />
          </Link>

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
          <InputGroup w="30%" variant="filled" size={"md"} color={"gray.600"}>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.600" />}
            />
            <Input
              type="text"
              placeholder="Search here"
              color={"gray.600"}
              fontWeight={400}
            />
          </InputGroup>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"gray.600"}  
            href={"#"}
            _hover={{
              bg: "lightcoral",
            }}
          >
            Sign Up
          </Button>
          <Button
          fontSize={"lg"}
            variant="link"
            _hover={{
              bg: "lightcoral",
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button
            fontSize={"lg"}
            spacing={-5}
            variant="link"
            _hover={{
              bg: "lightcoral",
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
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

  return (
    <Stack direction={"row"} ml={10} spacing={-3}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
             
                m={4}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
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
