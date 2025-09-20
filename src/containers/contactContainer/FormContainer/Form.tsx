"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type React from "react";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  website: string;
  project: string;
  country:string
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    website: "",
    project: "",
    country:""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 max-sm:px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Let's Convert Your Idea into Reality
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Input
              required
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-white border-gray-200 text-gray-700 placeholder:text-gray-400 h-12 w-full"
            />
          </div>

          <div className="space-y-2">
            <Select
              value={formData.country} 
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, country: value }))
              }
            >
              <SelectTrigger className="w-full bg-white !h-12">
                <SelectValue
                  className="text-gray-700 h-12"
                  placeholder="Select Country"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Phone Prefix</SelectLabel>
                  <SelectItem value="American Samoa (+1684)">American Samoa (+1684)</SelectItem>
                  <SelectItem value="British Indian Ocean Territory (+246)">
                    British Indian Ocean Territory (+246)
                  </SelectItem>
                  <SelectItem value="India (+91)">India (+91)</SelectItem>
                  <SelectItem value="Japan (+81)">Japan (+81)</SelectItem>
                  <SelectItem value="Kuwait (+965)">Kuwait (+965)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <Input
              required
              id="phoneNumber"
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-white border-gray-200 text-gray-700 placeholder:text-gray-400 h-12 w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Your Email Id"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white border-gray-200 text-gray-700 placeholder:text-gray-400 h-12 w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="website" className="sr-only">
            Website
          </label>
          <Input
            id="website"
            name="website"
            type="url"
            placeholder="Website"
            value={formData.website}
            onChange={handleInputChange}
            className="bg-white border-gray-200 text-gray-700 placeholder:text-gray-400 h-12 w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="project" className="sr-only">
            Project Description
          </label>
          <textarea
            id="project"
            name="project"
            placeholder="Tell us about your project or idea"
            value={formData.project}
            onChange={handleInputChange}
            className="focus:outline-0 shadow rounded bg-white border-gray-200 text-gray-700 placeholder:text-gray-400 h-12 w-full min-h-[120px] p-2 resize-y max-h-40"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-thisOrange hover:bg-thisOrange/90 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Get A Free Quote!
          </button>
        </div>
      </form>
    </div>
  );
}
