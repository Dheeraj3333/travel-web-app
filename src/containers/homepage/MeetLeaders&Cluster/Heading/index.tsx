import React from "react";

const Heading = ({
  normalText,
  boldText,
}: {
  normalText: string;
  boldText: string;
}) => {
  return (
    <h3 className="text-4xl max-md:text-2xl relative w-fit mx-auto mb-10">
      {normalText} {" "}
      <span className="text-thisBlue font-bold">{boldText}</span>
      <span className="absolute p-[1px] w-[50%] bg-thisOrange rounded-2xl top-[100%] translate-y-[20px] left-[50%] translate-x-[-50%]"></span>
    </h3>
  );
};

export default Heading;
