"use client";
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
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { IRegisterUser, registerUser } from "@/api/registerUser";

export default function Otpform({
  revertOtp,
  action = "register",
  userData = undefined,
}: {
  revertOtp: () => void;
  action?: string;
  userData?: IRegisterUser;
}) {
  scrollTo(0, 0);

  const [verifying, setVerifying] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    try {
      if (otp.length < 4) {
        return alert("Complete all the otp fields!");
      }
      console.log("Form submitted:", otp);

      setVerifying(true);

      if (action == "register" && userData !== undefined) {

        console.log("userData retrived from form ====================>",userData);

        await registerUser(userData)


      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  We've Sent OTP To Your Registered Mobile Number
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name Fields */}
                  <div className="grid grid-cols-1">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Enter OTP *
                      </Label>
                      <InputOTP
                        required={true}
                        disabled={verifying}
                        maxLength={4}
                        value={otp}
                        onChange={(value) => setOtp(value)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot className="border-thisBlue" index={0} />
                          <InputOTPSlot className="border-thisBlue" index={1} />

                          <InputOTPSlot className="border-thisBlue" index={2} />
                          <InputOTPSlot className="border-thisBlue" index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-thisBlue hover:bg-thisBlue/90 cursor-pointer text-white font-semibold py-3 mt-2"
                  >
                    {verifying ? (
                      <Loader2 className="stroke-white scale-150 animate-spin" />
                    ) : (
                      "Verify"
                    )}
                  </Button>

                  {/* Sign In Link */}
                  <div className="text-center pt-4">
                    <span className="text-sm text-gray-600">
                      {/* New member?{" "} */}
                      <button
                        disabled={verifying}
                        onClick={revertOtp}
                        className="text-blue-600 underline font-medium cursor-pointer"
                      >
                        Edit Number
                      </button>
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
