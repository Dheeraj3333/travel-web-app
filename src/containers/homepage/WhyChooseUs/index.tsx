"use client";

import Wrapper from "@/components/Wrapper/Wrapper";
import Link from "next/link";

import LeftSwiper from "./LeftSwiper";
import RightSwiper from "./RightSwiper";
import HeadingPara from "@/components/HeadingPara";

const WhyChooseUs = () => {
  const leftStyle = {
    background: "url(https://www.bharatbooking.com/webroot/images/luxary.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <section className="bg-white py-4 pb-12">
      <Wrapper>
        <div className={`top flex pb-8 max-md:pb-2`}>
          <div style={leftStyle} className={`left w-1/2 p-2 max-lg:hidden`}></div>
          <div className={`right w-1/2 p-2 max-md:p-0 max-lg:w-full `}>
            <h4 className="text-3xl text-center max-md:text-start">
              Luxury <span className="text-thisOrange font-bold">Packages</span>{" "}
              <br />
              <span className="text-[#333] text-6xl leading-20 font-semibold block mt-4 max-md:mt-2 max-md:text-3xl max-md:leading-10">
                Booking a luxury just a click away
              </span>
            </h4>

            <Link
              className="bg-thisBlue rounded-[5px] px-4 py-2 text-white block w-fit mx-auto max-md:mx-[0] mt-8 max-md:mt-4"
              href={"/luxury-holidays"}
            >
              Book Now
            </Link>
          </div>
        </div>

        
        <HeadingPara heading="Why Choose Us" para="We treat our customers as our guests, which makes us stand out as a
            travel company. We believe in competing with our own selves while
            striving to achieve perfection each and every time." />

        <div className="wcu-swipers flex gap-12 max-md:flex-col">
          <div className="left w-1/2 max-md:w-full">
            <LeftSwiper />
          </div>
          <div className="right w-1/2 max-md:w-full max-md:aspect-video">
            <RightSwiper />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default WhyChooseUs;
