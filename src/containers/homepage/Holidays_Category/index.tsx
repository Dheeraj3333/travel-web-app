import { ArrowRight } from "lucide-react";
import Wrapper from "../../../components/Wrapper/Wrapper";

interface HolidayCategory {
  id: string;
  title: string;
  packageCount: number;
  image: string;
  bgColor?: string;
}

const holidayCategories: HolidayCategory[] = [
  {
    id: "hill-station",
    title: "HILL STATION",
    packageCount: 96,
    image: "/1700898182_786614-rajasthan-destination-image.webp",
  },
  {
    id: "honeymoon-trip",
    title: "HONEYMOON TRIP",
    packageCount: 50,
    image: "/1700898182_786614-rajasthan-destination-image.webp",
  },
  {
    id: "pilgrimage-tour",
    title: "PILGRIMAGE TOUR PACKAGES",
    packageCount: 37,
    image: "/1700898182_786614-rajasthan-destination-image.webp",
  },
  {
    id: "india-tour",
    title: "INDIA TOUR PACKAGES",
    packageCount: 173,
    image: "/1700898182_786614-rajasthan-destination-image.webp",
  },
  {
    id: "adventure-trip",
    title: "ADVENTURE TRIP",
    packageCount: 111,
    image: "/1700898182_786614-rajasthan-destination-image.webp",
  },
  {
    id: "himachal-tribal",
    title: "HIMACHAL TRIBAL CIRCUIT PACKAGES",
    packageCount: 16,
    image: "/1700898182_786614-rajasthan-destination-image.webp",
  },
];

export default function HolidayCategoriesSection() {
  return (
    <section className="">
      <Wrapper>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Holiday <span className="text-orange-500">Category</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {holidayCategories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Background Image */}
              <div
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${category.image}')`,
                }}
              >
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-lg font-semibold mb-3">
                    {category.packageCount} PACKAGES
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2 group-hover:bg-opacity-30 transition-all duration-300">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-right">
          <button className="text-blue-600 hover:text-blue-800 font-semibold text-lg flex items-center gap-2 ml-auto">
            View More
            <ArrowRight className="h-5 w-5 text-primary" />
          </button>
        </div>
      </Wrapper>{" "}
    </section>
  );
}
