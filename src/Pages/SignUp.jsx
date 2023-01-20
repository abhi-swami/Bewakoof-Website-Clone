import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Image,
  InputGroup,
  FormControl,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"8xl"}
        // border="1px solid yellow"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 20 }}
        bgGradient="linear(orange.100,yellow.200)"
      >
        <Stack direction={"column"} spacing={4} align={"center"}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Image
              w={"70%"}
              m={"auto"}
              src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"
              alt="signup"
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
              SignUp
            </Heading>
            <Text
              textAlign={"center"}
              color={"gray.500"}
              fontSize={{ base: "sm", sm: "md" }}
            >
              Hi new buddy, SignUp here to make you cool !
            </Text>
          </Stack>

          <Box color={"gray.800"} as={"form"} mt={10}>
            <Stack spacing={4}>
              <Box rounded={"lg"} color={"gray.700"} boxShadow={"xl"} p={8}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel color={"gray.500"} fontSize={"lg"}>
                          First Name
                        </FormLabel>
                        <Input
                          focusBorderColor="lightcoral"
                          bg={"gray.100"}
                          type="text"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel color={"gray.500"} fontSize={"lg"}>
                          Last Name
                        </FormLabel>
                        <Input
                          focusBorderColor="lightcoral"
                          bg={"gray.100"}
                          type="text"
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="email" isRequired>
                    <FormLabel color={"gray.500"} fontSize={"lg"}>
                      Email address
                    </FormLabel>
                    <Input
                      focusBorderColor="lightcoral"
                      bg={"gray.100"}
                      type="email"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel color={"gray.500"} fontSize={"lg"}>
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Input
                        focusBorderColor="lightcoral"
                        bg={"gray.100"}
                        type={showPassword ? "text" : "password"}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
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
                      Sign Up
                    </Button>
                  </Stack>
                  <HStack justifyContent={"center"} alignItems={"center"} fontSize={"lg"}>
                    <Text align={"center"}>
                      Already a user? 
                    </Text>
                    <Link to={"/login"}> <Text color={"lightcoral"}>Login </Text> </Link>
                  </HStack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
