import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
  disabled?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<typeof Link>

function PaginationLink({
  className,
  isActive,
  disabled = false,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled}
      data-slot="pagination-link"
      data-active={isActive}
      data-disabled={disabled}
      className={cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        `${isActive ? " bg-thisBlue text-white hover:bg-thisBlue hover:text-white" : ""}`,
        `${disabled ? "pointer-events-none opacity-50" : ""}`,
        className
      )}
      onClick={(e) => disabled && e.preventDefault()}
      {...props}
    />
  )
}

type PaginationNavigationProps = {
  isDisabled?: boolean
} & React.ComponentProps<typeof PaginationLink>

function PaginationPrevious({
  className,
  isDisabled = false,
  ...props
}: PaginationNavigationProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      disabled={isDisabled}
      className={cn(
        "gap-1 px-2.5 sm:pl-2.5 bg-thisBlue text-white hover:bg-thisBlue hover:text-white",
        className
      )}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  isDisabled = false,
  ...props
}: PaginationNavigationProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      disabled={isDisabled}
      className={cn(
        "gap-1 px-2.5 sm:pr-2.5 bg-thisBlue text-white hover:bg-thisBlue hover:text-white",
        className
      )}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}