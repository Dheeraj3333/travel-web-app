"use client";
import Wrapper from "@/components/Wrapper/Wrapper";
import React, { useEffect, useState } from "react";
import AboutLocation from "./AboutLocation";
import Filter from "./filter";
import PackagesHolder from "./packgesHolder";
import { allDestinations, packages } from "@/mock/data";
import { IDestination, IPackage } from "@/types";
import { useFilter } from "@/hooks/useFilter";


interface IPageLocation {
  pagelocation: string;
}

export default function PackageLocation({ pagelocation }: IPageLocation) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentDestination, setCurrentDestination] = useState<
    IDestination | undefined
  >(undefined);
  const [currentPackages, setCurrentPackages] = useState<
    IPackage[] | undefined
  >(undefined);

  // read filter
  const { filter } = useFilter();

  // helper function filtersCurrentDestination
  function filtersCurrentDestination() {
    return allDestinations.find(
      (destination) =>
        destination.name.toLowerCase() === pagelocation.toLowerCase()
    );
  }


  // helper function filterByRating
  function filterByRating(data: IPackage[] | []): IPackage[] {
    if (!filter.rating) {
      return data;
    }
    return data.filter((pkg) => pkg.package.rating === filter.rating);
  }

  // helper function filterByPriceRange
  function filterByPriceRange(data: IPackage[] | []): IPackage[] {
    return data.filter((pkg) => {
      if (
        pkg.package.price >= (filter.price?.minPrice || 5000) &&
        pkg.package.price <= (filter.price?.maxPrice || 20000)
      ) {
        return pkg;
      }
    });
  }

  // helper function filterByDuration
  function filterByDuration(data: IPackage[] | []) {
    if (filter.durations?.length == 0) {
      return data;
    }

    const filteredData = data.filter((pkg) => {
      return (
        filter.durations?.some(
          (d) =>
            d.days === pkg.package.numberOfDays &&
            d.nights === pkg.package.numberOfNights
        ) ?? false
      );
    });

    return filteredData;
  }

  // checks data for current Destination and loads data like-wise
  useEffect(() => {
    function anonymous() {
      const destination = filtersCurrentDestination();
      if (destination?.name) {
        setIsLoading(false);
        setCurrentDestination(destination);
      } else {
        setIsLoading(false);
        setError("data not found");
      }
    }
    anonymous();
  }, []);

  // filter package data as per filter changes
  useEffect(() => {
    const retrivedPackagesFromCurrentDestination =
      currentDestination?.packages || [];

    setCurrentPackages(
      filterByDuration(
        filterByPriceRange(
          filterByRating(retrivedPackagesFromCurrentDestination)
        )
      )
    );
  }, [filter]);

  // loading state
  if (isLoading) {
    return (
      <Wrapper className="my-12">
        <div className="h-screen animate-pulse bg-[#3333334d] backdrop-blur-2xl"></div>
      </Wrapper>
    );
  }

  // not found error
  if (error) {
    return (
      <Wrapper className="my-12">
        <div className="h-screen bg-[#333] flex items-center justify-center">
          <span className="text-6xl max-md:text-2xl font-bold text-center text-white">
            No Data for {pagelocation}
          </span>
        </div>
      </Wrapper>
    );
  }

  return (
    <section className="my-12">
      <Wrapper>
        <h2 className="text-thisBlue text-4xl max-md:text-6xl max-md:text-left max-sm:text-[14vw] uppercase font-bold text-center">
          {currentDestination?.name}
        </h2>

        <AboutLocation para={currentDestination?.description} />

        <div className="main flex gap-6 mt-8 relative max-[850px]:flex-col">
          <div className="filter min-[850px]:max-w-[250px] w-full h-fit lg:sticky top-0">
            <Filter
              durations={currentDestination?.durations}
              ratings={currentDestination?.ratings}
              priceRange={currentDestination?.priceRange}
            />
          </div>
          <div className="packages-container rounded w-full ">
            <PackagesHolder currentPackages={currentPackages} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
