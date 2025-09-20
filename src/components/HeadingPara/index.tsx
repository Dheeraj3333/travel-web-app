import React from "react";

const HeadingPara = ({heading,para}:{heading:string,para:string}) => {
  return (
    <div className="wcu-heading flex items-center max-md:items-start mb-8 max-md:flex-col">
      <h4 className="text-thisOrange pr-20 text-4xl sm:text-nowrap py-4 max-md:text-[26px]">
        {heading}{" "}
      </h4>
      <p className="px-8 max-md:px-4 max-md:pr-0  border-l-4 border-thisOrange">
        {para}
      </p>
    </div>
  );
};

export default HeadingPara;
