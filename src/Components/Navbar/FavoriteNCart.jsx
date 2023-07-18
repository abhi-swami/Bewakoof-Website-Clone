import React from "react";
import { Circle, Text, IconButton, Button, Icon } from "@chakra-ui/react";

import { useContext } from "react";

import { LoginContext } from "../../Context/LoginContext";
import { FavoriteContext } from "../../Context/FavoriteContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { FaHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

const FavoriteNCart = () => {
  const { isLoggedIn } = useContext(LoginContext);
  const { favCount } = useContext(FavoriteContext);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleHeart = () => {
    if (isLoggedIn && favCount) {
      navigate("/login");
    }
  };
  return (
    <>
      <IconButton
        fontSize={"lg"}
        variant="link"
        _hover={{
          bg: "lightcoral",
        }}
        color={isLoggedIn ? (favCount === 0 ? "gray.400" : "yellow.400") : null}
        onClick={handleHeart}
        icon={<FaHeart />}
      />

      <Button
        fontSize={"lg"}
        spacing={-5}
        variant="link"
        _hover={{
          bg: "lightcoral",
        }}
      >
        <Icon
          as={BsCart3}
          color="currentColor"
          w={5}
          h={5}
          onClick={() => navigate("/cart")}
        />
        {isLoggedIn ? (
          cartCount === 0 ? null : (
            <Circle size="40px" w={"14px"} h={"14px"} bg="tomato" color="white">
              <Text as={"span"} fontSize={"10px"} color={"white"}>
                {cartCount}
              </Text>
            </Circle>
          )
        ) : null}
      </Button>
    </>
  );
};

export default FavoriteNCart;
