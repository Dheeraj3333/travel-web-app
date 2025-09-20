"use client";

import { useState } from "react";

const AboutLocation = ({ para }: { para: string|undefined }) => {
  const [isFullText, setIsFullText] = useState(false);

  function toggleFullText() {
    setIsFullText(!isFullText);
  }

  return (
    <div>
      <p className={`mt-4 ${isFullText ? "" : "line-clamp-5"}`}>{para} </p>

      <button
        onClick={toggleFullText}
        type="button"
        className="text-thisBlue  cursor-pointer pr-4 mt-2"
      >
        {isFullText ? "Show less" : "Read more..."}
      </button>
    </div>
  );
};

export default AboutLocation;
