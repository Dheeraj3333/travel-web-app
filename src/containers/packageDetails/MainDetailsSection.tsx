import { AllPackagesDetails } from "@/mock/data";
import Image from "next/image";
import ShowPackageBreakDown from "./ShowPackageBreakDown";
import ShowPackageInformation from "./ShowPackageInformation";
import AboutLocation from "../packageLocation/AboutLocation";

export default function MainDetailsSection({
  packageName,
}: {
  packageName: string;
}) {
  const packageDetails = AllPackagesDetails.find(
    (pkg) =>
      pkg.packageName.toLowerCase() ===
      packageName.replaceAll("-", " ").toLowerCase()
  );
  console.log(packageDetails);

  return (
    <div className="w-full mx-auto bg-white">
      {/* Header Image */}
      <section className="w-full aspect-4/2 relative overflow-hidden rounded-2xl">
        <Image
          src={
            packageDetails?.images?.[0] ??
            "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1707726230_505343-gujarat-tour-package-from-ahmadabad-slider.webp"
          }
          alt="Ancient heritage temple complex with traditional architecture in desert landscape"
          fill
          className="object-cover object-center"
          priority
        />
      </section>

      {/* Main Content */}
        <ShowPackageBreakDown packageDetails={packageDetails} />

        {/* package Information Section */}
        <ShowPackageInformation packageDetails={packageDetails} />

        {/* package descriptions */}
        <section className="py-4">
          <h4 className="text-base font-semibold mb-4 text-gray-800">
            Package Description
          </h4>

          <AboutLocation para={packageDetails?.description}/>

        </section>
      </div>
  );
}
