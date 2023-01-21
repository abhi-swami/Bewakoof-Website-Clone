import { Image, Grid, GridItem, Box, Heading } from "@chakra-ui/react";

export default function Popular() {
  const designeOfWeek = [
    {
      id: 1,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-printed-tshirt-men-1672915214.png",
      alt: "img1",
    },
    {
      id: 2,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-1672915214.png",
      alt: "img2",
    },
    {
      id: 3,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png",
      alt: "img3",
    },
    {
      id: 4,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-1673010262.png",
      alt: "img4",
    },
    {
      id: 5,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-1672915210.png",
      alt: "img5",
    },
    {
      id: 6,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Full-Sleeve-Tshirt-1673010261.png",
      alt: "img6",
    },
    {
      id: 7,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-new-printed-tshirts-1668773246.jpg",
      alt: "img7",
    },
    {
      id: 8,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-women-1672915214.png",
      alt: "img8",
    },
  
    {
      id: 9,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-women-1673010262.png",
      alt: "img9",
    },

    {
      id: 10,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png",
      alt: "img10",
    },
    {
      id: 11,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-women-1672915218.png",
      alt: "img11",
    },
    {
      id: 12,
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/category-box-Boyfriend-Tshirt-women-1672915204.png",
      alt: "img12",
    },
  ];

  
  return (
    <Box>
        <Heading textAlign={"center"} size={"md"} fontWeight={"700"} mt={5}>TRENDING CATEGORIES</Heading>
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
