import React from "react";
import { BusFront, CarFront, Hotel, LucideIcon, Utensils } from "lucide-react";
import { IPackageDetails } from "@/types";
import SummaryCard from "./SummaryCard";


const features = [
  {
    name: "meals",
    icon: Utensils,
  },
  {
    name: "Transfer",
    icon: CarFront,
  },
  {
    name: "SightSeeing",
    icon: BusFront,
  },
  {
    name: "Hotel",
    icon: Hotel,
  },
];

const SideBarForMorePackages = ({
  packageDetails,
}: {
  packageDetails: IPackageDetails | undefined;
}) => {
  return (
    <aside className="min-w-[300px] h-screen bg-[#fff] rounded-2xl">
      <div className="px-2 max-lg:flex max-sm:flex-col gap-6">
        <div className="max-lg:w-1/2 max-sm:w-full">
          <h4 className="text-thisBlue font-bold text-[16px] mb-3">
            Tour Includes
          </h4>
          <ul className="tour-includes flex gap-6 mb-8 w-fit">
            {features.map((feature, idx) => {
              const Icon = feature.icon as LucideIcon;
              return (
                <li
                  key={idx}
                  className="bg-[#f3f3f3] relative rounded-full min-w-[40px] min-h-[40px] shadow flex items-center justify-center"
                >
                  <Icon className="stroke-thisBlue" size={20} />
                  <span className="text-center text-[10px] text-black w-fit left-1/2 -translate-x-1/2 absolute -bottom-5 capitalize">
                    {feature.name}
                  </span>
                </li>
              );
            })}
          </ul>

          <SummaryCard packageDetails={packageDetails} />
        </div>

        <div className="border border-gray-400 rounded-2xl overflow-hidden p-4 mt-5 max-lg:w-1/2 max-sm:w-full h-fit">
          <h5 className="text-black font-bold pb-2 border-b ">
            Feel Free to call us
          </h5>
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-[14px] flex flex-col">
              <b className="font-bold">Toll Free No :</b>
              <span>1800-532-3636, 1800-212-0136</span>
            </p>
            <p className="text-[14px] flex flex-col">
              <b className="font-bold">24/7 Service :</b>
              <span>+91 9816348636, +91 88263-03636</span>
            </p>
            <p className="text-[14px] flex flex-col">
              <b className="font-bold">Mail Us :</b>
              <span>help@bharatbooking.com</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBarForMorePackages;


