import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const slidesData = [
  {
    source:
      "https://www.bharatbooking.com/admin/img/uploads/slider/RomanticGetawaysBaliHoneymoonPackages.webp",
    link: "/",
  },
  {
    source:
      "https://www.bharatbooking.com/admin/img/uploads/slider/1746685630_351869-bb-simply-heaven-banner.webp",
    link: "/",
  },
];

const Carousel = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      className="custom-swiper py-8"
    >
      {slidesData.map((slide, idx) => {
        return (
          <SwiperSlide>
            <Slide source={slide.source} link={slide.link} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;

interface ISlide {
  source: string;
  link: string;
}

function Slide({ source, link }: ISlide) {
  return (
    <Link href={link} className="w-full block relative aspect-[3/1] max-md:aspect-[4/2] ">
      <Image
        fill
        className="w-auto h-auto object-cover max-md:object-fill"
        src={source}
        alt="slide-image"
      />
    </Link>
  );
}
