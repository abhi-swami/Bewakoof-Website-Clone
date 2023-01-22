import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Cart2() {
  return (
    <Flex mx={5} py={6} minH={"110vh"} gap={9}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "65%" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bgColor={"white"}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Lindsey James
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            @lindsey_jam3s
          </Text>
          <Text textAlign={"center"} color={("gray.700", "gray.400")} px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or
            <Link href={"#"} color={"blue.400"}>
              #tag
            </Link>
            me in your posts
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #music
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        borderWidth="2px"
        borderRadius="lg"
        w={{ sm: "100%", md: "35%" }}
        height={{ sm: "476px", md: "auto" }}
        direction={{ base: "column", md: "column" }}
        bgColor={"white"}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Box
            w={"90%"}
            borderRadius="lg"
            fontSize={"sm"}
            my={1}
            borderWidth="2px"
            boxShadow={"xl"}
            p={2}
          >
            <Text fontSize={"sm"}>Save extra ₹280 with TriBe</Text>
          </Box>
          <Box
            w={"90%"}
            borderRadius="lg"
            fontSize={"sm"}
            my={1}
            borderWidth="2px"
            boxShadow={"xl"}
            p={3}
          >
            <Text fontSize={"sm"}>
              Whistles! Get extra 10% Cashback upto 100 on prepaid orders above
              Rs.699. Coupon code - MAD10.
            </Text>
          </Box>
          <Box
            w={"90%"}
            borderRadius="lg"
            fontSize={"sm"}
            my={1}
            borderWidth="2px"
            boxShadow={"xl"}
            p={3}
          >
            <Text fontSize={"sm"}></Text>
            Get Rs.200 instant discount on your First Purchase above Rs.999.
            Coupon code -NEW200
          </Box>
          <Box
            w={"90%"}
            borderRadius="lg"
            fontSize={"sm"}
            my={1}
            borderWidth="2px"
            boxShadow={"xl"}
            p={3}
          >
            Get Rs.200 instant discount on your First Purchase above Rs.999.
            Coupon code -NEW200
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
        >
          <Box
            w={"90%"}
            borderRadius="lg"
            fontSize={"md"}
            my={1}
            borderWidth="2px"
            boxShadow={"xl"}
            color="darkcyan"
            bgColor={"lightcyan"}
            p={1}
          >
            Have a Coupon / Referral / Gift Card ?
          </Box>
          <Box border={"2px solid darkgray"} mt={3}>
            <Box
              w={"100%"}
              fontSize={"md"}
              my={0}
              borderWidth="2px"
              bgColor={"gray.200"}
              fontWeight={"bold"}
            >
              <Text ml={5}>PRICE SUMMARY</Text>
            </Box>
            <TableContainer>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>Total MRP (Incl. of taxes)</Td>
                    <Td></Td>
                    <Td>₹ 6396</Td>
                  </Tr>
                  <Tr>
                    <Td>Shipping Charges </Td>
                    <Td></Td>
                    <Td color={"green.500"}>FREE</Td>
                  </Tr>
                  <Tr>
                    <Td>Bag Discount </Td>
                    <Td></Td>
                    <Td>- ₹3000</Td>
                  </Tr>
                  <Tr>
                    <Td>Subtotal</Td>
                    <Td></Td>
                    <Td>₹ 3396</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Stack
            align={"center"}
            justify={"center"}
            direction={"row"}
            mt={6}
          ></Stack>

          <Stack
            width={"100%"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bgColor="lightgreen"
            >
              You are Saving ₹280 on this order
            </Button>
          </Stack>
          <Button
            w={"100%"}
            mt={3}
            fontSize={"sm"}
            rounded={"full"}
            bgColor="lightcoral"
          >
            Total ₹ 3396
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
