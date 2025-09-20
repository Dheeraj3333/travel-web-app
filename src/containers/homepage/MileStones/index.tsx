import Wrapper from "@/components/Wrapper/Wrapper";
import Image from "next/image";
import React from "react";

const MileStones = () => {
  return (
    <section className="max-md:hidden mb-10 mt-6">
      <Wrapper>
        <div>
          <h3 className="text-4xl max-md:text-2xl text-center">
            We've served 1 million+ guests and we are here for you
          </h3>

          <div className="grid grid-cols-4 text-[14px] mt-6">
            <div className="border-r-[1px] border-black flex flex-col items-center px-6 py-4">
              <div className="icon aspect-[3/1] w-full relative h-[70px]">
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/winner.png"
                  }
                  fill
                  alt="award-image"
                  className="object-contain object-center"
                />
              </div>
              <span className="font-bold text-center">5 Lac + Customers </span>
              <span className="text-center">Happy customers across 5 Lac + experiences</span>
            </div>
            <div className="border-r-[1px] border-black flex flex-col items-center px-6 py-8">
              <div className="icon aspect-[3/1] w-full relative h-[70px]">
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/google.png"
                  }
                  fill
                  alt="award-image"
                  className="object-contain object-center"
                />
              </div>
              <span className="font-bold text-center">4.5/5 Google Reviews </span>
              <span className="text-center">6K+ verified reviews with 90% excellent score</span>
            </div>
            <div className="border-r-[1px] border-black flex flex-col items-center px-6 py-8">
              <div className="icon aspect-[3/1] w-full relative h-[70px]">
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/winner.png"
                  }
                  fill
                  alt="award-image"
                  className="object-contain object-center"
                />
              </div>
              <span className="font-bold text-center">5 Lac + Customers </span>
              <span className="text-center">Happy customers across 5 Lac + experiences</span>
            </div>
            <div className=" flex flex-col items-center px-6 py-8">
              <div className="icon aspect-[3/1] w-full relative h-[70px]">
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/winner.png"
                  }
                  fill
                  alt="award-image"
                  className="object-contain object-center"
                />
              </div>
              <span className="font-bold text-center">5 Lac + Customers </span>
              <span className="text-center">Happy customers across 5 Lac + experiences</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default MileStones;
