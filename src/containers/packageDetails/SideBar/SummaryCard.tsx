"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "next/navigation";
import { IPackageDetails } from "@/types";
import { useEffect, useState } from "react";

export default function SummaryCard({
  packageDetails,
}: {
  packageDetails: IPackageDetails | undefined;
}) {
  const [tourType, setTourType] = useState<string>("");

  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const pathArray = path.split("/");
    const currentTourType = pathArray[pathArray.length - 1];
    setTourType(currentTourType);
    console.log(pathArray);
    console.log(currentTourType);
  }, []);

  function changeRoute(newEndPoint: string) {
    const splitUrl = path.split("/");
    splitUrl[splitUrl.length - 1] = newEndPoint;
    const newPath = splitUrl.join("/");

    router.push(newPath);
  }

  return (
    <div className="border border-gray-400 rounded-2xl overflow-hidden">
      <div className="summary-content p-4">
        <h5 className="uppercase text-[15px] pb-4 mb-4 border-b-2 border-b-gray-400 border-dashed font-semibold">
          Booking Summary
        </h5>
        <p className="flex flex-col gap-0 leading-0">
          <span className="text-[16px]">Basic Price</span>
          <span className="text-xl text-thisBlue font-bold mt-3">{`₹ ${packageDetails?.price.toLocaleString()}`}</span>
          <span className="text-[10px]">per person</span>
        </p>

        <Label className="mt-5">Tour Type</Label>
        <Select
          value={tourType.toUpperCase()}
          onValueChange={(value) => {
            changeRoute(value.toLowerCase());
            setTourType(value.toLowerCase());
          }}
        >
          <SelectTrigger className="border-2 cursor-pointer border-thisBlue rounded w-full mt-2 font-semibold text-thisBlue text-[15px]">
            <SelectValue placeholder="Select a Tour Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {["Deluxe", "Super-deluxe", "Luxury"].map((type, idx) => (
                <SelectItem
                  className="cursor-pointer capitalize"
                  key={idx}
                  value={type.toUpperCase()}
                >
                  {type.toUpperCase()}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* btn will show a drawer in future versions */}
      <div className="submit-btn bg-thisBlue p-4">
        <button className="w-full py-3 text-white text-[14px] font-semibold text-center cursor-pointer bg-thisOrange rounded-[10px]">
          Submit Query
        </button>
      </div>
    </div>
  );
}
