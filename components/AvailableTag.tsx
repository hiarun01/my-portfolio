import React from "react";

const AvailableTag = () => {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffdb70] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ffdb70]"></span>
      </span>
      <span className="text-[#ffdb70] text-sm font-bold">
        Available for work
      </span>
    </div>
  );
};

export default AvailableTag;
