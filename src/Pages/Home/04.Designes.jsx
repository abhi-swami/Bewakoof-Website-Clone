import { Image, Grid, GridItem, Text, Box,Heading } from "@chakra-ui/react";

export default function Designes() {
  const designeOfWeek = [
    {
      id: 1,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-men-1674030025.jpg",
      alt: "img1",
    },
    {
      id: 2,

      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women-1674030025.jpg",
      alt: "img2",
    },
  ];
  return (
    <Box>
      <Heading textAlign={"center"} size={"md"} fontWeight={"700"}  mt={5}>DESIGNS OF THE WEEK</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={0} w="100%" >
        {designeOfWeek.map((el) => (
          <GridItem key={el.id} w="100%" _hover={{ cursor: "pointer" }}>
            <Image src={el.imgSrc} alt={el.title} w={"100%"} />
            <Text
              fontSize="12px"
              textAlign={"center"}
              fontWeight={"600"}
              mt={3}
            >
              {el.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
