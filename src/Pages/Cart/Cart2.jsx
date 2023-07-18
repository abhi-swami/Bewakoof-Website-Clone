import {
  Badge,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  Table,
  Tbody,
  Td,
  Tr,
  TableContainer,
  FormControl,
  Select,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Address from "./Address";
import { useState, useEffect } from "react";

const url = `https://becool-project.onrender.com/cart`;
export default function Cart2() {
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const actualPrice = data?.reduce((acc, el) => {
    acc = acc + el?.actualPrice;
    return acc;
  }, 0);
  const discountPrice = data?.reduce((acc, el) => {
    acc = acc + el?.discountPrice;
    return acc;
  }, 0);

  const handleQunatity = (quantity) => {
    setQuantity(quantity);
  };
  const handleAddress = () => {
    onOpen();
  };

  const handldeRemove = async (id) => {
    setLoading(true);
    try {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      fetchData();
    } catch (err) {
      setLoading(false);
    }
  };

  const getData = async () => {
    try {
      const res = await fetch(`${url}`);
      const data1 = await res.json();
      // console.log(res)
      return {
        data1,
      };
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getData();
      const { data1 } = res;
      setData(data1);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  // console.log(data);
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      fetchData();
    }, 100);
    const cleanUp = () => {
      clearTimeout(id);
    };
    return cleanUp;
  }, []);
  return (
    <Flex
      mx={5}
      py={6}
      minH={"110vh"}
      gap={9}
      direction={"c"}
      position={"relative"}
    >
      <Grid templateColumns={"repeate(2,1fr)"} gap={3}>
        {loading ? (
          <Image
            ml={"300px"}
            src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
            alt={"loader imag"}
          ></Image>
        ) : (
          <>
            {data?.map(
              ({
                id,
                size,
                color,
                actualPrice,
                discountPrice,
                image,
                title,
                brand,
                rating,
              }) => (
                <Stack
                  borderWidth="1px"
                  borderRadius="lg"
                  w={{ sm: "100%", md: "80%" }}
                  maxH={{ sm: "476px", md: "15rem" }}
                  direction={{ base: "column", md: "row" }}
                  bgColor={"white"}
                  boxShadow={"xl"}
                  padding={4}
                >
                  <Flex bg="blue.200">
                    <Image objectFit="cover" boxSize="100%" src={image} />
                  </Flex>
                  <Stack
                    ml={9}
                    flexDirection="column"
                    // justifyContent="center"
                    alignItems="left"
                  >
                    <Heading fontSize={"sm"} fontFamily={"body"}>
                      {title}
                    </Heading>
                    <Text fontWeight={600} color={"gray.1000"} size="sm" mb={4}>
                      ₹{discountPrice}
                      <Text
                        as={"span"}
                        fontSize={"xs"}
                        textAlign={"center"}
                        textDecoration={"line-through"}
                        color={("gray.700", "gray.400")}
                        px={3}
                      >
                        ₹{actualPrice}
                      </Text>
                    </Text>
                    <Stack
                      align={"center"}
                      justify={"center"}
                      direction={"row"}
                      mt={6}
                    >
                      <Badge px={2} bgColor={"white"} fontSize={"sm"}>
                        <FormControl focusBorderColor={"lightcoral"}>
                          <Select
                            fontSize={"13px"}
                            focusBorderColor={"lightcoral"}
                            placeholder="Select Size"
                            onFocus={{ bgColor: "lightcoral" }}
                          >
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>Xl</option>
                            <option>2Xl</option>
                          </Select>
                        </FormControl>
                      </Badge>
                      <Badge
                        px={2}
                        py={1}
                        bg={"white"}
                        fontWeight={"400"}
                      ></Badge>
                      <Badge px={2} py={1} bgColor={"white"} fontWeight={"400"}>
                        <NumberInput
                          focusBorderColor="lightcoral"
                          defaultValue={1}
                          max={10}
                          min={1}
                          keepWithinRange={true}
                          clampValueOnBlur={true}
                          maxW="100px"
                          mr="2rem"
                          value={quantity}
                          onChange={handleQunatity}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Badge>
                    </Stack>
                    {isOpen && (
                      <Address
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                      />
                    )}
                    <Stack
                      width={"95%"}
                      mt={"2rem"}
                      gap={2}
                      direction={"row"}
                      padding={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Button
                        fontSize={"sm"}
                        color="white"
                        bgColor="yellow.400"
                        _focus={{
                          bg: "yellow.400",
                        }}
                        _hover={{
                          bgColor: "white",
                          color: "yellow.400",
                        }}
                        onClick={() => handldeRemove(id)}
                      >
                        Remove
                      </Button>
                      <Button
                        ml={6}
                        fontSize={"sm"}
                        bg={"lightcoral"}
                        color={"white"}
                        _hover={{
                          bgColor: "white",
                          color: "lightcoral",
                        }}
                        _focus={{
                          bg: "lightcoral",
                        }}
                      >
                        Add To Wish List
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              )
            )}
          </>
        )}
      </Grid>

      <Stack
        borderWidth="2px"
        borderRadius="lg"
        w={{ sm: "100%", md: "35%" }}
        minH={{ sm: "476px", md: "auto" }}
        direction={{ base: "column", md: "column" }}
        bgColor={"white"}
        boxShadow={"2xl"}
        padding={4}
        position={"-webkit-sticky"}
      >
        <Box pos={"sticky"} top={125}>
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
                Whistles! Get extra 10% Cashback upto 100 on prepaid orders
                above Rs.699. Coupon code - MAD10.
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
                      <Td>₹ {actualPrice}</Td>
                    </Tr>
                    <Tr>
                      <Td>Shipping Charges </Td>
                      <Td></Td>
                      <Td color={"green.500"}>FREE</Td>
                    </Tr>
                    <Tr>
                      <Td>Bag Discount </Td>
                      <Td></Td>
                      <Td>- ₹{actualPrice - discountPrice}</Td>
                    </Tr>
                    <Tr>
                      <Td>Subtotal</Td>
                      <Td></Td>
                      <Td>₹ {discountPrice}</Td>
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
                bgColor="yellow.400"
              >
                You are Saving ₹{actualPrice - discountPrice} on this order
              </Button>
              <Button
                // w={"100%"}
                mt={3}
                fontSize={"sm"}
                rounded={"full"}
                bgColor="lightcoral"
              >
                Total ₹ {discountPrice}
              </Button>
            </Stack>
          </Flex>
          <Button
            mt={3}
            w={"85%"}
            ml={"30px"}
            fontSize={"lg"}
            bgColor="lightgreen"
            onClick={handleAddress}
          >
            Continue
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
}
