import Wrapper from "@/components/Wrapper/Wrapper";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeatureHotelData = [
  {
    name: "Manali Valley Resort",
    rating: 4,
    location: " Near Green Tax Barrier, Manali, Distt. Kullu, (H.P.) INDIA",
    price: 4_000,
  },
  {
    name: "Hotel Kullu Manali Inn",
    rating: 3,
    location: " Gadherni Rd, Manali, Himachal Pradesh 175131",
    price: 3_000,
  },
  {
    name: "Naina resort & Temple",
    rating: 4,
    location: " Near Green Tax Barrier, Manali, Distt. Kullu, (H.P.) INDIA",
    price: 3_000,
  },
];

const FeatureHotel = () => {
  return (
    <section className="my-12">
      <Wrapper>

<h2 className=" mb-8  text-5xl max-sm:text-2xl text-center">Hotel@<span className="text-thisOrange font-bold">Features</span></h2>

        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-8">
          {FeatureHotelData.map((hotel, idx) => {
            return (
              <div key={idx} className="flex max-sm:flex-col gap-2 w-full bg-[#fff5f5] shadow rounded overflow-hidden" >
                <div className="image w-[220px] max-sm:w-full aspect-[4/3] max-sm:aspect-[2/1] relative">
                  <Image
                    src={
                      "https://www.bharatbooking.com/admin/webroot/img/uploads/hotel/thumbnail/1631095378_452592-Manali-Valley-(26).jpg"
                    }
                    alt={`${hotel.name} image`}
                    fill
                    className="object-center object-cover"
                  />
                </div>
                <div className="info p-4 flex flex-col gap-2">
                  <span className="text-xl font-bold capitalize">
                    {hotel.name}
                  </span>
                  <ul className=" capitalize flex gap-[4px]">
                    {Array.from({ length: hotel.rating }).map((Number, idx) => {
                      return (
                        <li key={idx}>
                          <Star color="yellow" size={20} />
                        </li>
                      );
                    })}
                  </ul>
                  <span> <MapPin size={20} color="black"/> {hotel.location}</span>
                  <span>₹ {hotel.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default FeatureHotel;
