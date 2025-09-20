"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useDebounce } from "@/hooks/useDebounce";
import { useFilter } from "@/hooks/useFilter";
import { useEffect, useState } from "react";

interface IPriceRange {
  priceRange: {
    minPrice: number | null;
    maxPrice: number | null;
  };
}

export default function PriceSlider({ priceRange }: IPriceRange) {
  const { filter, setFilter } = useFilter();

  const [localPrice, setLocalPrice] = useState<[number, number]>([
    priceRange?.minPrice || 5000,
    priceRange?.maxPrice || 20000,
  ]);

  const debouncedPriceValue = useDebounce(localPrice, 500);

  // update filter.price with debounced value
  useEffect(() => {
    if (
      localPrice[0] == filter.price?.minPrice &&
      localPrice[1] == filter.price?.maxPrice
    ) {
      return;
    }

    setFilter((prev) => ({
      ...prev,
      price: {
        minPrice: debouncedPriceValue[0],
        maxPrice: debouncedPriceValue[1],
      },
    }));
  }, [debouncedPriceValue, setFilter]);

  // sync localPrice to filter.price when context updates
  useEffect(() => {
    setLocalPrice([
      filter.price?.minPrice || 5000,
      filter.price?.maxPrice || 20000,
    ]);
  }, [filter.price]);

  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>{(localPrice[0] || 5000).toLocaleString()}</span>
        <span>{(localPrice[1] || 20000).toLocaleString()}</span>
      </div>
      <Slider
        value={[localPrice[0] || 5000, localPrice[1] || 20000]}
        onValueChange={(values) => {
          setLocalPrice(values as [number, number]);
        }}
        max={priceRange?.maxPrice || undefined}
        min={priceRange?.minPrice || undefined}
        step={10}
        className="w-full"
      />
      <Button
        variant="link"
        className="text-blue-600 hover:text-blue-800 p-0 h-auto text-sm"
        onClick={() => setFilter((prev) => ({ ...prev, price: null }))}
      >
        Show All
      </Button>
    </div>
  );
}
