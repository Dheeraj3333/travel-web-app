"use client";

import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import type React from "react";
import { useState } from "react";

const CarRentalForm = () => {
  interface CarRentalFormData {
    fromCity: string;
    toCity: string;
    departDate: string;
  }

  const initialStateOfData = {
    fromCity: "",
    toCity: "",
    departDate: "",
  };

  const [loading,setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CarRentalFormData>(initialStateOfData);

  const handleInputChange = (e: React.SyntheticEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    console.log("Car Rentals initial Data:", data);
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      setData(initialStateOfData);
    },2000)
  };

  if(loading) return <div className="bg-background px-6 max-sm:px-2 min-h-[250px] pb-6 flex items-center justify-center"><Loader2 className="text-thisBlue scale-200 animate-spin duration-1000"/></div>

  return (
    <div className="bg-background px-6 max-sm:px-2 pb-6 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Get a Car For Rent Now
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-md:grid max-md:grid-cols-1 max-md:gap-4">
          {/* From */}
          <div className="grow border border-gray-300 w-[33.3%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">From</label>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="From"
              name="fromCity"
              value={data.fromCity}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
              required
            />
          </div>

          {/* To */}
          <div className="grow border border-gray-300 w-[33.3%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
            <label className="text-sm text-gray-600">To</label>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="To"
              name="toCity"
              value={data.toCity}
              className="w-full text-lg bg-transparent outline-none max-md:border-2 max-md:border-thisBlue max-md:p-2"
              autoComplete="off"
              required
            />
          </div>

          {/* Depart Date */}
          <div className="grow border border-gray-300 w-[33.3%] p-4 max-md:w-full max-md:border-none max-sm:p-0">
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
        </div>

        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg cursor-pointer mt-6 block mx-auto"
          type="submit"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default CarRentalForm;