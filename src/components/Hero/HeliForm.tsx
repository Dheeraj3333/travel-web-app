"use client"
import type React from "react"
import { useState } from "react"

const HelicopterForm = () => {
  interface HelicopterFormData {
    serviceType: string
    originCity: string
    destinationCity: string
    departDate: string
    nationality: string
    travelers: number
    classType: string
  }

  const initialStateOfData = {
    serviceType: "Heli Taxi",
    originCity: "",
    destinationCity: "",
    departDate: "",
    nationality: "Indian",
    travelers: 1,
    classType: "Economy",
  }

  const [data, setData] = useState<HelicopterFormData>(initialStateOfData)

  const handleInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement
    setData({
      ...data,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    console.log("Helicopter Form Data:", data)
    setData(initialStateOfData)
  }

  return (
    <div className="bg-background px-6 max-sm:px-2 pb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Search Helicopter Services</h2>

      <form onSubmit={handleSubmit}>
        {/* Service Type Radio Buttons */}
        <div className="flex gap-4 mb-4 overflow-auto pb-2">
          <label className={`flex items-center ${
            data.serviceType === "Heli Taxi" 
              ? "bg-thisBlue text-white" 
              : "border border-gray-300 text-black"
          } px-3 py-1 rounded-full text-sm cursor-pointer`}>
            <input
              type="radio"
              name="serviceType"
              value="Heli Taxi"
              checked={data.serviceType === "Heli Taxi"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="">Heli Taxi</span>
          </label>
          <label className={`flex items-center ${
            data.serviceType === "Heli Charter" 
              ? "bg-thisBlue text-white" 
              : "border border-gray-300 text-black"
          } px-3 py-1 rounded-full text-sm cursor-pointer`}>
            <input
              type="radio"
              name="serviceType"
              value="Heli Charter"
              checked={data.serviceType === "Heli Charter"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="">Heli Charter</span>
          </label>
          <label className={`flex items-center ${
            data.serviceType === "Heli Port" 
              ? "bg-thisBlue text-white" 
              : "border border-gray-300 text-black"
          } px-3 py-1 rounded-full text-sm cursor-pointer`}>
            <input
              type="radio"
              name="serviceType"
              value="Heli Port"
              checked={data.serviceType === "Heli Port"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="">Heli Port</span>
          </label>
        </div>

        <div className="flex w-full max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
          {/* Origin City */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Origin City"
              name="originCity"
              value={data.originCity}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
              required
            />
          </div>

          {/* Destination City */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Destination City"
              name="destinationCity"
              value={data.destinationCity}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
              required
            />
          </div>

          {/* Depart Date */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Depart</label>
            <input
              onChange={handleInputChange}
              type="date"
              name="departDate"
              value={data.departDate}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              required
            />
          </div>

          {/* Nationality */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Nationality</label>
            <select
              name="nationality"
              value={data.nationality}
              onChange={handleInputChange}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
            >
              <option value="Indian">Indian</option>
              <option value="American">American</option>
              <option value="British">British</option>
              <option value="Canadian">Canadian</option>
              <option value="Australian">Australian</option>
            </select>
          </div>

          {/* Travelers & Class */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Travellers & Class</label>
            <div className="flex flex-col">
              <select
                name="travelers"
                value={data.travelers}
                onChange={handleInputChange}
                className="text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2 max-md:mb-2"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} Traveler(s)
                  </option>
                ))}
              </select>
              <select
                name="classType"
                value={data.classType}
                onChange={handleInputChange}
                className="text-sm bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
          </div>
        </div>

        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg cursor-pointer mt-6 block mx-auto"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default HelicopterForm