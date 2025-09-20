"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Wrapper from "@/components/Wrapper/Wrapper";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import Otpform from "../registrer/Otpform";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
  });

  function resetForm() {
    setFormData({
      mobile: "",
    });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // resetForm();
    setLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setLoading(false);
    },2000);
  };

  if (isSubmitted) return <Otpform revertOtp={()=>{setIsSubmitted(false)}} />;

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

          <div className="relative z-10 flex flex-col lg:flex-row rounded-2xl shadow overflow-hidden max-w-[500px] mx-auto">
            {/* Form Section */}
            <div className="flex-1 bg-white/80 backdrop-blur-sm p-6 lg:p-8 flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-800">
                  Enter Your Registered Mobile Number
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full bg-white"
                        placeholder="Enter Phone Number"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-thisBlue hover:bg-thisBlue/90 cursor-pointer text-white font-semibold py-3 mt-2"
                  >
                    {loading ? (
                      <Loader2 className="stroke-white animate-spin scale-150 duration-300" />
                    ) : (
                      "Send OTP"
                    )}
                  </Button>

                  {/* Sign In Link */}
                  <div className="text-center pt-4">
                    <span className="text-sm text-gray-600">
                      New member?{" "}
                      <Link
                        href="/register"
                        className="text-blue-600 underline font-medium"
                      >
                        Register
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
