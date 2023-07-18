import { Box, Heading, Image, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Cart1() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box my={20}>
        <Heading textAlign={"center"} my={6} size={"lg"} color={"lightcoral"}>
          Nothing In Your Cart
        </Heading>
        <Flex
          w={"50%"}
          my={20}
          border={"0px solid "}
          justifyContent="center"
          alignItems={"center"}
          direction="column"
          m="auto"
        >
          <Image
            my={12}
            h={"30vh"}
            objectFit={"contain"}
            src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
            alt="emptycart"
          ></Image>
          <Button
            color={"lightcoral"}
            variant="outline"
            _hover={{ bgColor: "lightcoral", color: "white" }}
            borderColor="lightcoral"
            size={"lg"}
            onClick={() => navigate("/")}
          ></Button>
        </Flex>
      </Box>
    </Box>
  );
}
