import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  PinInput,
  PinInputField,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";
export default function PopUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size={"sm"}>Please Enter OTP Send to</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack my={5}></HStack>
            <HStack justifyContent={"center"} alignItems={"center"}>
              <PinInput type="alphanumeric" mask>
                <PinInputField border={"2px solid lightcoral"} />
                <PinInputField border={"2px solid lightcoral"} />
                <PinInputField border={"2px solid lightcoral"} />
                <PinInputField border={"2px solid lightcoral"} />
              </PinInput>
            </HStack>
          </ModalBody>

          <ModalFooter justifyContent={"center"} alignItems={"center"}>
            <Button
              variant="ghost"
              bgColor="green"
              mr={3}
              color={"white"}
              _hover={{ color: "black" }}
            >
              Submit OTP
            </Button>
            <Button
              bgColor="red"
              mr={3}
              color={"white"}
              _hover={{ color: "black" }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// import {
//   Avatar,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuGroup,
//   MenuDivider,
//   Box,
// } from "@chakra-ui/react";

// export default function AvatarImage() {
//   return (
//     <Box mx={50}>
//       <Menu maxW={"20%"} mr={4}>
//         <MenuButton  >
//           <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
//         </MenuButton>
//         <MenuList w={"10%"}>
//           <MenuGroup title="Profile">
//             <MenuItem>My Account</MenuItem>
//             <MenuItem>Payments </MenuItem>
//           </MenuGroup>
//           <MenuDivider />
//           <MenuGroup title="Help">
//             <MenuItem>Docs</MenuItem>

//           </MenuGroup>
//           <MenuGroup title="">
//             <MenuItem>Logout</MenuItem>

//           </MenuGroup>
//         </MenuList>
//       </Menu>
//     </Box>
//   );
// }

/*
 {isLoggedIn ? (
              favCount === 0 ? null : (
                <Text
                  border={"1px solid lightcoral"}
                  bgColor={"lightcoral"}
                  borderRadius={"50%"}
                  fontSize={"10px"}
                  fontWeight={"bond"}
                  color={"white"}
                  w={"15px"}
                  h={"15px"}
                >
                  {favCount}
                </Text>
              )
            ) : null}
*/
