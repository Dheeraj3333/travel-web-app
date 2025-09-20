import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IPackageDetails } from "@/types";


export default function ShowPackageInformation({
  packageDetails,
}: {
  packageDetails: IPackageDetails | undefined;
}) {
  return (
    <section className="py-4">
      <h3 className="text-base font-semibold mb-4 text-gray-800">
        Package Information
      </h3>

      <div className="shadow rounded-2xl bg-[#f3f3f3]">
        <div className="p-4">
          <Tabs
            defaultValue={packageDetails?.packageInformations[0].name.replaceAll(
              " ",
              "-"
            )}
            className="w-full"
          >
            <TabsList className="flex gap-2 mb-4 h-auto w-fit">
              {packageDetails?.packageInformations.map((information, idx) => (
                <TabsTrigger
                  key={idx}
                  value={information.name.replaceAll(" ", "-")}
                  className="text-xs cursor-pointer py-2 px-12 max-md:px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white capitalize"
                >
                  {information.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* tabs content */}
            {packageDetails?.packageInformations.map((information, idx) => {
              return (
                  <TabsContent key={idx}
                    value={information.name.replaceAll(" ", "-")}
                    className="mt-4"
                  >
                    <div className="space-y-2">
                      {information?.info.map((data, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-600 leading-relaxed flex items-start"
                        >
                          <span
                            className={`${
                              information.name.toLowerCase() == "exclusions"
                                ? "text-red-500"
                                : "text-blue-600"
                            }  mr-2`}
                          >
                            •
                          </span>
                          <span>{data}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
            
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
