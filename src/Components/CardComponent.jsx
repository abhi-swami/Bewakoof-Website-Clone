import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";

const data = {
  isNew: true,
  imageURL:
    "https://images.bewakoof.com/t640/men-s-black-uchiha-s-nightmare-oversized-fit-t-shirt-564910-1671802425-1.jpg",
  name: "Men's Black Deathnote Ryuk Graphic Printed Oversized T-shirt",
  price: 499,
  actualPrice: 1499,
  rating: 4.2,
  numReviews: 34,
};

function ProductAddToCart() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Text
            position="absolute"
            top={0}
            left={0}
            p={"3px"}
            bg={"rgb(113,113,113)"}
            color={"white"}
            fontSize={"10px"}
          >
            OVERSIZE FIT
          </Text>
        )}
        <HStack
          position="absolute"
          top={440}
          left={0}
          p={"1px"}
          pl={2}
          pr={1}
          bg={"rgb(189,189,189)"}
          color={"black"}
          fontSize={"10px"}
        >
          <Text fontSize={"12px"}>{data.rating}</Text>
          <Text fontSize={"10px"} color={"lightcoral"}>
            <i class="fa-solid fa-star"></i>
          </Text>
        </HStack>
        <Image src={data.imageURL} alt={`Picture of ${data.name}`} />

        <Box p={2}>
          <Flex justifyContent={"space-between"}>
            <Text
              fontFamily={"montserrat,sans-serif"}
              fontSize={"14px"}
              fontWeight={600}
              color={"gray.600"}
            >
              BeCool
            </Text>
            <Text color={"gray.400"} _hover={{color:"lightcoral"}} mr={3}>
            <i class="fa-solid fa-heart"></i>
            </Text>
          </Flex>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xs"
              fontWeight="semibold"
              as="h5"
              color={"gray.400"}
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
          </Flex>

          <HStack
            justifyContent="left"
            alignContent="flex-end"
            color={"gray.600"}
            fontSize="16px"
            fontWeight={"bold"}
          >
            <Text>₹ {data.price}</Text>
            <Text textDecor={"line-through"} pt={1} fontSize={"11px"}>
              ₹{data.actualPrice}
            </Text>
          </HStack>
          <Box d="flex" alignItems="baseline">
            <Badge rounded={1} px="2" fontSize="0.8em" colorScheme="gray">
              ₹ 409 for TriBe Members
            </Badge>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
