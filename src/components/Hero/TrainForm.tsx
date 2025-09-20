"use client"
import type React from "react"
import { useState } from "react"

const TrainForm = () => {
  interface TrainFormData {
    fromCity: string
    toCity: string
    departDate: string
    returnDate: string
    classType: string
  }

  const initialStateOfData = {
    fromCity: "",
    toCity: "",
    departDate: "",
    returnDate: "",
    classType: "Economy",
  }

  const [data, setData] = useState<TrainFormData>(initialStateOfData)

  const handleInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement
    setData({
      ...data,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    console.log("Train Form Data:", data)
    setData(initialStateOfData)
  }

  return (
    <div className="bg-background px-6 max-sm:px-2 pb-6 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Search Train Tickets</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
          {/* From City */}
          <div className="grow border border-gray-300 w-[25%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">From</label>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Leaving From"
              name="fromCity"
              value={data.fromCity}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
              required
            />
          </div>

          {/* To City */}
          <div className="grow border border-gray-300 w-[25%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">To</label>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Going To"
              name="toCity"
              value={data.toCity}
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

          {/* Return Date */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Return</label>
            <input
              onChange={handleInputChange}
              type="date"
              name="returnDate"
              value={data.returnDate}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
            />
          </div>

          {/* Class Type */}
          <div className="grow border border-gray-300 w-[10%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">Class</label>
            <select
              name="classType"
              value={data.classType}
              onChange={handleInputChange}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First Class</option>
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

export default TrainForm