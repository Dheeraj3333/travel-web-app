"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperData = [
  "https://www.bharatbooking.com/admin/img/uploads/slider/1737543989_244456-Founder-and-CEO-Bharat-Booking-Holidays.webp",
  "https://www.bharatbooking.com/admin/img/uploads/slider/1737545066_151661-accounts-team-of-bharat-booking.webp",
];

export default function RightSwiper({slideArray=swiperData}:{slideArray?:string[]}) {
  return (
    <div className="right-swiper-holder relative h-full">
      <Swiper
        spaceBetween={30}
        navigation={{
          prevEl: ".right-swiper-prev-btn",
          nextEl: ".right-swiper-next-btn",
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        className="left-swiper w-full h-full"
      >
        {slideArray.map((slide, idx) => {
          return (
            <SwiperSlide className="h-full block">
              <div className={`p-4 bg-red-500 h-full relative`}>
                <Image fill src={slide} alt={"slide-photo"} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* custom btns for swiper */}
      <button className="right-swiper-prev-btn w-10 h-10 rounded-full flex items-center justify-center absolute left-[0%] translate-x-[-50%] bg-thisBlue top-[50%] translate-y-[-50%] cursor-pointer z-1">
        <ChevronLeft size={20} color="white" />{" "}
      </button>
      <button className="right-swiper-next-btn w-10 h-10 rounded-full flex items-center justify-center absolute right-[0%] translate-x-[50%] bg-thisBlue top-[50%] translate-y-[-50%] cursor-pointer z-1">
        <ChevronRight size={20} color="white" />
      </button>
    </div>
  );
}
