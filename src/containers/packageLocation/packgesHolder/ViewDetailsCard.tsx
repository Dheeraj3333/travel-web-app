'use client'
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IPackage } from '@/types';
import { Filter } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const ViewDetailsCard = ({packageData}:{packageData:IPackage}) => {

    const [tourType,setTourType] = useState<string>("deluxe");

  return (
    <div className="bg-thisBlue/10 rounded p-2 md:m-2 max-w-[250px] max-lg:max-w-full w-full text-[14px]">
          <Label>Tour Type</Label>
          <Select onValueChange={(value)=>{setTourType(value.toLowerCase())}}>
            <SelectTrigger className="border-2 border-thisBlue rounded w-full mt-2 font-semibold text-thisBlue text-[15px]">
              <SelectValue placeholder="Select a Tour Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {["Deluxe", "Super-Deluxe", "Luxury"].map((type, idx) => {
                  return (
                    <SelectItem key={idx} value={type}>
                      {type}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>

          <p className="mt-1">
            <span className="font-bold text-thisOrange">₹ {packageData.package.price.toLocaleString() ?? '12,999'}</span> <br />{" "}
            <span>per person</span>
          </p>

          <div className="btns flex flex-col gap-2 mt-2">
            <Button className="w-full p-0">
              <Link
                className="w-full h-full flex items-center justify-center"
                href={`/package-details/${packageData.package.name.toLowerCase().replaceAll(" ","-")}/${tourType}`}
              >
                View Details
              </Link>
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-600">
              <Filter /> Customize and Get Quote
            </Button>
          </div>
        </div>
  )
}

export default ViewDetailsCard