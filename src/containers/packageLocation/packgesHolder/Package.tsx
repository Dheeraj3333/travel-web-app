import Image from "next/image";
import { RenderStars } from "../filter";
import {
  BusFront,
  CarFront,
  Hotel,
  LucideIcon,
  Utensils,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IPackage } from "@/types";
import ViewDetailsCard from "./ViewDetailsCard";

export default function Package({packageData}:{packageData:IPackage}) {
  return (
    <div className="flex max-lg:flex-col md:gap-4 border-[1px] border-thisBlue rounded overflow-hidden shadow">
      {/* image */}
      <div className="image-holder relative w-full max-w-[400px] max-lg:aspect-video max-lg:max-w-full ">
        <Image
          fill
          src={
            packageData.package.image ?? "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package/thumbnail/1708155678_520867-ooty-tour-packages-from-chennai-with-mysore-package-image---Copy.webp"
          }
          alt="package-image"
          className="object-cover"
        />
      </div>

      <div className="flex gap-4 max-lg:pl-4 max-md:px-2 max-md:py-4 max-md:flex-wrap">
        {/* details */}
        <div className="package-content min-w-[250px] max-lg:min-w-1/2 max-[1200px]:min-w-[200px] md:py-2">
          <h5 className="name font-semibold">
            {packageData.package.name ?? "Chikmagalur Package With Shimoga"}
          </h5>

          {/* stay and rating */}
          <div className="day-night-count my-1 ">
            <div className="flex flex-wrap gap-4 gap-y-2 items-center text-[14px]">
              <span className="shadow rounded border-[0.5px] bg-[#fefefe] p-1 text-nowrap ">
                {packageData.package.numberOfNights ?? 3} Night / {packageData.package.numberOfDays ?? 4} Days
              </span>
              <span className="">
                <RenderStars count={packageData.package.rating ?? 4} fill={"fill-thisOrange text-thisOrange"} />
              </span>
            </div>
            <span className="text-thisOrange">1D Chikmagalur, 3D Shimoga,</span>
          </div>

          {/* features */}
          <div className="flex gap-2 mt-3">
            {[
              { name: "meals", icon: Utensils },
              { name: "bus", icon: BusFront },
              { name: "Sightseeing", icon: CarFront },
              { name: "Hotel", icon: Hotel },
            ].map((feature, idx) => {
              const Icon = feature.icon as LucideIcon;

              return (
                <Tooltip delayDuration={300} key={idx}>
                  <TooltipTrigger asChild>
                    <span className="p-2 rounded bg-thisBlue shadow border w-fit">
                      <Icon className="text-white " />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>{feature.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>

        {/* actions */}
        <ViewDetailsCard packageData={packageData} />
        
      </div>
    </div>
  );
}
