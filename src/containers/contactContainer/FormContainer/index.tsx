import Wrapper from "@/components/Wrapper/Wrapper";
import { Phone } from "lucide-react";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { BsChatFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { RiRedPacketFill } from "react-icons/ri";
import Form from "./Form";

const contactDetails = [
  {
    Icon: IoIosCall,
    category: "Package Enquiry 24*7 call",
    numbers: "+91 98163-48636 , +91 88263-03636",
  },
  {
    Icon: RiRedPacketFill,
    category: "Package services :",
    numbers: "+91 78320-63636 , +91 9218056636",
  },
  {
    Icon: FaBuilding,
    category: "Hotels Contact:",
    numbers: "+91 92185-03636 +91 80910-08336",
  },
  {
    Icon: AiFillCar,
    category: "Transports & Volvo Contact :",
    numbers: "+91 98577-03636, +91 83529-00036, +91 92185-15636",
  },
  {
    Icon: BsChatFill,
    category: "Complaints & Suggestion :",
    numbers: "+91 88943-60636 +91 98050-63636",
  },
];

const FormContainer = () => {
  return (
    <section className="my-12">
      <Wrapper className="flex max-lg:flex-col gap-6">
        <div className="details-part p-8 max-sm:p-2 sm:bg-[#f3f3f3] rounded-4xl max-sm:py-4 max-sm:rounded-2xl sm:shadow lg:max-w-4/10  w-full flex lg:flex-col max-lg:flex-wrap gap-10">
          {contactDetails.map((details, idx) => {
            const Icon = details.Icon;
            return (
              <div
                key={idx}
                className="flex gap-12 max-sm:flex-col max-sm:py-8 max-sm:px-4 max-sm:w-full max-sm:gap-6 max-sm:shadow max-sm:bg-[#f3f3f3] max-sm:rounded-2xl sm:items-center"
              >
                {/* icon */}
                <div className="icon rounded-[10px] min-w-[50px] max-sm:mx-auto min-h-[50px] max-w-[50px] max-h-[50px] flex items-center justify-center bg-[#dee2e6] rotate-45">
                  <Icon className="text-thisBlue -rotate-45 scale-200" />
                </div>
                {/* content */}
                <div className="content flex flex-col gap-[2px]">
                  <span className="font-semibold text-xl">
                    {details.category}
                  </span>
                  <div className="span text-[15px]">{details.numbers}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* contact form */}
        <div className="form-part bg-[#f3f3f3] lg:max-w-6/10 w-full rounded-4xl max-sm:rounded-2xl sm:p-4 ">
          <Form />
        </div>
      </Wrapper>
    </section>
  );
};

export default FormContainer;
