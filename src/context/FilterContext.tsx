"use client";

import { FilterContextType, IFilter } from "@/types";
import { createContext, useState, ReactNode } from "react";



export const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Filter context Provider
export function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<IFilter>({
    price: { minPrice: null, maxPrice: null },
    durations: [],
    rating: null,
  });

  const resetFilters = () => {
    // console.log(filter)

    setFilter({
      price: { minPrice: 5000, maxPrice: 20000 },
      durations: [],
      rating: null,
    });
  };

  return (
    <FilterContext.Provider value={{ filter, setFilter, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

