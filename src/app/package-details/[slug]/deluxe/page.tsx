import React from "react";
import PackageDetails from "@/containers/packageDetails";

export default function Page({ params }: any) {
  return <PackageDetails type="deluxe" packageName={params.slug} />;
}
