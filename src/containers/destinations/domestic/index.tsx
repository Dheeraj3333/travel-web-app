import Wrapper from "@/components/Wrapper/Wrapper";
import { allDestinations } from "@/mock/data";
import DestinationSection from "../DestinationSection";
import AboutLocation from "@/containers/packageLocation/AboutLocation";

const a = "Welcome to Bharat Booking Holidays, your one stop gateway to unforgettable adventures across the diverse landscapes of India. As a premier travel agency, we specialize in offering a wide range of meticulously crafted India Tour Packages that cater to every traveler's preferences and budgets. Whether you're seeking a family vacation, a romantic honeymoon, a thrilling group tour, or a soulful pilgrimage, we have the perfect itinerary waiting for you. At Bharat Booking Holidays, we understand that India is a land of myriad experiences, from the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, from the bustling streets of Delhi to the tranquil backwaters of Kerala. That's why our team of expert travel planners has curated an extensive collection of holiday packages in India, ensuring that every traveler can find their ideal destination and itinerary. For families seeking a fun-filled retreat, we offer a range of family packages that include exciting activities and attractions suitable for all ages. From thrilling theme park adventures to cultural heritage tours, we have something for everyone. Couples looking to celebrate their love can choose from our enchanting honeymoon trips, which take you to some of the most romantic destinations in India. Whether it's a serene beach getaway in the Andaman Islands or a cozy hill station retreat in Himachal Pradesh, our honeymoon packages are designed to create memories that last a lifetime. For those embarking on a spiritual journey, our pilgrimage tours offer the opportunity to visit some of India's most sacred sites and temples. Whether you're seeking blessings at the holy shrines of Varanasi, embarking on the Char Dham Yatra, or on Spiritual Prayagraj and Ayodhya tour, our pilgrimage tour packages cater to the spiritual needs of every traveler. In addition to our specialized packages, we also offer group tours for those who prefer to travel with friends or like-minded travelers. Our group tours are a great way to explore India's diverse culture, cuisine, and landscapes while making new friends along the way. At Bharat Booking Holidays, we believe in making travel accessible to everyone, which is why we offer affordable holiday packages that provide exceptional value for money. With our competitive prices and flexible payment options, you can embark on your dream vacation without breaking the bank. So why wait? Book your India tour package with Bharat Booking Holidays today and embark on the adventure of a lifetime. Whether you're looking to explore the iconic landmarks of Delhi, sample the delicious street food of Mumbai, or witness the majestic beauty of the Taj Mahal, explore the royal Rajasthan with Pink City Jaipur, we have the perfect itinerary waiting for you. Let us be your guide as you explore the best holiday destinations in India and create memories that will last a lifetime.";
const DomesticDestinations = () => {
  return (
    <section className="my-12 max-md:my-8">
      <Wrapper>
        <h2 className="text-5xl max-md:text-3xl text-center font-bold text-thisOrange">
          <span className="font-light text-gray-600">Holiday</span> DESTINATION In India
        </h2>
        <AboutLocation para={a} />

        {/* domestic destination section */}
        <DestinationSection destinations={allDestinations.filter((destinations)=>destinations.isDomestic)} />
      </Wrapper>
    </section>
  );
};

export default DomesticDestinations;
