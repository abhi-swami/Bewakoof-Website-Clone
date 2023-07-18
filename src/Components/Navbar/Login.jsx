import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Logout from "./Logout.jsx";
import { LoginContext } from "../../Context/LoginContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <>
      {isLoggedIn ? (
        <Logout />
      ) : (
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"gray.600"}
          _hover={{
            bg: "lightcoral",
            textDecor: "none",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default Login;
