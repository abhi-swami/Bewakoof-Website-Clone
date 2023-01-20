import { Image, Grid, GridItem, Box, Heading } from "@chakra-ui/react";

export default function ToHotToMiss() {
  const designeOfWeek = [
    {
      id: 1,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/revamped-banner-MID-SIZE-B1G1-02-1673359273.jpg",
      alt: "img1",
    },
    {
      id: 2,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/fullsleeves-tshirts-midsize-banner-1674050707.jpg",
      alt: "img2",
    },
    {
      id: 3,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-winterwear-common-Pastels-01-1673253851.jpg",
      alt: "img3",
    },
    {
      id: 4,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-printedsweatshoodsj-offer-1673631219.jpg",
      alt: "img4",
    },
  ];
  return (
    <Box>
        <Heading textAlign={"center"} size={"md"} fontWeight={"700"} m={5}>TO HOT TO MISS</Heading>
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
