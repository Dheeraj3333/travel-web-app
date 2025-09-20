import HeadingPara from "@/components/HeadingPara";
import HeroSection from "@/components/Hero";
import Wrapper from "@/components/Wrapper/Wrapper";
import MileStones from "@/containers/homepage/MileStones";
import LeftSwiper from "@/containers/homepage/WhyChooseUs/LeftSwiper";
import RightSwiper from "@/containers/homepage/WhyChooseUs/RightSwiper";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <Wrapper className="my-8">
        <HeadingPara
          heading="Why Choose Us"
          para="We treat our customers as our guests, which makes us stand out as a travel company. We believe in competing with our own selves while striving to achieve perfection each and every time."
        />
      </Wrapper>
      <Wrapper className="my-8">
      <div className="wcu-swipers flex gap-12 max-md:flex-col">
          <div className="left w-1/2 max-md:w-full">
            <LeftSwiper />
          </div>
          <div className="right w-1/2 max-md:w-full max-md:aspect-video">
            <RightSwiper />
          </div>
        </div>
      </Wrapper>
      <MileStones />
    </>
  );
};

export default page;
