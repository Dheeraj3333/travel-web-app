"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, Bed, Coffee, Gift, Wifi, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Wrapper from "@/components/Wrapper/Wrapper";
import Link from "next/link";
import Otpform from "./Otpform";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    phoneNumber: "",
    country: "",
    city: "",
    birthdayDate: undefined as Date | undefined,
    anniversaryDate: undefined as Date | undefined,
    agreedToTerms: false,
    name: "",
    password:"pass123"
  });

  function resetForm() {
    setFormData({
      firstName: "",
      lastName: "",
      mail: "",
      phoneNumber: "",
      country: "",
      city: "",
      birthdayDate: undefined as Date | undefined,
      anniversaryDate: undefined as Date | undefined,
      agreedToTerms: false,
      name:"",
      password:""
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
      [name]: date?.toString(),
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
    setFormData({
      ...formData,
      name: formData.firstName + " " + formData.lastName,
    });
    console.log("Form submitted:", {
      ...formData,
      name: formData.firstName + " " + formData.lastName,
    });

    // otp will be sent

    setLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  if (isSubmitted)
    return (
      <Otpform
        action="register"
        userData={formData}
        revertOtp={() => {
          setIsSubmitted(false);
        }}
      />
    );

  return (
    <section
      className="py-12 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://www.bharatbooking.com/admin/img/uploads/slider/1732943372_388700-bb-east-tour-website-banner-1440x460.webp')",
      }}
    >
      <Wrapper>
        <>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 " />

          <div className="relative z-10 flex flex-col lg:flex-row rounded-2xl shadow overflow-hidden">
            {/* Branding Section */}
            <div className="bg-black/80 text-white p-6 lg:p-8 lg:w-80 xl:w-96 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                  Join Booking Service
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 lg:gap-4"
                    >
                      <div className="min-w-10 min-h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <div className="text-left w-full">
                        <div className="font-medium text-sm lg:text-base">
                          {benefit.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 lg:p-8 flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-800">
                  Create A New Account?
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-white"
                        placeholder="Firstname"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-white"
                        placeholder="Enter Lastname"
                        required
                      />
                    </div>
                  </div>

                  {/* mail Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="mail"
                      className="text-sm font-medium text-gray-700"
                    >
                      EMail *
                    </Label>
                    <Input
                      id="mail"
                      type="email"
                      value={formData.mail}
                      onChange={handleInputChange}
                      className="w-full bg-white"
                      placeholder="Enter Email"
                      required
                    />
                  </div>

                  {/* PhoneNumber and Country */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phoneNumber"
                        className="text-sm font-medium text-gray-700"
                      >
                        Enter phoneNumber number *
                      </Label>
                      <div className="flex">
                        <Input
                          id="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="bg-white"
                          placeholder="Enter PhoneNumber Number"
                          required
                        />
                      </div>
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

                  {/* City Field */}
                  <div className="space-y-2">
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

                  {/* Date Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Birthday date */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Birthday Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.birthdayDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
                            {formData.birthdayDate
                              ? format(formData.birthdayDate, "PPP")
                              : "Select Birthday date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.birthdayDate}
                            onSelect={(date) =>
                              handleDateChange("birthdayDate", date)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Anniversary Date */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Anniversary Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.anniversaryDate &&
                                "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
                            {formData.anniversaryDate
                              ? format(formData.anniversaryDate, "PPP")
                              : "Select Anniversary date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.anniversaryDate}
                            onSelect={(date) =>
                              handleDateChange("anniversaryDate", date)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="space-x-2 pt-2">
                    <Label
                      htmlFor="terms"
                      className="text-xs text-gray-600 leading-relaxed block"
                    >
                      <Checkbox
                        id="terms"
                        className="border-thisBlue mr-2"
                        checked={formData.agreedToTerms}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange(checked as boolean)
                        }
                      />
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 underline">
                        Privacy Policy
                      </a>
                      .
                      <br />
                      By joining, you are agreeing to the Booking Service{" "}
                      <a href="#" className="text-blue-600 underline">
                        Terms and Conditions
                      </a>
                      .
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-thisBlue hover:bg-thisBlue/90 cursor-pointer text-white font-semibold py-3 mt-6"
                    disabled={!formData.agreedToTerms}
                  >
                    {loading ? (
                      <Loader2 className="stroke-white animate-spin scale-150 duration-300" />
                    ) : (
                      "Join"
                    )}
                  </Button>

                  {/* Sign In Link */}
                  <div className="text-center pt-4">
                    <span className="text-sm text-gray-600">
                      Already a member?{" "}
                      <Link
                        href="/login"
                        className="text-blue-600 underline font-medium"
                      >
                        Sign In
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      </Wrapper>
    </section>
  );
}
