import { Image, Grid, GridItem, Text, Box } from "@chakra-ui/react";

export default function FeaturedDetails() {
  const collectionItems = [
    {
      id: 1,
      title: "Bestseller",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1671624963.jpg",
      alt: "img1",
    },
    {
      id: 2,
      title: "New Arrivals",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg",
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
        "https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg",
    },
    {
      id: 5,
      title: "Last Size Left",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
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
        "https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg",
    },
    {
      id: 8,
      title: "Coupan Offers",
      imgSrc:
        "https://images.bewakoof.com/uploads/grid/app/image-1668598708.png",
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
