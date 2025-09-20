"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Bed, CalendarIcon, Coffee, Gift, Loader2, Wifi } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface ICarRentalData {
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  vehicleType: string;
  carTypeBasedOnAC: undefined | "ac" | "non-ac";
  tourStartDate: Date | undefined;
  tourEndDate: Date | undefined;
  destinationFrom: string;
  destinationTo: string;
}

const CarRentalForm = () => {
  const [formData, setFormData] = useState<ICarRentalData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    vehicleType: "",
    city: "",
    carTypeBasedOnAC: undefined,
    tourStartDate: undefined as Date | undefined,
    tourEndDate: undefined as Date | undefined,
    destinationFrom: "",
    destinationTo: "",
  });

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      vehicleType: "",
      city: "",
      carTypeBasedOnAC: undefined,
      tourStartDate: undefined as Date | undefined,
      tourEndDate: undefined as Date | undefined,
      destinationFrom: "",
      destinationTo: "",
    });
  }

  const benefits = [
    { icon: Bed, title: "Free Room Nights" },
    { icon: Coffee, title: "Complimentary Breakfast" },
    { icon: Gift, title: "Special Offers" },
    { icon: Wifi, title: "Free Wifi" },
  ];

  const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Other",
    "India1",
    "United States1",
    "Canada1",
    "United Kingdom1",
    "Australia1",
    "Germany1",
    "France1",
    "Japan1",
    "Other1",
  ];
  const vehicleTypes = [
    "Alto/ small car",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Other",
    "India1",
    "United States1",
    "Canada1",
    "United Kingdom1",
    "Australia1",
    "Germany1",
    "France1",
    "Japan1",
    "Other1",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string, date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreedToTerms: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="flex-1 bg-[#f3f3f3] backdrop-blur-sm p-6 lg:p-8 flex items-center justify-center border-2 border-gray-200 rounded-2xl">
        <div className="w-full">
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-800">
            Car Rental
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* vehicle type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  place-items-center">
                {/* vehicle type */}
              <div className="space-y-2 w-full">
                <Label
                  htmlFor="vehicleType"
                  className="text-sm font-medium text-gray-700"
                >
                  Select Car Type *
                </Label>
                <Select
                  value={formData.vehicleType}
                  onValueChange={(value) =>
                    handleSelectChange("vehicleType", value)
                  }
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select vehicleType" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleTypes.map((vehicleType) => (
                      <SelectItem key={vehicleType} value={vehicleType}>
                        {vehicleType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* ac type radio */}
              <div className="w-full md:translate-y-3">
                <RadioGroup
                  defaultValue="ac"
                  className="flex items-center h-full"
                  value={formData.carTypeBasedOnAC}
                  onValueChange={(value: "ac" | "non-ac") =>
                    setFormData((prev) => ({
                      ...prev,
                      carTypeBasedOnAC: value,
                    }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="ac"
                      className="cursor-pointer"
                      id="ac"
                    />
                    <Label htmlFor="ac" className="cursor-pointer">
                      A.C
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="non-ac"
                      className="cursor-pointer"
                      id="non-ac"
                    />
                    <Label htmlFor="non-ac" className="cursor-pointer">
                      Non-A.C
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Name and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white"
                  placeholder="name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="country"
                  className="text-sm font-medium text-gray-700"
                >
                  Select Country *
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    handleSelectChange("country", value)
                  }
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* destination */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="destinationFrom"
                  className="text-sm font-medium text-gray-700"
                >
                  From Destination *
                </Label>
                <Input
                  id="destinationFrom"
                  value={formData.destinationFrom}
                  onChange={handleInputChange}
                  className="w-full bg-white"
                  placeholder="Destination From"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="destinationTo"
                  className="text-sm font-medium text-gray-700"
                >
                  To Destination *
                </Label>
                <Input
                  id="destinationTo"
                  value={formData.destinationTo}
                  onChange={handleInputChange}
                  className="w-full bg-white"
                  placeholder="Destination To"
                  required
                />
              </div>
            </div>

            {/* Phone and email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* phone number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Enter phone number *
                </Label>
                <div className="flex">
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
              </div>

              {/* email  */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>

            {/* Date Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* start date */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Tour Start From
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.tourStartDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
                      {formData.tourStartDate
                        ? format(formData.tourStartDate, "PPP")
                        : "Select Start Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.tourStartDate}
                      onSelect={(date) =>
                        handleDateChange("tourStartDate", date)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* end Date */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">
                  Tour End On
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.tourEndDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
                      {formData.tourEndDate
                        ? format(formData.tourEndDate, "PPP")
                        : "Select End Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.tourEndDate}
                      onSelect={(date) => handleDateChange("tourEndDate", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

{/* city and submit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-end">
              {/* City Field */}
              <div className="space-y-2 w-full">
                <Label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  Enter city
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-white"
                  placeholder="Enter city"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full border-2 h-fit block top-0 bg-thisBlue hover:bg-thisBlue/90 cursor-pointer text-white font-semibold py-3"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarRentalForm;
