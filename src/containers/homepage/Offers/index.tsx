import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Users, Building, Calendar, MapPin } from "lucide-react"
import Wrapper from "../../../components/Wrapper/Wrapper"

const offers = [
  {
    title: "BBH Membership",
    subtitle: "Holiday Membership Plans 2025",
    description: "REWARDED WITH EXCITING OFFERS AS YOU SIGN UP FOR MEMBERSHIP",
    badge: "MEMBERSHIP",
    color: "bg-blue-500",
    icon: Users,
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    title: "BBH Franchise",
    subtitle: "India's Growing Travel Company",
    description: "JOIN US, YOUR ONE-STOP SHOP FOR TRAVEL BUSINESS NEEDS IN INDIA",
    badge: "FRANCHISE",
    color: "bg-green-500",
    icon: Building,
    bgGradient: "from-green-50 to-green-100",
  },
  {
    title: "Weekend Offer",
    subtitle: "Exclusive Deals On Weekend Tours",
    description: "BOOK YOUR WEEKEND HOLIDAY TOUR PACKAGES ONLINE AT BEST PRICE",
    badge: "LONG TERM",
    color: "bg-purple-500",
    icon: Calendar,
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    title: "DMC specialist for Pan India",
    subtitle: "No.1 DMC Specialist For Pan India",
    description: "ONE OF THE LEADING DESTINATION MANAGEMENT COMPANY IN INDIA",
    badge: "DESTINATION",
    color: "bg-orange-500",
    icon: MapPin,
    bgGradient: "from-orange-50 to-orange-100",
  },
]

export default function OffersSection() {
  return (
    <section className="">
        <Wrapper className="py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Offers & <span className="text-orange-500">Deals</span>
          </h2>
        </div>

        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  {/* Card Header with Illustration */}
                  <div className={`h-40 sm:h-48 bg-gradient-to-br ${offer.bgGradient} relative overflow-hidden`}>
                    <div
                      className={`absolute top-3 left-3 ${offer.color} text-white px-2 py-1 rounded-full text-xs font-semibold`}
                    >
                      {offer.badge}
                    </div>

                    {/* Illustration placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <offer.icon className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 opacity-20" />
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/30 rounded-full"></div>
                        <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-white/20 rounded-full"></div>
                      </div>
                    </div>

                    {/* Character illustrations (simplified) */}
                    <div className="absolute bottom-2 right-2">
                      <div className="flex space-x-1">
                        <div className="w-6 h-8 bg-white/40 rounded-full"></div>
                        <div className="w-6 h-8 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-1">{offer.title}</h3>
                    <p className="text-primary font-semibold mb-2 text-sm sm:text-base line-clamp-1">
                      {offer.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">{offer.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation arrows - Hidden on mobile */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg hidden lg:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg hidden lg:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-6 space-x-2 lg:hidden">
          {offers.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-primary" : "bg-gray-300"}`} />
          ))}
        </div>
        </Wrapper>    </section>
  )
}
