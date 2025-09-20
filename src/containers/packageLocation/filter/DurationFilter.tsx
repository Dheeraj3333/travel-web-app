"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useFilter } from "@/hooks/useFilter";

interface IDurationFilter{
  durations:{nights:number,days:number}[]|undefined
}

export default function DurationFilter({durations}:IDurationFilter) {
  const { filter, setFilter } = useFilter();


  // Helper to check if a duration is selected
  const isDurationSelected = (nights: number, days: number) => {
    return (
      filter.durations?.some((d) => d.nights === nights && d.days === days) ||
      false
    );
  };

  const handleDurationChange = (
    nights: number,
    days: number,
    checked: boolean
  ) => {
    const newDuration = { nights, days };
    setFilter((prev) => {
      const currentDurations = prev.durations || [];

      if (checked) {
        return {
          ...prev,
          durations: [...currentDurations, newDuration],
        };
      } else {
        return {
          ...prev,
          durations: currentDurations.filter(
            (d) => !(d.nights === nights && d.days === days)
          ),
        };
      }
    });
  };

  return (
    <div className="space-y-3">

{durations?.map((duration,idx)=>{
  return (
    <div key={idx} className="flex items-center justify-between pt-4">
        <Label
          htmlFor="duration-4-5"
          className="text-sm text-gray-700 cursor-pointer"
        >
          {`${duration.nights} Nights ${duration.days} Days`}
        </Label>
        <Checkbox
          id={`duration-${duration.nights}-${duration.days}`}
          checked={isDurationSelected(duration.nights, duration.days)}
          onCheckedChange={(checked) =>
            handleDurationChange(duration.nights, duration.days, checked as boolean)
          }
        />
      </div>
  )
})}

      {/* <div className="flex items-center justify-between pt-4">
        <Label
          htmlFor="duration-4-5"
          className="text-sm text-gray-700 cursor-pointer"
        >
          4 Nights To 5 Days
        </Label>
        <Checkbox
          id="duration-4-5"
          checked={isDurationSelected(4, 5)}
          onCheckedChange={(checked) =>
            handleDurationChange(4, 5, checked as boolean)
          }
        />
      </div>
      <div className="flex items-center justify-between ">
        <Label
          htmlFor="duration-3-4"
          className="text-sm text-gray-700 cursor-pointer"
        >
          3 Nights To 4 Days
        </Label>
        <Checkbox
          id="duration-3-4"
          checked={isDurationSelected(3, 4)}
          onCheckedChange={(checked) =>
            handleDurationChange(3, 4, checked as boolean)
          }
        />
      </div>
      <div className="flex items-center justify-between">
        <Label
          htmlFor="duration-2-3"
          className="text-sm text-gray-700 cursor-pointer"
        >
          2 Nights To 3 Days
        </Label>
        <Checkbox
          id="duration-2-3"
          checked={isDurationSelected(2, 3)}
          onCheckedChange={(checked) =>
            handleDurationChange(2, 3, checked as boolean)
          }
        />
      </div>
      <div className="flex items-center justify-between">
        <Label
          htmlFor="duration-1-2"
          className="text-sm text-gray-700 cursor-pointer"
        >
          1 Nights To 2 Days
        </Label>
        <Checkbox
          id="duration-4-5"
          checked={isDurationSelected(1, 2)}
          onCheckedChange={(checked) =>
            handleDurationChange(1, 2, checked as boolean)
          }
        />
      </div> */}
    </div>
  );
}
