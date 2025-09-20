"use client"
import type React from "react"
import { useState } from "react"

const HotelForm = () => {
  interface HotelFormData {
    city: string
    checkIn: string
    checkOut: string
    rooms: number
    guests: number
    country: string
  }

  const initialStateOfData = {
    city: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    guests: 1,
    country: "India",
  }

  const [data, setData] = useState<HotelFormData>(initialStateOfData)

  const handleInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement
    setData({
      ...data,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    console.log("Hotel Form Data:", data)
    setData(initialStateOfData)
  }

  return (
    <div className="bg-background px-6 max-sm:px-2 pb-6 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Search Domestic and International hotels and homestays
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
          {/* City */}
          <div className="grow border border-gray-300 w-[25%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">City</label>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Select City (Worldwide)"
              name="city"
              value={data.city}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
              required
            />
          </div>

          {/* Check In */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Check in</label>
            <input
              onChange={handleInputChange}
              type="date"
              name="checkIn"
              value={data.checkIn}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              required
            />
          </div>

          {/* Check Out */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Check out</label>
            <input
              onChange={handleInputChange}
              type="date"
              name="checkOut"
              value={data.checkOut}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              required
            />
          </div>

          {/* Room & Guests */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Room & Guests</label>
            <div className="flex flex-col">
              <select
                name="guests"
                value={data.guests}
                onChange={handleInputChange}
                className="text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2 max-md:mb-2"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} Person
                  </option>
                ))}
              </select>
              <select
                name="rooms"
                value={data.rooms}
                onChange={handleInputChange}
                className="text-sm bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Room
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Country */}
          <div className="grow border-2 border-blue-600 w-[15%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <select
              name="country"
              value={data.country}
              onChange={handleInputChange}
              className="w-full text-lg text-blue-600 bg-transparent outline-none font-semibold max-md:border-2 max-md:border-thisBlue max-md:p-2"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
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

export default HotelForm