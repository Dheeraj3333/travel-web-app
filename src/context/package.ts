'use client'
import { packages as initialPackages } from "@/mock/data";
import { IPackage } from "@/types";
import { createContext, ReactNode, useState } from "react";

interface IPackageContext {
  packages: IPackage[];
  setPackages: React.Dispatch<React.SetStateAction<IPackage[]>>;
}

const PackageContext = createContext<IPackageContext>({
  packages: [],
  setPackages: () => {},
});

export default PackageContext;
