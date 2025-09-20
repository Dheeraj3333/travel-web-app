import Wrapper from "@/components/Wrapper/Wrapper";
import { MapPin } from "lucide-react";
import React from "react";

const officesData = [
  {
    location: "Manali",
    address:
      "Bharat Booking Holidays India PVT. LTD. 2nd Floor, Govind Market, Near Mayur Restaurant, The Mall Manali Distt Kullu (H.P.) Pincode: 175131",
    headOffice: true,
    toolFreeNumber: "1800-532-3636",
    mobileNumber: "+91 98163-48636",
    email: "help@bharatbooking.com",
  },
  {
    location: "Delhi",
    address:
      "Bharat Booking Holidays India PVT. LTD. 25/34 Office No.205, 2nd Floor, Anand Chambers, East Patel Nagar New Delhi",
    headOffice: false,
    toolFreeNumber: "1800-532-3636",
    mobileNumber: "+91 78320-63636",
    email: "help@bharatbooking.com",
  },
  {
    location: "Ahmedabad",
    address:
      "Bharat Booking Holidays India PVT. LTD. 13 Floor, Ganesh Glory, Near BSNL Office, Off. S.G. Highway, Jagatpur, Ahmedabad-382481, Gujarat (India)",
    headOffice: false,
    toolFreeNumber: "1800-532-3636",
    mobileNumber: "+91- 9218056636, +91-7832063636",
    email: "help@bharatbooking.com",
  },
  {
    location: "Shimla",
    address:
      "Bharat Booking Holidays India PVT. LTD. Numbrehli - Kufri - Chail Road, Post Office Mundaghat, Shimla, Himachal Pradesh, India, PIN Code 171012",
    headOffice: false,
    toolFreeNumber: "1800-532-3636",
    mobileNumber: "+91-9218603636",
    email: "help@bharatbooking.com",
  },
];

const Offices = () => {
  return (
    <section className="my-12">
      <Wrapper>
        <h3 className="text-4xl max-md:text-2xl font-semibold text-thisBlue uppercase">
          Corporate Office
        </h3>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-12 mt-16">
          {officesData.map((office, idx) => {
            return (
              <div
                key={idx}
                className="office-card flex max-lg:flex-col max-sm:flex-col max-md:flex-row gap-8 max-sm:gap-2 relative bg-[#f3f3f3] shadow rounded-4xl max-sm:rounded-2xl sm:p-8 p-4"
              >
                {/* aBSOLUTE Location Name Over the card */}
                <h4 className="location absolute -top-[40px] left-0 flex gap-4">
                  <span className="text-thisOrange text-2xl max-sm:hidden font-semibold uppercase">
                    {office.location}
                  </span>{" "}
                  <span className="text-thisBlue font-bold text-3xl">
                    {office.headOffice ? "Head Office" : ""}
                  </span>
                </h4>

                {/* icon */}
                <div className="flex gap-4 max-sm:items-center  ">
                  <div className="icon min-w-[60px] min-h-[50px] max-w-[60px] rounded-xl max-h-[50px] flex items-center justify-center bg-thisBlue ">
                    <MapPin color="white" />
                  </div>
                  <div className="location-div capitalize text-thisBlue text-3xl font-semibold sm:hidden">
                    {office.location}
                  </div>
                </div>
                {/* content */}
                <div className="content flex flex-col gap-1">
                  <div className="location-div capitalize text-xl font-semibold max-sm:hidden">
                    {office.location}
                  </div>
                  <div className="address flex gap-1 flex-wrap">
                    <p>{office.address}</p>
                  </div>
                  <div className="tollfree flex gap-1 flex-wrap">
                    <span className="font-semibold">Toll Free Number : </span>
                    <p>{office.toolFreeNumber}</p>
                  </div>
                  <div className="number flex gap-1 flex-wrap">
                    <span className="font-semibold">Mobile Number : </span>
                    <p>{office.mobileNumber}</p>
                  </div>
                  <div className="email flex gap-1 flex-wrap">
                    <span className="font-semibold">Email : </span>
                    <p>{office.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Offices;
