"use client";
import type React from "react";
import { useState } from "react";

const FlightForm = () => {
  interface FlightFormData {
    tripType: string;
    fromCity: string;
    toCity: string;
    departDate: string;
    returnDate: string;
    travelers: number;
    classType: string;
  }

  const initialStateOfData = {
    tripType: "Oneway",
    fromCity: "",
    toCity: "",
    departDate: "",
    returnDate: "",
    travelers: 1,
    classType: "Economy",
  };

  const [data, setData] = useState<FlightFormData>(initialStateOfData);

  const handleInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    console.log("Flight Form Data:", data);
    setData(initialStateOfData);
  };

  return (
    <div className="bg-background px-6 max-sm:px-2 pb-6 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Search Domestic and International flights
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Trip Type Radio Buttons */}
        <div className="flex gap-4 mb-4 overflow-auto pb-2">
          <label
            className={`flex items-center  ${
              data.tripType == "Oneway"
                ? "bg-thisBlue text-white"
                : "border border-gray-300 text-black"
            } px-3 py-1 rounded-full text-sm cursor-pointer`}
          >
            <input
              type="radio"
              name="tripType"
              value="Oneway"
              checked={data.tripType === "Oneway"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="">Oneway</span>
          </label>
          <label
            className={`flex items-center ${
              data.tripType == "RoundTrip"
                ? "bg-thisBlue text-white"
                : "border border-gray-300 text-black"
            } px-3 py-1 rounded-full text-sm cursor-pointer`}
          >
            <input
              type="radio"
              name="tripType"
              value="RoundTrip"
              checked={data.tripType === "RoundTrip"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="">RoundTrip</span>
          </label>
          <label
            className={`flex items-center ${
              data.tripType == "MultiCity"
                ? "bg-thisBlue text-white"
                : "border border-gray-300 text-black"
            } px-3 py-1 rounded-full text-sm cursor-pointer`}
          >
            <input
              type="radio"
              name="tripType"
              value="MultiCity"
              checked={data.tripType === "MultiCity"}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="">MultiCity</span>
          </label>
        </div>

        <div className="flex w-full max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
          {/* From City */}
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
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
          <div className="grow border border-gray-300 w-[20%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
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
              disabled={data.tripType === "oneway"}
            />
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
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
                <option value="First">First Class</option>
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
  );
};

export default FlightForm;
