"use client"
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";


const verticalScrollContent = [
  {
    bg: "#7aa843",
    heading: "Easy Tour Booking",
    para: "We believe in providing hassle free and convenient tour booking options to our guests. Tour booking can be done through our different portals which include our Toll Free number including a 24x7 phone number, can book through our App and website, and can e-mail us directly to get a prompt reply.",
  },
  {
    bg: "#ff931e",
    heading: "Customizable Tour Packages",
    para: "We understand our guests needs to perfection and thus provide them with flexible customized holiday packages according to their needs are requirements. We give proper alternatives with accurate guidance, to make our guests as comfortable as possible.",
  },
  {
    bg: "#213f98",
    heading: "Experienced Travel Consultants",
    para: "Our travel consultants carry years of experience in the travel industry and consists of travel enthusiasts who themselves are travel buffs. We are responsible for guiding our guests from the word go till the trip is complete. We pride ourselves in the in-depth destination knowledge we possess and apply while designing a holiday package.",
  },
  {
    bg: "#7aa843",
    heading: "24/7 Assistance for Guests",
    para: "We are available 27/7 for our guests any day of the week. With our highly trained operations team, we keep a look out for even the most minute of issues. We professionally handle all situations and make sure that our holiday packages provide the maximum satisfaction to our esteemed guests.",
  },
];

export default function LeftSwiper() {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={'auto'}
        freeMode={true}
        scrollbar={{draggable:true}}
        mousewheel={{releaseOnEdges:true}}
        touchReleaseOnEdges={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
      className="left-swiper w-full max-h-[380px] "
    >
      {verticalScrollContent.map((slide, idx) => {
        return (
          <SwiperSlide key={idx}>
            <div style={{ backgroundColor: `${slide.bg}` }} className={`p-4 text-white`}>
              <h5 className={`text-bold text-2xl mb-2`}>{slide.heading}</h5>
              <p>{slide.para}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
