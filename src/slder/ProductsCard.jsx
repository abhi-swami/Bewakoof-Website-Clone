import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductsCard = ({ something, prodVal = 5 }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: prodVal,
      slidesToSlide: 3, // optional, default to 1.
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
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="300ms"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {something.map((e, i) => (
          <Box
            h={"100%"}
            p="0.5rem"
            key={i}
            textAlign="left"
            borderRadius="5px"
            ml={"1rem"}
            // _hover={{
            //   boxShadow:
            //     "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            // }}
            cursor="pointer"
            marginTop={"0px"}
          >
            <Image h={"204px"} w={"700px"} textAlign={"center"} justifyContent={"center"} src={e.img} />
            <Box>
              <Text fontSize={"15px"}>{e.name}</Text>
              <Text fontSize={"13px"}>{e.qty}</Text>
              <Text>
                MRP{" "}
                <span style={{ textDecoration: "line-through" }}>
                  ₹{e.strikePrice}
                </span>
                <span style={{ color: "green", marginLeft: "1rem" }}>
                  {e.discount}
                </span>
              </Text>
              <Text fontWeight={"600"}>₹ {e.price}</Text>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductsCard;
