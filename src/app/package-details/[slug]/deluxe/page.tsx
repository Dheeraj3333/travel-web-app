import React from "react";
import PackageDetails from "@/containers/packageDetails";

interface PageProps {
  params: {
    slug: string;
  };
}
const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  console.log(slug)

  return <PackageDetails type={"deluxe"} packageName={slug} />;
};

export default page;
