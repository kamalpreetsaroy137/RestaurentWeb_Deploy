import React, { useEffect, useRef } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";

const OdometerCounter = ({ count }) => {
  const odometerRef = useRef(null);

  useEffect(() => {
    if (odometerRef.current) {
      const odometer = new Odometer({
        el: odometerRef.current,
        value: 0, // Initial value
        format: "(,ddd)", // Format for thousands separators
        theme: "default", // Odometer theme
      });
      odometer.update(count); // Update with new value
    }
  }, [count]);

  return (
    <div ref={odometerRef} className="odometer text-4xl leading-[36px] font-semibold text-white mb-0">
      {count}
    </div>
  );
};

export default OdometerCounter;
