

import CompanyBanner from "./Home/01.CompanyBanner";
import FeaturedDetails from "./Home/03.FeaturedDetails";
import Designes from "./Home/04.Designes";
import Popular from "./Home/05.Popular";
import ToHotToMiss from "./Home/07.ToHotToMiss"
import CategoriesToBag from "./Home/08.CategoriesToBag"
import FeedBackImg from "./Home/10.FeedBackImg";
import TopAccessories from "./Home/11.TopAccessories";
import OurBestPics from "./Home/12.OurBestPics"
import Tribe from "./Home/13.Tribe";

export default function Home() {
  return (
    <div>
        <CompanyBanner/>
        <FeaturedDetails/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Designes/>
        <Popular/>
        <ToHotToMiss/>
        <CategoriesToBag/>
        <FeedBackImg/>
        <TopAccessories/>
        <OurBestPics/>
        <Tribe/>
        
    </div>
  );
}
