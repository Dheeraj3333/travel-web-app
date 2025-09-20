"use client";
import React, { useEffect } from "react";
import Package from "./Package";
import { IPackage } from "@/types";

interface ICurrentPackages {
  currentPackages: IPackage[] | undefined;
}

export default function PackagesHolder({
  currentPackages,
}: ICurrentPackages) {

  if (currentPackages?.length === 0) {
    return (
      <div className="h-full w-full backdrop-blur-2xl bg-thisBlue/30 flex items-center justify-center">
        <span className="text-thisOrange font-bold text-6xl max-md:text-2xl">
          OOPS! No Packages found.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      {currentPackages?.map((pkg, idx) => {
        return <Package key={idx} packageData={pkg} />;
      })}
    </div>
  );
}
