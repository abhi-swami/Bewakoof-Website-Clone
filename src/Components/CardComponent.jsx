import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Text,
  HStack,
  Grid,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import {Link, useNavigate} from  "react-router-dom"
import { FavoriteContext } from "../Context/FavoriteContext";
import { LoginContext } from "../Context/LoginContext";


export default function CardComponent({
  actualPrice,
  discountPrice,
  image,
  rating,
  brand,
  title,
  id,
}) {
  const { isLoggedIn } = useContext(LoginContext);
  const {favCount, IncrementFavCount}=useContext(FavoriteContext)
  const handleheart = () => {
    IncrementFavCount()

  };

  let x = Math.ceil(discountPrice - (discountPrice * 8) / 100);
  return (
    <Grid alignItems="center" justifyContent="space-evenly" gap={9}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        minW="90%"
        gap={9}
        borderWidth="1px"
        shadow="lg"
        position="relative"
      >
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

        <HStack
          position="absolute"
          top={270}
          left={0}
          p={"1px"}
          pl={2}
          pr={1}
          bg={"rgb(189,189,189)"}
          color={"black"}
          fontSize={"10px"}
        >
          <Text fontSize={"12px"}>{rating}</Text>
          <Text fontSize={"10px"} color={"lightcoral"}>
            <i class="fa-solid fa-star"></i>
          </Text>
        </HStack>
        <Image src={image} alt={`Picture of ${title}`} />

        <Box p={2}>
          <Flex justifyContent={"space-between"}>
            <Text
              fontFamily={"montserrat,sans-serif"}
              fontSize={"14px"}
              fontWeight={600}
              color={"gray.600"}
            >
              {brand}
            </Text>
            <Link  to={isLoggedIn?null:"/login"}>
              <Button
                variant="ghost"
                color={"gray.400"}
                _hover={{ color: "lightcoral" }}
                mr={3}
                onClick={handleheart}
              >
                <i class="fa-solid fa-heart"></i>
                {/* {isLoggedIn?favCount===0?null:<Text>{favCount}</Text>:<Text>{favCount}</Text>} */}
              </Button>
            </Link>
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
              {title}
            </Box>
          </Flex>

          <HStack
            justifyContent="left"
            alignContent="flex-end"
            color={"gray.600"}
            fontSize="16px"
            fontWeight={"bold"}
          >
            <Text>₹ {discountPrice}</Text>
            <Text textDecor={"line-through"} pt={1} fontSize={"11px"}>
              ₹ {actualPrice}
            </Text>
          </HStack>
          <Box d="flex" alignItems="baseline">
            <Badge rounded={1} px="2" fontSize="0.8em" colorScheme="gray">
              ₹ {x} for TriBe Members
            </Badge>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

;
