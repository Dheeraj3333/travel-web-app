"use client";
import { Label } from "@/components/ui/label";
import { RenderStars } from ".";
import { Checkbox } from "@/components/ui/checkbox";
import { useFilter } from "@/hooks/useFilter";

interface IRatings{
  ratings:number[] | undefined
}


export default function RatingFilter({ratings}:IRatings) {
  const { filter, setFilter } = useFilter();

  const handleRatingChange = (rating: number, checked: boolean) => {
    setFilter((prev) => ({
      ...prev,
      rating: checked ? rating : null,
    }));
  };

  return (
    <div className="max-h-32 overflow-y-auto space-y-3 pt-4">
      {ratings?.map((rating) => (
        <div key={rating} className="flex items-center justify-between">
          <Label htmlFor={`rating-${rating}`} className="cursor-pointer">
            {<RenderStars count={rating} />}
          </Label>
          <Checkbox
            id={`rating-${rating}`}
            checked={filter.rating === rating}
            onCheckedChange={(checked) =>
              handleRatingChange(rating, checked as boolean)
            }
          />
        </div>
      ))}
    </div>
  );
}
