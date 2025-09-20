import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" shadow-2xl border-t-1 pt-4 bg-white">
      <Wrapper>
        <div className="p-2 max-md:p-0 max-w-[1200px] mx-auto flex gap-8 max-lg:flex-col">
          {/* logo side and contact info and all */}
          <div className="left">
            <div className=" flex gap-8 max-md:flex-col max-md:gap-2">
              {/* logo and social links */}
              <div className="links-side">
                <div className="logo relative w-[400px] max-sm:w-full aspect-[3/1] ">
                  <Image
                    className="px-2"
                    src={"/next.svg"}
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* links */}
                <ul className="links flex gap-4 text-nowrap">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      className="w-8 h-8 flex justify-center items-center p-2 rounded-full bg-thisBlue"
                    >
                      <Facebook size={20} color="white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com"
                      target="_blank"
                      className="w-8 h-8 flex justify-center items-center p-2 rounded-full bg-thisBlue"
                    >
                      <Twitter size={20} color="white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      className="w-8 h-8 flex justify-center items-center p-2 rounded-full bg-thisBlue"
                    >
                      <Youtube size={20} color="white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="w-8 h-8 flex justify-center items-center p-2 rounded-full bg-thisBlue"
                    >
                      <Instagram size={20} color="white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="w-8 h-8 flex justify-center items-center p-2 rounded-full bg-thisBlue"
                    >
                      <Linkedin size={20} color="white" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* contact info */}
              <ul className="flex flex-col gap-1 text-[15px] pt-5 ">
                {/* toll free number */}
                <li className="capatalize">
                  Toll free No. :{" "}
                  <a
                    target="_blank"
                    className="text-thisbg-thisBlue"
                    href="tel:1800-532-3636"
                  >
                    1800-532-3636
                  </a>
                </li>

                {/* all time available */}
                <li className="capatalize">
                  24/7 Service :{" "}
                  <a
                    target="_blank"
                    className="text-thisbg-thisBlue"
                    href="tel:+91 1234567894"
                  >
                    +91 1234567894
                  </a>
                </li>

                {/* whatsapp */}
                <li className="capatalize flex items-center">
                  Whatsapp Number :{" "}
                  <a
                    target="_blank"
                    className="flex items-center text-thisbg-thisBlue"
                    href="https://api.whatsapp.com/send?phone=+919318334954&text=Hello,%20I%E2%80%99m%20planning%20a%20trip%20and%20looking%20for%20packages.%20Can%20you%20share%20details%20about%20your%20packages%20and%20offers?"
                  >
                    &nbsp;{" "}
                    <span>
                      <svg
                        className="text-green-500"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                      </svg>
                    </span>{" "}
                    &nbsp; +91 1234567894
                  </a>
                </li>

                {/* Complaints & Suggestions */}
                <li>
                  Complaints & Suggestions :{" "}
                  <a
                    target="_blank"
                    className="text-thisbg-thisBlue"
                    href="tel:+91 967845487"
                  >
                    +91 967845487
                  </a>
                </li>

                {/* mail */}
                <li>
                  Mail Us :{" "}
                  <a
                    target="_blank"
                    className="text-thisbg-thisBlue"
                    href="mailto:help@bookingService.com"
                  >
                    help@bookingService.com
                  </a>
                </li>
              </ul>
            </div>

            {/* payment methods */}

            <div className="flex items-center h-fit mt-8 flex-wrap gap-4">
              <h4 className="font-bold text-thisbg-thisBlue">We Accept : </h4>
              <div className="flex flex-wrap gap-2 grow-0 h-fit">
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/payment_icon/gpay.png"
                  }
                  alt="google pay"
                  width={50}
                  height={50}
                  className="grow-0 max-w-[45px] aspect-square shadow rounded-full"
                />
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/payment_icon/maestro.svg"
                  }
                  alt="google pay"
                  width={50}
                  height={50}
                  className="grow-0 max-w-[45px] aspect-square shadow rounded-full"
                />
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/payment_icon/mastercard.svg"
                  }
                  alt="google pay"
                  width={50}
                  height={50}
                  className="grow-0 max-w-[45px] aspect-square shadow rounded-full"
                />
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/payment_icon/online.svg"
                  }
                  alt="google pay"
                  width={50}
                  height={50}
                  className="grow-0 max-w-[45px] aspect-square shadow rounded-full"
                />
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/payment_icon/visa-electron.svg"
                  }
                  alt="google pay"
                  width={50}
                  height={50}
                  className="grow-0 max-w-[45px] aspect-square shadow rounded-full"
                />
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/payment_icon/paypal.svg"
                  }
                  alt="google pay"
                  width={50}
                  height={50}
                  className="grow-0 max-w-[45px] aspect-square shadow rounded-full"
                />
                <Image
                  src={
                    "https://www.bharatbooking.com/webroot/images/payment_icon/visa.svg"
                  }
                  alt="google pay"
                  width={50}
                  height={50}
                  className="grow-0 max-w-[45px] aspect-square shadow rounded-full"
                />
              </div>
            </div>
          </div>

          {/* right side and approvevals and all */}
          <div className="right flex flex-col max-lg:flex-row max-md:flex-col gap-12 lg:max-w-[400px]">
            <div className="flex flex-col gap-6">
              <h4 className="font-bold">Approved By:</h4>

              <ul className="flex flex-row gap-2 flex-wrap">
                {[
                  "Ministry of Tourism(India)",
                  "IAAI",
                  "ADTOI",
                  "IRCTC",
                  "IATA",
                  "Himachal Tourism",
                ].map((title, idx) => {
                  return (
                    <li key={idx} className="capitalize px-6 py-1 rounded-full bg-thisBlue text-background w-fit text-[12px]">
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
            

            <div className="flex flex-col gap-6 ">
              <h4 className="font-bold">Our Hotel Partner : </h4>

              <ul className="flex flex-row gap-2 flex-wrap">
                {[
                  "The Jungle Moutain retreat Kufri",
                  "Manali Valley Post",
                  "Hotel Kullu Manali Inn",
                  "Niyati College",
                ].map((title, idx) => {
                  return (
                    <li key={idx} className="capitalize px-6 py-1 rounded-full bg-thisBlue text-background w-fit text-[12px]">
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            
          </div>
        </div>
      </Wrapper>
      <div className="bg-thisBlue mt-6 text-background text-center py-4">
        <span >© 2025 - 2026 Holidays Booking Service India Private Limited</span>
      </div>
    </footer>
  );
};

export default Footer;
