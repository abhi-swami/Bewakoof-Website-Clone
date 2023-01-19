import { Box, Link, Text, Image } from "@chakra-ui/react";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductsCard = ({ something, prodVal = 3 }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: prodVal,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Box bg="white" p="1rem">
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={300}
        itemClass="carousel-item-padding-40-px"
      >
        {something.map(({ id, imgSrc, alt }) => (
          <Box
            key={id}
            p={1}
            ml={"1rem"}
          >
            <Image _hover={{ cursor: "pointer" }} src={imgSrc} alt={alt} />
          </Box>
        ))}
      </Carousel>
    
    </Box>
  );
};

const topSellingProducts = [
  {
    id: 1,
    imgSrc:
      "https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-new1-1674029532.jpg",
    alt: "",
  },
  {
    id: 2,
    imgSrc:
      "https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1674035537.jpg",
    alt: "",
  },
  {
    id: 3,
    imgSrc:
      "https://images.bewakoof.com/uploads/grid/app/static-1x1-clearance-teesunder399-1674036686.jpg",
    alt: "",
  },
  {
    id: 4,
    imgSrc:
      "https://images.bewakoof.com/uploads/grid/app/winterwear-1x1-common-02-1674035538.jpg",
    alt: "",
  },
];
const Featured = () => {
  return (
    <Box>
      <Box mt="2rem" fontFamily="Aqleema- Regular, sans-serif">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"700"} fontSize={"22px"} marginTop={"10px"}>
            FEATURED
          </Text>
          <Link color={"darkmagenta"} textDecor={"none"}>
            VIEW ALL
          </Link>
          {/*</Link>*/}
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>
    </Box>
  );
};

export default Featured;
