"use client";
import Link from "next/link";
import { Mail, Phone, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { destinationOptions, holidayOptions, navLinks } from "@/mock/data";

// custom breakpoints = 1200px and 850px

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav({ linkName }: { linkName?: string }) {
    if (
      linkName?.toLowerCase() == "destination" ||
      linkName?.toLowerCase() == "holiday" ||
      linkName?.toLowerCase() == "my account"
    ) {
      return;
    }
    console.log("function executed !");
    setIsOpen(!isOpen);
    if ((!isOpen) && (window.innerWidth < 850)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }

  return (
    <header className="relative w-full shadow">
      <nav className="relative">
        <Wrapper className="px-0 max-sm:px-0">
          <div className="flex w-full relative max-[850px]:items-center max-[850px]:justify-between">
            {/* Left side - Logo with diagonal cut */}
            <div className="relative">
              <Link href="/" className="block">
                <div
                  className="relative flex items-center h-[100px] w-[400px] max-lg:w-[250px] max-[850px]:w-[200px] bg-white px-6 pr-16 max-[850px]:pr-8"
                  style={{
                    clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  <div className="flex items-center gap-4 w-[400px] aspect-[3/1] max-lg:w-[250px] relative">
                    {/* Logo */}
                    <Image
                      fill
                      src={"/next.svg"}
                      alt="logo"
                      style={{ objectFit: "contain" }}
                    />
                    {/* PAN INDIA badge */}
                  </div>
                </div>
              </Link>
            </div>

            {/* Right side - Contact bar and navigation */}
            <div
              style={{
                maxHeight: "calc(100vh - 100px)",
              }}
              className={`flex-1 flex flex-col -ml-16 max-[850px]:ml-0 max-[850px]:absolute top-0 left-0 max-[850px]:w-[100%] max-[850px]:z-50 max-[850px]:bg-white max-[850px]:min-h-[calc(100vh-91px)] max-[850px]:overflow-y-scroll max-[850px]:overflow-x-hidden max-[850px]:top-[100px] transition-all duration-500 ${
                isOpen ? "max-[850px]:left-[0]" : "max-[850px]:left-[-100vw]"
              }`}
            >
              {/* Top bar - Contact details */}
              <DisplayContactDetailsBar />

              {/* Bottom bar - Navigation links */}
              <DisplayNavigationLinksBar
                onclick={toggleNav}
                setActiveDropdown={setActiveDropdown}
                activeDropdown={activeDropdown}
              />
            </div>

            <div
              className="toggle-btn min-w-14 min-h-14 shadow rounded-2xl flex justify-center items-center mr-6 bg-thisBlue min-[850px]:hidden"
              onClick={() => {
                toggleNav({});
              }}
            >
              {isOpen ? (
                <X size={35} color="white" />
              ) : (
                <Menu size={35} color="white" />
              )}
            </div>
          </div>
        </Wrapper>
      </nav>
    </header>
  );
};

export default Navbar;

// seprated components, seprate files can be created in future as code looks really unreadable
function DisplayContactDetailsBar() {
  return (
    <div className="max-[850px]:order-[1] bg-blue-700 text-white px-6 py-3 min-[850px]:h-[50px] flex items-center justify-between ">
      <div className="flex items-center gap-8 text-sm max-[1200px]:justify-between max-[850px]:justify-start max-[850px]:items-start max-[850px]:flex-col max-[850px]:py-4">
        <div className="flex items-center gap-2 w-fit">
          <Phone size={16} />
          <span className="font-medium">Toll Free : 1800-532-3636</span>
        </div>
        <div className="flex items-center gap-2 w-fit">
          <Clock size={16} />
          <span className="font-medium">24/7 : +91 9816348636</span>
        </div>
        <div className="flex items-center gap-2 w-fit">
          <Mail size={16} />
          <span className="font-medium">help@bharatbooking.com</span>
        </div>
      </div>
      <Button className="bg-thisOrange hover:bg-thisOrange max-[1200px]:hidden text-white px-6 py-2 text-sm font-semibold rounded">
        Get a free Quote
      </Button>
    </div>
  );
}

function DisplayNavigationLinksBar({
  activeDropdown,
  setActiveDropdown,
  onclick,
}: {
  activeDropdown: string | null;
  setActiveDropdown: (a: string | null) => void;
  onclick: ({ linkName }: { linkName?: string }) => void;
}) {
  return (
    <div className="bg-[#fff] min-[850px]:h-[50px] flex items-center justify-center max-[850px]:justify-start px-6 border-t border-gray-100 relative">
      <ul className="flex items-center justify-center gap-1 max-[850px]:flex-col max-[850px]:justify-start max-[850px]:items-start">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            className="relative text-xs"
            onClick={() => {
              innerWidth < 850 && onclick({ linkName: link.name });
            }}
          >
            {link.name === "Holiday" ? (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("holiday")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 min-[850px]:py-3 max-[850px]:text-2xl text-nowrap max-[1200px]:px-1 max-[1200px]:gap-2 text-thisorabg-thisOrange hover:texthisOrangebg-thisOrange-600 transition-all duration-200 text-xs font-semibold capitalize flex items-center gap-1">
                  {link.name}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "holiday" && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border rounded-lg p-4 w-64 z-50">
                    <div className="space-y-2">
                      {holidayOptions.map((option, i) => (
                        <Link onClick={()=>{onclick({linkName:undefined})}}
                          key={i}
                          href={`/holiday/${option
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block px-3 py-2 text-gray-700 hover:text-thisorabg-thisOrange hover:bg-thisOrange rounded transition-colors"
                        >
                          {option}
                        </Link>
                      ))}
                      <Link onClick={()=>{onclick({linkName:undefined})}}
                        href="/holiday/all"
                        className="block px-3 py-2 text-blue-600 hover:text-blue-700 font-medium border-t pt-3 mt-3"
                      >
                        Discover More {">>"}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : link.name === "Destination" ? (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("destination")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-3 max-[850px]:text-2xl text-nowrap max-[1200px]:px-1 max-[1200px]:gap-2 text-gray-700 hover:text-thisorabg-thisOrange transition-allthisOrangebg-thisOrange text-xs font-semibold capitalize flex items-center gap-1">
                  {link.name}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "destination" && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border rounded-lg p-6 w-[500px] max-[850px]:w-[450px] max-[850px]:max-w-[90vw] max-[850px]:overflow-auto  z-50">
                    <div className="grid grid-cols-3 gap-8 min-w-fit">
                      {Object.entries(destinationOptions).map(
                        ([region, places]) => (
                          <div
                            key={region}
                            className="max-[850px]:min-w-[30vw]"
                          >
                            <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-green-500">
                              {region}
                            </h3>
                            <div className="space-y-2">
                              {places.map((place, i) => (
                                <Link
                                  onClick={() => {
                                    onclick({ linkName: undefined });
                                  }}
                                  key={i}
                                  href={`/package/${place
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="block text-gray-600 hover:text-thisorabg-thisOrange transition-colthisOrangebg-thisOrange-sm"
                                >
                                  {place}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex justify-between mt-6 pt-4 border-t">
                      <Link
                        onClick={() => {
                          onclick({ linkName: undefined });
                        }}
                        href="/destination/domestic"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        India Destination {">>"}
                      </Link>
                      <Link
                        onClick={() => {
                          onclick({ linkName: undefined });
                        }}
                        href="/destination/international"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        International Destination {">>"}
                      </Link>
                      <Link
                        onClick={() => {
                          onclick({ linkName: undefined });
                        }}
                        href="/destination/"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        All Destination {">>"}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : link.name === "My Account" ? (
              <button className="px-4 py-3 max-[850px]:text-2xl text-nowrap max-[1200px]:px-1 max-[1200px]:gap-2 text-gray-700 hover:text-thisorabg-thisOrange transition-allthisOrangebg-thisOrange text-xs font-semibold capitalize flex items-center gap-1">
                {link.name.replace("-", " ")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ) : (
              <Link
                href={link.path}
                className="px-4 py-3 max-[850px]:text-2xl text-nowrap max-[1200px]:px-1 max-[1200px]:gap-2  text-gray-700 hover:text-thisorabg-thisOrange hover:borthisOrangebg-thisOrange-2 hover:border-thisorabg-thisOrange transition-allthisOrangebg-thisOrange text-xs font-semibold capitalize "
              >
                {link.name.replace("-", " ")}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
