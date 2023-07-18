

import {
  Box,
  Button,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { LinkContext } from "../../Context/LinkContext";
import {NAV_ITEMS} from "../../Utils/data.js"
import DesktopSubNav from "./DesktopSubNav.jsx"

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("lightcoral");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { inputLink } = useContext(LinkContext);
  const navigate = useNavigate();

  const handleNavButton = (name, address, navitem) => {
    inputLink(name);
    navigate(address);
    console.log(navitem);
  };

  return (
    <Stack direction={"row"} ml={10} spacing={-3}>
      {NAV_ITEMS?.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Button
                onClick={() =>
                  handleNavButton(navItem.label, navItem.href, navItem)
                }
                variant="link"
                m={4}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Button>
            </PopoverTrigger>

            {navItem?.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={3}
                rounded={"xl"}
                minW={"200%"}
              >
                <Grid templateColumns="repeat(4, 1fr)" gap={3}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Grid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav