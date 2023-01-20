import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

// import { IconType } from 'react-icons';
import { ReactText } from "react";

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }

const LinkItems = [
  { name: "Home", icon: <i class="fa-solid fa-house"></i> },
  { name: "Trending", icon: <i class="fa-solid fa-arrow-trend-up"></i> },
  { name: "Explore", icon: <i class="fa-duotone fa-compass"></i> },
  { name: "Favourites", icon: <i class="fa-solid fa-star"></i> },
  { name: "Settings", icon: <i class="fa-solid fa-gear"></i> },
];

export default function ProductPage({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>

    </Box>

  );
}

const SidebarContent = () => {
  return (
    <Box
      border={"1px solid red"}
      minH={"100vh"}
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ name, icon }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        // {...rest}
      >
        {name}
        {icon}
      </Flex>
    </Link>
  );
};
    // <Box
    //   minH="100vh"
    //   bg={useColorModeValue("gray.100", "gray.900")}
    //   border={"1px solid black"}
    // >
    //   <SidebarContent />
    //   <Drawer
    //     border={"1px solid black"}
    //     autoFocus={false}
    //     isOpen={isOpen}
    //     placement="left"
    //     onClose={onClose}
    //     returnFocusOnClose={false}
    //     onOverlayClick={onClose}
    //     size="full"
    //   >
    //     <DrawerContent>
    //       <SidebarContent />
    //       <Box border={"1px solid black"}>
    //         <Text>hello</Text>
    //       </Box>
    //     </DrawerContent>
    //   </Drawer>
 
    //   <Box ml={{ base: 0, md: 60 }} p="4" border={"1px solid black"}>
    //     {children}
    //   </Box>
    // </Box>