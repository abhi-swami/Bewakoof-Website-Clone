import { Image, Grid, GridItem, Text, Box } from "@chakra-ui/react";

export default function FeaturedDetails() {
  const collectionItems = [
    {
      id: 1,
      title: "Designe of the week",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-Men-1673937704.gif",
      alt: "img1",
    },
    {
      id: 2,
      title: "Best Seller",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Bestseller-Men-1668491213.jpg",
    },
    {
      id: 3,
      title: "Hot Deals",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg",
    },
    {
      id: 4,
      title: "Official Collaborations",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Men-1668491214.jpg",
    },
    {
      id: 5,
      title: "Last Size Left",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-PlusSize-Men-1668491218.jpg",
    },
    {
      id: 6,
      title: "Plus Size",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg",
    },
    {
      id: 7,
      title: "Customization",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Customise-Men-1668491215.jpg",
    },
    {
      id: 8,
      title: "New Arrival",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Men-1668491217.jpg",
    },
  ];
  return (
    <Box>
      <Grid
        templateColumns="repeat(8, 1fr)"
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
        w="80%"
        m={"auto"}
      >
        {collectionItems.map((el) => (
          <GridItem key={el.id} w="100%" h="5vh" _hover={{ cursor: "pointer" }}>
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
