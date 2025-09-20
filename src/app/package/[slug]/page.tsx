import PackageLocation from "@/containers/packageLocation";
import { FilterProvider } from "@/context/FilterContext";
// import PackageProvider from "@/context/PackageProvider";
import { packages } from "@/mock/data";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}
export default async function page({ params }: PageProps) {
  const { slug } = await params;

  return (
    <FilterProvider>
      <PackageLocation pagelocation={slug} />
    </FilterProvider>
  );
}
