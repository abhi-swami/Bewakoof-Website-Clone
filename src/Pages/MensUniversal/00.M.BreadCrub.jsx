import {
  Box,
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export default function MensBreadCrubs() {
  return (
    <>
      <Box>
        <HStack
          templateColumns="repeat(8, 1fr)"
          gap={1}
          justifyContent={"left"}
          alignItems={"left"}
          w="80%"
          ml={10}
          mt={10}
        >
          <Breadcrumb fontSize={"md"} fontWeight={"medium"}>
            <BreadcrumbItem>
              <BreadcrumbLink _hover={{ textDecoration: "none", color:"lightcoral"}} href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink  _hover={{ textDecoration: "none"}}  href="/mens">Mens</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </HStack>
      </Box>
    </>
  );
}
