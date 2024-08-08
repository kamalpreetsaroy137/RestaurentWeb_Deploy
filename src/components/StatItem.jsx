import React from "react";
import OdometerCounter from "./OdometerCounter.jsx";
const StatItem = ({ imageSrc, count, title }) => {
  return (
    <div className="stat-item text-center relative">
      <div className="icon mb-4">
        <img src={imageSrc} alt={title} className="mx-auto" />
      </div>
      <div className="stat-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem] h-[14rem] bg-[#4b9438] text-center rounded-full pt-[4rem]">
        <OdometerCounter count={count} />
        <span className="text-[2rem] font-semibold text-white">K</span>
        <h3 className="info block mt-2 text-[2rem] leading-[1.7rem] uppercase text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default StatItem;
