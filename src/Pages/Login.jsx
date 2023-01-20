

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Image,
  useColorModeValue,
  HStack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import {EmailIcon}from "@chakra-ui/icons";
import { Link } from "react-router-dom";



export default function Logi() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"8xl"}
        // border="1px solid yellow"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
        bgGradient="linear(orange.100,yellow.200)"
      >
        <Stack direction={"column"} spacing={4} align={"center"}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <HStack>
              <Heading size={"lg"}>Welcome to our world and Be-Cool !</Heading>
              <Image
                w="30px"
                h="30px"
                src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sunglasses_cool_emoji_grande.png?v=1571606093"
              ></Image>
            </HStack>
            <Image
              src="https://images.bewakoof.com/web/group-19-1617704502.png"
              alt="loginImage"
            ></Image>
          </Stack>
        </Stack>
        <Stack
          border={"3px solid lightcoral"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              textAlign={"center"}
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Login{" "}
              <Text as={"span"} bgColor="lightcoral" bgClip="text">
                /
              </Text>{" "}
              SignUp
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              for Latest trends, exciting offers and everything to Be-Cool!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <InputGroup
                bg={"gray.100"}
                border={0}
                borderRadius={7}
                fontSize={"xl"}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              >
                <InputLeftAddon border={0} fontSize={"xl"} children="+91" />
                <Input
                  type="number"
                  border={0}
                  fontSize={"xl"}
                  placeholder="Enter Phone Number"
                />
              </InputGroup>
              <Button
                w={"full"}
                fontFamily={"heading"}
                mt={8}
                mx={"center"}
                justifyContent={"center"}
                alignItems={"center"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                fontSize={"xl"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Submit
              </Button>
              <Flex
                align={"center"}
                _before={{
                  borderRadius: 5,
                  content: '""',
                  borderBottom: "3px solid",
                  borderColor: useColorModeValue("lightcoral"),
                  flexGrow: 1,
                  mr: 8,
                  my: 10,
                }}
                _after={{
                  borderRadius: 5,
                  content: '""',
                  borderBottom: "3px solid",
                  borderColor: useColorModeValue("lightcoral"),
                  flexGrow: 1,
                  my: 10,
                  ml: 8,
                }}
              >
                <Heading size={"md"} color={"gray"}>
                  OR
                </Heading>
              </Flex>
              <Button

                  fontSize={"xl"}
                  leftIcon={<EmailIcon />} 
                  w={"full"}
                  color={"gray.500"}
                  colorScheme="gray"
                >
                    <Link to={"/signup"}>
                  {"   "}   CONTINUE    TO    SIGN-UP
                    </Link>
                </Button>
              <HStack>
                <Button
                  fontSize={"xl"}
                  w={"full"}
                  color={"gray.500"}
                  colorScheme="gray"
                  leftIcon={
                    <Image
                      w={4}
                      src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                      alt="google icon"
                    ></Image>
                  }
                >
                  Google
                </Button>
                <Button
                  fontSize={"xl"}
                  w={"full"}
                  color={"gray.500"}
                  colorScheme="gray"
                  leftIcon={
                    <Image
                      w={4}
                      src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                      alt="google icon"
                    ></Image>
                  }
                >
                  Facebook
                </Button>
              </HStack>
            </Stack>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}

