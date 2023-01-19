import { Image, Grid, GridItem, Box, Heading } from "@chakra-ui/react";

export default function ToAccessories() {
  const designeOfWeek = [
    {
      id: 1,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png",
      alt: "img1",
    },
    {
      id: 2,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-new-mugs-1673005212.jpg",
      alt: "img2",
    },
    {
      id: 3,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png",
      alt: "img3",
    },
    {
      id: 4,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg",
      alt: "img4",
    },
    {
      id: 5,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png",
      alt: "img5",
    },
    {
      id: 6,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png",
      alt: "img6",
    },
  ];
  return (
    <Box>
      <Heading textAlign={"center"} size={"md"} fontWeight={"700"} m={5}>
      TOP ACCESSORIES
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={3} w="100%" mt={5}>
        {designeOfWeek.map((el) => (
          <GridItem key={el.id} w="100%" _hover={{ cursor: "pointer" }}>
            <Image src={el.imgSrc} alt={el.alt} w={"100%"} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
