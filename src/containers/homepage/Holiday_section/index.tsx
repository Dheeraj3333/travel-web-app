"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Wrapper from "../../../components/Wrapper/Wrapper"

interface Destination {
  id: string
  name: string
  image: string
  price?: {
    amount: number
    currency: string
  }
}

const destinations: Destination[] = [
  {
    id: "rajasthan",
    name: "RAJASTHAN",
    image: "/1700898182_786614-rajasthan-destination-image.webp",
    price: {
        amount: 27999,
        currency: "₹",
      },
  },
  {
    id: "leh-ladakh",
    name: "LEH LADAKH",
    image: "/himachal.webp",
    price: {
      amount: 27999,
      currency: "₹",
    },
  },
  {
    id: "himachal-pradesh",
    name: "HIMACHAL PRADESH",
    image: "/1700898182_786614-rajasthan-destination-image.webp",
    price: {
        amount: 27999,
        currency: "₹",
      },
  },
  {
    id: "kerala",
    name: "KERALA",
    image: "/himachal.webp",
    price: {
        amount: 27999,
        currency: "₹",
      },
  },
  {
    id: "andaman-nicobar",
    name: "ANDAMAN AND NICOBAR ISLANDS",
    image: "/1700898182_786614-rajasthan-destination-image.webp",
    price: {
        amount: 27999,
        currency: "₹",
      },
  },
  {
    id: "uttarakhand",
    name: "UTTARAKHAND",
    image: "/himachal.webp",
    price: {
        amount: 27999,
        currency: "₹",
      },
  },
  {
    id: "goa",
    name: "GOA",
    image: "/1700898182_786614-rajasthan-destination-image.webp",
    price: {
        amount: 27999,
        currency: "₹",
      },
  },
  {
    id: "jammu-kashmir",
    name: "JAMMU AND KASHMIR",
    image: "/1700898182_786614-rajasthan-destination-image.webp",
    price: {
        amount: 27999,
        currency: "₹",
      },
  },
]

export default function HolidayDestinationsSection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  
    return (
      <section className="py-16 bg-gray-50">
        <Wrapper>
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Holiday <span className="text-orange-500">Destinations In India</span>
            </h2>
          </div>
  
          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                onMouseEnter={() => setHoveredCard(destination.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div
                  className="h-64 bg-cover bg-center relative transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url('${destination.image}')`,
                  }}
                >
                  {/* Default Content (visible when not hovered) */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300 ${
                      hoveredCard === destination.id ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-center leading-tight">{destination.name}</h3>
                  </div>
  
                  {/* Hover Overlay with Animated White Border Frame */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-all duration-500 ${
                      hoveredCard === destination.id ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    {/* Animated White Border Frame */}
                    <div className="relative w-full h-full flex flex-col justify-center items-center p-6  bg-opacity-10">
                      {/* Top Border */}
                      <div
                        className={`absolute top-0 left-0 h-1 bg-white transition-all duration-500 ease-out ${
                          hoveredCard === destination.id ? "w-full" : "w-0"
                        }`}
                      />
                      {/* Right Border */}
                      <div
                        className={`absolute top-0 right-0 w-1 bg-white transition-all duration-500 ease-out delay-100 ${
                          hoveredCard === destination.id ? "h-full" : "h-0"
                        }`}
                      />
                      {/* Bottom Border */}
                      <div
                        className={`absolute bottom-0 right-0 h-1 bg-white transition-all duration-500 ease-out delay-200 ${
                          hoveredCard === destination.id ? "w-full" : "w-0"
                        }`}
                        style={{ transformOrigin: "right" }}
                      />
                      {/* Left Border */}
                      <div
                        className={`absolute bottom-0 left-0 w-1 bg-white transition-all duration-500 ease-out delay-300 ${
                          hoveredCard === destination.id ? "h-full" : "h-0"
                        }`}
                        style={{ transformOrigin: "bottom" }}
                      />
  
                      {/* Content */}
                      <div
                        className={`transition-all duration-300 delay-500 ${
                          hoveredCard === destination.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      >
                        <h3 className="text-2xl font-bold text-center leading-tight mb-4 tracking-wide">
                          {destination.name}
                        </h3>
  
                        {/* Price Information */}
                        {destination.price && (
                          <p className="text-lg font-semibold text-center">
                            STARTING AT {destination.price.currency}
                            {destination.price.amount.toLocaleString()} ONLY
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* View More Link */}
          <div className="text-right">
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-lg flex items-center gap-2 ml-auto transition-colors duration-300">
              View More
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Wrapper>
      </section>
    )
  }
