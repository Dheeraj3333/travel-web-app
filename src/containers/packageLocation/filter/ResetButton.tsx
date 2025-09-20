"use client";

import { Button } from "@/components/ui/button";
import { useFilter } from "@/hooks/useFilter";

export default function ResetButton() {
  const { resetFilters } = useFilter();
  return (
    <Button
      variant="link"
      className="text-blue-600 hover:text-blue-800 p-0 h-auto cursor-pointer"
      onClick={resetFilters}
    >
      Reset All
    </Button>
  );
}
