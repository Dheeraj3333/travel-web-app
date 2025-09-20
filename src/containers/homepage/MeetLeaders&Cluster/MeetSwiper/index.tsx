import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PersonalityCard from "../PersonalityCard";


// make it dynamic as wekk as per the personality card with info of Dedicated clusters
export default function MeetSwiper() {
  return (
    <div className="relative mt-12">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          prevEl: ".meet-swiper-prev-btn",
          nextEl: ".meet-swiper-next-btn",
        }}
        loop
        className="meet-swiper w-full"
      >
        <SwiperSlide className="w-full">
          <PersonalityCard />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <PersonalityCard />
        </SwiperSlide>
      </Swiper>

      <div className="btns-holder flex gap-[2px] w-fit justify-between items-center bg-white shadow-[0_0_5px_#01010138] rounded absolute right-0 -top-6 -translate-y-full">
        <button className="meet-swiper-prev-btn w-[35px] h-[35px]  flex items-center justify-center cursor-pointer">
          <ChevronLeft size={25} />
        </button>
        <button className="meet-swiper-next-btn w-[35px] h-[35px]  flex items-center justify-center cursor-pointer">
          <ChevronRight size={25} />
        </button>
      </div>
    </div>
  );
}
