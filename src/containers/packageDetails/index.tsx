import { AllPackagesDetails } from "@/mock/data";
import Wrapper from "@/components/Wrapper/Wrapper";
import DetailsHead from "./DetailsHead";
import MainDetailsSection from "./MainDetailsSection";
import SideBarForMorePackages from "./SideBar/SideBarForMorePackages";

export default function PackageDetails({
  packageName,
  type,
}: {
  packageName: string;
  type: string;
}) {
  const packageDetails = AllPackagesDetails.find(
    (pkg) =>
      pkg.packageName.toLowerCase() ===
        packageName.replaceAll("-", " ").toLowerCase() && pkg.tourtype === type
  );
  console.log(packageDetails);

  if(!packageDetails){
    return <div className="h-[90vh] max-md:h-fit py-12 flex bg-[#f3f3f3] justify-center items-center rounded">
      <h3 className="capitalize text-4xl max-md:text-2xl text-center font-bold text-thisBlue">No {type} category for {packageName}</h3>
    </div>
  }

  return (
    <main className=" my-6">
      <Wrapper className="">
        <DetailsHead packageDetails={packageDetails} />
        <div className="flex gap-6 max-lg:flex-col">
          <MainDetailsSection packageName={packageName} />
          <SideBarForMorePackages packageDetails={packageDetails} />
        </div>
      </Wrapper>
    </main>
  );
}
