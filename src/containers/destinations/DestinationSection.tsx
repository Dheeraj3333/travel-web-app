"use client";
import React, { useState } from "react";
import { allDestinations } from "@/mock/data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import DestinationCard from "./DestinationCard";
import { IDestination } from "@/types";

const ITEMS_PER_PAGE = 4; // Number of items to show per page

interface IDestinations {
  destinations: IDestination[];
}

const DestinationSection = ({ destinations }: IDestinations) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allDestinations.length / ITEMS_PER_PAGE);

  // Calculate current items to display
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentDestinations = destinations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate page numbers with ellipsis
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Maximum visible page numbers

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftBound = Math.max(1, currentPage - 2);
      const rightBound = Math.min(totalPages, currentPage + 2);

      if (leftBound > 1) {
        pageNumbers.push(1);
        if (leftBound > 2) {
          pageNumbers.push("ellipsis-left");
        }
      }

      for (let i = leftBound; i <= rightBound; i++) {
        pageNumbers.push(i);
      }

      if (rightBound < totalPages) {
        if (rightBound < totalPages - 1) {
          pageNumbers.push("ellipsis-right");
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => {
      if (number === "ellipsis-left" || number === "ellipsis-right") {
        return (
          <PaginationItem key={index}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      return (
        <PaginationItem key={index}>
          <PaginationLink
            href="#"
            isActive={number === currentPage}
            onClick={() => handlePageChange(number as number)}
          >
            {number}
          </PaginationLink>
        </PaginationItem>
      );
    });
  };

  return (
    <div>
      {/* Pinterest-style grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mb-12">
        {currentDestinations.map((destination: IDestination) =>
        //   destination card
          <DestinationCard key={destination.name} destination={destination} />
        )}
      </div>

      <div className="pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                isDisabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>

            {/* Page numbers */}
            {renderPageNumbers()}

            <PaginationItem>
              <PaginationNext
                href="#"
                isDisabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default DestinationSection;
