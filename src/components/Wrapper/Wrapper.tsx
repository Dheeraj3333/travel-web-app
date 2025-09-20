import React from "react";
import { twMerge } from "tailwind-merge";

interface IWrapper {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: IWrapper) => {
  return (
    <div className={twMerge(`max-w-[1280px] w-full mx-auto px-8 max-sm:px-4`, className)}>
      {children}
    </div>
  );
};

export default Wrapper;
