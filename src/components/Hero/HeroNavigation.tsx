"use client";
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bus,
  Car,
  CarFront,
  Hotel,
  LucideIcon,
  Plane,
  Sailboat,
  TramFront,
  TreePalm,
} from "lucide-react";
import TrainForm from "./TrainForm";
import BusForm from "./CarRentalForm";
import FlightForm from "./FlightForm";
import HelicopterForm from "./HeliForm";
import DomesticHolidayForm from "./DomesticHolidayForm";
import HotelForm from "./HotelForm";
import LuxuryHolidayForm from "./LuxuryHolidayForm";
import InternationalHolidayForm from "./InternationalHolidayForm";
import { usePathname } from "next/navigation";

interface ITabs {
  icon: LucideIcon;
  name: string;
  isLinked?:boolean
  contentFunction: () => React.ReactNode;
}

const tabs: ITabs[] = [
  // {
  //   icon: Plane,
  //   name: "flight",
  //   contentFunction: FlightForm,
  //   isLinked:false,
  // },
  {
    icon: Hotel,
    name: "hotel",
    isLinked:false,
    contentFunction: HotelForm,
  },
  {
    icon: CarFront,
    name: "car-rentals",
    isLinked:true,
    contentFunction: BusForm,
  },
  {
    icon: TreePalm,
    name: "domestic-Holidays",
    isLinked:false,
    contentFunction: DomesticHolidayForm,
  },
  // {
  //   icon: Plane,
  //   isLinked:false,
  //   name: "heli-rides",
  //   contentFunction: HelicopterForm,
  // },
  // {
  //   icon: Sailboat,
  //   name: "luxury-holidays",
  //   isLinked:false,
  //   contentFunction: LuxuryHolidayForm,
  // },
  {
    icon: Sailboat,
    name: "internation-holidays",
    contentFunction: InternationalHolidayForm,
  },
  // {
  //   icon: TramFront,
  //   name: "train",
  //   contentFunction: TrainForm,
  // },
];

const HeroNavigation = () => {
  const pathName = usePathname();
  console.log(pathName)
  let defaultTab =
    tabs.find((tab) => tab.name == pathName.slice(1))?.name ?? "hotel";

  const lgTablistCss =
    " max-lg:max-w-[450px] max-lg:overflow-auto max-lg:justify-start";
  const mdTablistCss = " max-md:max-w-[300px] ";
  const mdTabsTrigger = " max-md:px-3 gap-2 py-2 text-[12px]";

  return (
    <div className="max-w-[1100px] mx-auto rounded-2xl relative z-1 shadow-2xl">
      <Tabs defaultValue={defaultTab} className="gap-0">
        <TabsList
          className={`-translate-y-[50%] max-w-[900px] w-full h-auto mx-auto rounded shadow gap-0.5  ${lgTablistCss} ${mdTablistCss}`}
        >
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;

            return (
              <TabsTrigger
                key={idx}
                className={` cursor-pointer min-w-fit flex-col gap-4 py-4 h-auto ${mdTabsTrigger} `}
                value={tab.name}
              >
                {Icon && (
                  <span>
                    <Icon className="scale-150 max-md:scale-100 font-light" />
                  </span>
                )}

                <span className="capitalize">{tab.name}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {tabs.map((tab, idx) => {
          return (
            <TabsContent className="px-4" key={idx} value={tab.name}>
              {tab.contentFunction()}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default HeroNavigation;
