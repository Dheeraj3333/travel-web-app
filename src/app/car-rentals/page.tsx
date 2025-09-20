import HeadingPara from "@/components/HeadingPara";
import HeroSection from "@/components/Hero";
import Wrapper from "@/components/Wrapper/Wrapper";
import CarRentalForm from "@/containers/carRental/Form";
import MileStones from "@/containers/homepage/MileStones";
import LeftSwiper from "@/containers/homepage/WhyChooseUs/LeftSwiper";
import RightSwiper from "@/containers/homepage/WhyChooseUs/RightSwiper";
import Image from "next/image";
import React from "react";

const swiperImages=[
  // "https://www.bharatbooking.com/webroot/images/coupon1.png",
  // "https://www.bharatbooking.com/webroot/images/coupon3.png",
  "/rental-car-1.jpg",
  "/rental-car-2.webp"
]

const page = () => {
  return (
    <>
      <HeroSection classname={"hidden"} />
      <Wrapper className="my-8">
        <CarRentalForm />
      </Wrapper>
      <Wrapper className="my-8">

        <HeadingPara
          heading="Cars Renting Offers And Deals"
          para="Special Flight Offers,Great Discounts Available. Easy and Convenient Flight Bookings With 24/7 Customer Support. Book Now."
        />

      <div className="wcu-swipers flex gap-12 max-md:flex-col">
          <div className="left relative aspect-video w-1/2 max-md:w-full">
            <Image fill objectFit="fill" src={"https://www.bharatbooking.com/webroot/images/coupon2.png"} alt="cheap plane poster" />
          </div>
          <div className="right w-1/2 max-md:w-full max-md:aspect-video">
            <RightSwiper slideArray={swiperImages} />
          </div>
        </div>
      </Wrapper>
      <MileStones />
    </>
  );
};

export default page;




