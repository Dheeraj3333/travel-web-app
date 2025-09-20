import HeroSection from "@/components/Hero";
import HolidayDestinationsSection from "@/containers/homepage/Holiday_section";
import HolidayCategoriesSection from "@/containers/homepage/Holidays_Category";
import OffersSection from "@/containers/homepage/Offers";
import MeetSection from "@/containers/homepage/MeetLeaders&Cluster";
import WhyChooseUs from "@/containers/homepage/WhyChooseUs";
import MileStones from "@/containers/homepage/MileStones";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffersSection />
      <HolidayCategoriesSection />
      <HolidayDestinationsSection />
      <WhyChooseUs />
      <MeetSection />
      <MileStones />
    </>
  );
}
