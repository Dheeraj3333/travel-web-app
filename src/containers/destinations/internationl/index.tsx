import Wrapper from "@/components/Wrapper/Wrapper";
import { allDestinations } from "@/mock/data";
import DestinationSection from "../DestinationSection";
import AboutLocation from "@/containers/packageLocation/AboutLocation";

const a =
  "Welcome to Our Booking Holidays Service, your ultimate solution for unforgettable international adventures. As a leading travel agency, we specialize in offering a diverse range of meticulously crafted International Tour Packages that cater to every traveler's preferences and budgets. Explore International Holiday Destinations at affordable prices. Dreaming of escaping to exotic locales, immersing you in vibrant cultures, and creating memories that last a lifetime? Look no further than Bharat Booking Holidays, your one-stop shop for crafting extraordinary international travel experiences. Whether you're seeking adventure-packed family vacations, romantic honeymoon getaways for couple, enriching group tours, or soul-stirring pilgrimage journeys, we offer a diverse range of international tour packages that cater to every traveler's desire. Discover hidden gems and familiar favourites, our meticulously curated itineraries whisk you away to some of the world's most captivating destinations, spanning across continents and catering to a variety of interests.Explore the bustling metropolises of Singapore and Hong Kong, marvel at the architectural wonders of Japan and China, soak up the sun on the pristine beaches of Bali and Phuket, or delve into the rich history and cultural tapestry of Thailand, Cambodia, and Vietnam. Venture beyond the beaten path to uncover the hidden gems of Bhutan, Nepal, and Myanmar, or embark on a spiritual pilgrimage to sacred sites in Sri Lanka and Turkey. Check out our tailored packages for every need at Bharat Booking Holidays. we understand that every traveler is unique. That's why we offer a comprehensive selection of international tour packages for families, group tours, honeymoon trips, couple tours, and pilgrimage tours. Our family packages are designed to entertain and engage children of all ages, while our group tours provide a fun and social way to explore new destinations with like-minded individuals. For couples seeking a romantic escape, our honeymoon trips and couple tours offer the perfect blend of intimacy and exploration. And for those seeking spiritual solace, our pilgrimage tours cater to diverse faiths and traditions. Unbeatable value and personalized service, at Bharat booking holiday we believe that everyone deserves to experience the joy of international travel. That's why we offer affordable packages that fit a range of budgets, without compromising on quality or comfort. Our team of travel experts is passionate about creating personalized itineraries that cater to your specific interests and preferences. We handle all the logistics, from visa assistance and flight bookings to accommodation and sightseeing arrangements, ensuring a seamless and stress-free travel experience. With Bharat Booking Holidays, you're not just booking a vacation; you're investing in memories that will last a lifetime. From exploring ancient temples in Angkor Wat to trekking through the breathtaking Himalayas, from indulging in the vibrant street food of Bangkok to cruising down the canals of Venice, we offer experiences that will ignite your senses and leave you yearning for more. Start your journey today to our extensive selection of international tour packages and discover the perfect adventure for you. We have the perfect itinerary waiting for you. Let us be your guide as you explore the best international destinations and create memories that will last a lifetime. Find best holiday packages outside the India from Bangalore, Kolkata, Chennai, Delhi, Ahmadabad, Kerala, Kochi, and from many other famous places. Contact our friendly travel advisors today to discuss your travel dreams and start planning your unforgettable international escape.";
const InternationalDestinations = () => {
  return (
    <section className="my-12 max-md:my-8">
      <Wrapper>
        <h2 className="text-5xl max-md:text-3xl text-center font-bold text-thisOrange">
          International {" "}
          <span className="font-light text-gray-600"> Holiday</span> DESTINATION
        </h2>
        <AboutLocation para={a} />

        {/* domestic destination section */}
        <DestinationSection
          destinations={allDestinations.filter(
            (destinations) => destinations.isInternational
          )}
        />
      </Wrapper>
    </section>
  );
};

export default InternationalDestinations;
