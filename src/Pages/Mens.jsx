import MensBreadCrubs from "./MensUniversal/00.M.BreadCrub";
import MensSlider from "./MensUniversal/01.M.Slider1";
import MensCompanyBanner from "./MensUniversal/02.M.CompanyBanner";
import MensFeatured from "./MensUniversal/03.M.FeaturedDetails";
import MensTrendingCategory from "./MensUniversal/04.M.TrendingCategory";
import MensToHotToBeMissed from "./MensUniversal/06.M.ToHotToMiss";
import MensBestOfBeCool from "./MensUniversal/07.M.BestOfBeCool";
import MensFeedBackImg from "./MensUniversal/08.M.FeedBackImg";
import MenstOurBestPicks from "./MensUniversal/09.M.OurBestPicks";
import MensTribe from "./MensUniversal/10.M.Tribe";

export default function Mens() {
  return (
    <div>
      <MensBreadCrubs/>
      <MensSlider />
      <MensCompanyBanner />
      <MensFeatured />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MensTrendingCategory />
      <MensToHotToBeMissed />
      <MensBestOfBeCool />
      <MensFeedBackImg />
      <MenstOurBestPicks />
      <MensTribe />
    </div>
  );
}
