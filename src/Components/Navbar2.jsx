import {
  Box,
  Flex,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import becool from "../Images/becool.png";

import { useNavigate } from "react-router-dom";

import SearchBar from "./Navbar/SearchBar.jsx";
import DesktopNav from "../Components/Navbar/DesktopNav";
import Login from "../Components/Navbar/Login.jsx";
import FavoriteNCart from "./Navbar/FavoriteNCart";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  const navigate = useNavigate();

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
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
          ml={20}
          size={"sm"}
          border="0px solid black"
        >
          <Image
            src={becool}
            alt="becool"
            w={{ base: "100px", md: "130px" }}
            h={"auto"}
            mr={-5}
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Flex display={{ base: "none", md: "flex" }} mt="5px">
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
          <SearchBar />
          <Login />

          <FavoriteNCart />
        </Stack>
      </Flex>
    </Box>
  );
}
