import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IPackageDetails } from "@/types";
import { Clock } from "lucide-react";


export default function ShowPackageBreakDown({
  packageDetails,
}: {
  packageDetails: IPackageDetails | undefined;
}) {
  return (
    <section className="py-4">
      <h3 className="text-4xl max-md:text-2xl underline font-bold text-thisBlue mb-4">
        Full Package Breakdown
      </h3>

      {/* Accordion Sections */}
      <div>
        <Accordion
          defaultValue={["0"]}
          type="multiple"
          className="w-full gap-4 flex flex-col"
        >
          {packageDetails?.tourPlans.map((plan, idx) => (
            <div key={idx} className=" rounded-md border border-gray-300 overflow-hidden">
              <AccordionItem value={idx + ""}>
                <AccordionTrigger className="p-4 text-left rounded-b-none font-medium bg-[#f3f3f3] text-gray-800 hover:text-thisBlue cursor-pointer hover:no-underline">
                  <div className="accrodion-trigger text-thisBlue flex flex-col">
                    <h4 className="text-xl font-semibold flex  items-center gap-2">
                      {" "}
                      <Clock size={20} />
                      {plan.planName}
                    </h4>
                    {plan.travel ? (
                      <span className="text-[11px] px-1">{`${plan.travelPath?.join(
                        " - "
                      )} (${plan.travelDistanceInKm}km / ${
                        plan.travelDurationInHr
                      }hrs)`}</span>
                    ) : (
                      <span className="text-[11px] px-1">{`SightSeeing`}</span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-4 transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  {
                    <div className="space-y-3">
                      <p>{plan.planDescription}</p>
                      {plan.features?.[0].length && (
                        <div>
                          {plan.features?.length == 1
                            ? plan.features[0] + " Only"
                            : plan.features.length == 2
                            ? plan.features?.join(" & ")
                            : plan.features?.join(", ")}
                        </div>
                      )}
                    </div>
                  }
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}