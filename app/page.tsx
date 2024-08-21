import ExploreCategoriesSection from "@/components/explore-categories-section";
import HeadSection from "@/components/head-section";
import Navbar from "@/components/navbar";
import RecentReviews from "@/components/recent-reviews";
import ShopSmarter from "@/components/shop-smarter-section";
import StoriesSection from "@/components/stories-section";
import TransparencyReport from "@/components/transparency-report-section";
// import { Feed } from "@/screens/feed";


export default function Home() {
  return (
    <main>
          <Navbar/>
          <HeadSection/>
          <ExploreCategoriesSection/>
          <RecentReviews/>
          <ShopSmarter/>
          <TransparencyReport/>
          <StoriesSection/>    
    </main>
  );
}
