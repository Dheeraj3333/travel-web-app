import { IDestination } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationCard = ({ destination }: { destination: IDestination }) => {
  return (
    <div
    //   key={destination.name}
      className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover hover:scale-120 transition-all duration-300 "
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-bold text-lg">{destination.name}</h3>
        <p className="text-gray-600 mt-2 line-clamp-2">
          {destination.description || "Explore this beautiful destination"}
        </p>
        <Link
          href={`package/${destination.name.toLowerCase()}`}
          className="mt-4 block w-fit bg-thisBlue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Package
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
