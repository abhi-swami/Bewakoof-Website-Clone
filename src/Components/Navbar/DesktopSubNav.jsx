import { Flex, Text, Icon, Link, VStack, GridItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const DesktopSubNav = ({ label, subLabel }) => {
  return (
    <>
      <VStack>
        <GridItem>
          <Text transition={"all .3s ease"} fontWeight={500} p={4}>
            {label}
          </Text>
          {subLabel.map((el) => (
            <Text fontSize={"sm"} key={el.id} m={3}>
              <Link rounded={"md"} _hover={{ bg: "lightcoral" }}>
                {el.key}
              </Link>
            </Text>
          ))}
        </GridItem>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"space-between"}
          align={"center"}
          flex={1 / 2}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </VStack>
    </>
  );
};

export default DesktopSubNav;
