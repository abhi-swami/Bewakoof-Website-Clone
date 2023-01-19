import { Image, Grid, GridItem, Box, Heading } from "@chakra-ui/react";

export default function CategoriesToBag() {
  const designeOfWeek = [
    {
      id: 1,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png",
      alt: "img1",
    },
    {
      id: 2,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg",
      alt: "img2",
    },
    {
      id: 3,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg",
      alt: "img3",
    },
    {
      id: 4,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg",
      alt: "img4",
    },
    {
      id: 5,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg",
      alt: "img5",
    },
    {
      id: 6,
      imgSrc: "https://images.bewakoof.com/uploads/grid/app/category-box-Dress-1672907485.png",
      alt: "img6",
    },
  ];
  return (
    <Box>
      <Heading textAlign={"center"} size={"md"} fontWeight={"700"} m={5}>
        CATEGORIES TO BAG
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={1} w="100%" mt={5}>
        {designeOfWeek.map((el) => (
          <GridItem key={el.id} w="100%" _hover={{ cursor: "pointer" }}>
            <Image src={el.imgSrc} alt={el.alt} w={"100%"} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
