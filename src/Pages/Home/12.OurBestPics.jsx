import { Image, Grid, GridItem, Box, Heading } from "@chakra-ui/react";

export default function ToHotToMiss() {
  const designeOfWeek = [
    {
      id: 1,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-knitted-polo-tees-1671771476.jpg",
      alt: "img1",
    },
    {
      id: 2,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-BFtees-offer-1673631218.jpg",
      alt: "img2",
    },
    {
      id: 3,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg",
      alt: "img3",
    },
    {
      id: 4,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/windcheater-40-off-1673631221.jpg",
      alt: "img4",
    },
  ];
  return (
    <Box>
      <Heading textAlign={"center"} size={"md"} fontWeight={"700"} m={5}>
        OUR BEST PICKS
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={1} w="100%" mt={5}>
        {designeOfWeek.map((el) => (
          <GridItem key={el.id} w="100%" _hover={{ cursor: "pointer" }}>
            <Image src={el.imgSrc} alt={el.alt} w={"100%"} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
