import { NavLink } from "react-router-dom";
import { Flex,useColorModeValue } from "@chakra-ui/react";
import CompanyBanner from "./Home/01.CompanyBanner";
import Slider1 from "./Home/02.Slider1"
import FeaturedDetails from "./Home/03.FeaturedDetails";
import Designes from "./Home/04.Designes";
import Popular from "./Home/05.Popular";
import ToHotToMiss from "./Home/07.ToHotToMiss";
import CategoriesToBag from "./Home/08.CategoriesToBag";
import Silder2 from "./Home/09.Slider2"
import FeedBackImg from "./Home/10.FeedBackImg";
import TopAccessories from "./Home/11.TopAccessories";
import OurBestPics from "./Home/12.OurBestPics";
import Tribe from "./Home/13.Tribe";

const links = [
  { to: "/mens", text: "MENS" },
  { to: "/womens", text: "WOMENS" },
  { to: "/winterwears", text: "WINTER WEAR" },
  { to: "/accessories", text: "ACCESSORIES" },
];
export default function Home() {
  return (
    <div>
      <Flex
        justifyContent="center"
        gap={9}
        gridTemplateRows={"repeate(3,1fr)"}
        // templateRows={"repeate(3,1fr)"}
        space={3}
        bg={useColorModeValue("gray.200", "gray.700")}
        fontSize={"lg"}
      >
        {links.map((el) => (
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? { color: "lightcoral", textDecoration: "underline" }
                : { color: "black" };
            }}
            key={el.to}
            to={el.to}
          >
            {el.text}
          </NavLink>
        ))}
      </Flex>
      <Slider1/>
      <CompanyBanner />
      <FeaturedDetails />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Designes />
      <Popular />
      <ToHotToMiss />
      <CategoriesToBag />
      <Silder2/>
      <FeedBackImg />
      <TopAccessories />
      <OurBestPics />
      <Tribe />
    </div>
  );
}
