import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Box,

} from "@chakra-ui/react";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { LoginContext } from "../../Context/LoginContext.jsx";
export default function Logout() {
  const { inputLogout } = useContext(LoginContext);
  const navigate=useNavigate();
  const handleLogout = () => {
    inputLogout()
    navigate("/")
  };

  return (
    <Box mx={50}>
      <Menu maxW={"20%"}>
        <MenuButton>
          <Avatar
            size="sm"
            mt={1}
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />
        </MenuButton>
        <MenuList w={"10%"} mt={1} ml={-10}>
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
          </MenuGroup>
          <MenuGroup title="">
          
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
       
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}
