import { IPackageDetails } from "@/types";

export default function DetailsHead({
  packageDetails,
}: {
  packageDetails: IPackageDetails | undefined;
}) {
  return (
    <div className="head mb-4 flex justify-between border-b pb-2 max-lg:flex-wrap gap-8">
      {/* left side - package name and tour content */}
      <div className="left flex flex-col gap-4 w-[100%]">
        <div className="flex items-end gap-3 max-sm:flex-wrap max-sm:gap-4">
          <h2 className="text-4xl font-bold">{packageDetails?.packageName}</h2>
          <span className="block text-[15px]">{`${packageDetails?.duration.nights} Nights  ${packageDetails?.duration.days} Days`}</span>
        </div>
        <div className="max-w-[100%] max-sm:overflow-x-auto max-sm:shadow py-2 ">
          <ul className="flex text-[13px] text-gray-700 w-fit  text-nowrap">
          {packageDetails?.dayWiseLocationMap.map((map, idx) => {
            return (
              <li className="flex gap-1" key={idx}>
                <span className="block ml-1 capitalize">{`${map.location} ( ${map.noOfDays} Day )`}</span>
                <span
                  className={`text-gray-500 space-x-2 block ${
                    idx === packageDetails.dayWiseLocationMap.length - 1
                      ? "hidden"
                      : ""
                  }`}
                >
                  {" ----> "}
                </span>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
      {/* right side - price and customize btn */}
      <div className="right flex gap-6 max-lg:justify-between max-lg:w-full text-nowrap">
        <div className="price flex flex-col items-end max-md:items-start">
          <span className="text-thisOrange font-semibold uppercase text-[14px]">
            Super Deal Price
          </span>
          <span className="uppercase text-[10px] text-gray-500">
            Starts From
          </span>
          <span className="uppercase font-bold text-thisBlue text-2xl">{`₹${packageDetails?.price.toLocaleString()}`}</span>
          <span className="text-[10px] text-gray-500">per person</span>
        </div>
        <button className="bg-thisOrange h-full text-white rounded text-nowrap w-fit p-4 px-6 font-semibold cursor-pointer text-[13px] text-center">
          {" "}
          Customized <br /> Tour Package{" "}
        </button>
      </div>
    </div>
  );
}
