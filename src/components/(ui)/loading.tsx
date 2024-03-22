import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#1f2937] flex justify-center items-center z-[99999]">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
