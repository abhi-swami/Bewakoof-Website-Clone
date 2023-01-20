import { Box, Image,Heading } from "@chakra-ui/react";

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
          <Box key={id} p={1} ml={"1rem"}>
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
    imgSrc: "https://images.bewakoof.com/uploads/grid/app/Refreshed-DOTW-1x1-banner-Homepage-men--1--1674030026.gif",
    alt: "img1",
  },
  {
    id: 2,
    imgSrc: "https://images.bewakoof.com/uploads/grid/app/ovrszd-tees-1x1-common1-1674129220.jpg",
    alt: "img2",
  },
  {
    id: 3,
    imgSrc: "https://images.bewakoof.com/uploads/grid/app/static-1x1-indo-men-1673685813.jpg",
    alt: "img3",
  },

];
const Slider = () => {
  return (
    <Box>
      <Box>
      <Heading textAlign={"center"} size={"md"} fontWeight={"700"} mt={5}>BEST OF BECOOL</Heading>
        
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        ></Box>
        <ProductsCard something={topSellingProducts} />
      </Box>
    </Box>
  );
};

export default Slider;
