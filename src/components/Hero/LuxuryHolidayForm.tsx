"use client"
import type React from "react"
import { useState } from "react"

const LuxuryHolidayForm = () => {
  interface LuxuryHolidayFormData {
    city: string
    holidayType: string
  }

  const initialStateOfData = {
    city: "",
    holidayType: "",
  }

  const [data, setData] = useState<LuxuryHolidayFormData>(initialStateOfData)

  const handleInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement
    setData({
      ...data,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    console.log("Holiday Form Data:", data)
    setData(initialStateOfData)
  }

  return (
    <div className="bg-background px-6 max-sm:px-2 pb-6 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Search Domestic and International Luxury holidays.</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-md:grid max-md:grid-cols-1 max-md:gap-4">
          {/* City */}
          <div className="grow border border-gray-300 w-[50%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">City</label>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Enter city"
              name="city"
              value={data.city}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
              required
            />
          </div>

          {/* Holiday Search */}
          <div className="grow border border-gray-300 w-[50%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">holiday</label>
            <textarea
              onChange={handleInputChange}
              placeholder="Search over a million tour and travels"
              name="holidayType"
              value={data.holidayType}
              className="w-full text-lg bg-transparent outline-none resize-none h-12 max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
            />
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

export default LuxuryHolidayForm