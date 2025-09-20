'use client'
import { IPackage } from "@/types";
import {packages as initialPackages} from '../mock/data'
import PackageContext from "./package";
import { ReactNode, useState } from "react";

 const PackageProvider = ({ children }: { children: ReactNode }) => {
  const [packages, setPackages] = useState<IPackage[]>(initialPackages);

  return (
    <PackageContext.Provider value={{ packages, setPackages }}>
      {children}
    </PackageContext.Provider>
  );
};

export default PackageProvider;