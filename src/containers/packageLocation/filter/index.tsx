"use client";

import { useState } from "react";
import { ChevronDown, Currency, Star } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import PriceSlider from "./PriceSlider";
import DurationFilter from "./DurationFilter";
import RatingFilter from "./RatingFilter";
import ResetButton from "./ResetButton";

interface IFilter {
  durations:
    | {
        nights: number;
        days: number;
      }[]
    | undefined;
  ratings: number[] | undefined;
  priceRange: { minPrice: number; maxPrice: number } | undefined;
}

export default function Filter({ durations, priceRange, ratings }: IFilter) {
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isDurationOpen, setIsDurationOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);

  return (
    <div className="w-full bg-gray-50 min-[850px]:border border-gray-200 shadow rounded">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Filter Results</h3>
        <ResetButton />
      </div>

      <div className="flex flex-col max-[850px]:flex-row max-[850px]:flex-wrap max-[850px]:gap-2 max-sm:gap-0">
        {/* Price Filter */}
        <Collapsible
          open={isPriceOpen}
          onOpenChange={setIsPriceOpen}
          className="grow bg-white min-w-[200px]"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-100 transition-colors">
            <span className="font-medium text-gray-700">Price</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                isPriceOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4">
            <PriceSlider
              priceRange={priceRange || { minPrice: null, maxPrice: null }}
            />
          </CollapsibleContent>
        </Collapsible>

        {/* Duration Filter */}
        <Collapsible
          open={isDurationOpen}
          onOpenChange={setIsDurationOpen}
          className="grow bg-white min-w-[200px]"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-100 transition-colors border-t border-gray-200">
            <span className="font-medium text-gray-700">Duration</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                isDurationOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4">
            <DurationFilter durations={durations} />
          </CollapsibleContent>
        </Collapsible>

        {/* Star Rating Filter */}
        <Collapsible
          open={isRatingOpen}
          onOpenChange={setIsRatingOpen}
          className="grow bg-white min-w-[200px]"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-100 transition-colors border-t border-gray-200">
            <span className="font-medium text-gray-700">Star Rating</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                isRatingOpen ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pb-4">
            <RatingFilter ratings={ratings} />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

export const RenderStars = ({
  count,
  fill = "fill-thisOrange text-thisOrange",
}: {
  count: number;
  fill?: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? fill : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};
