import React from "react";
import arrow from "../assets/arrow.png";

const ServiceBox = ({ imageSrc, title, description }) => {
  return (
    <div className="p-4">
      <div className="service-box bg-white rounded-lg overflow-hidden transition-transform duration-300 ease-in-out relative hover:translate-y-[-0.5rem] hover:shadow-lg">
        <div className="img">
          <img src={imageSrc} alt={title} className="w-full" />
        </div>
        <div className="content text-center relative py-[35px] px-[15px]">
          <h4 className="title absolute left-1/2 -translate-x-1/2 top-[-15px] rounded-full z-10 text-[10px] leading-[8px] text-white px-[20px] py-[10px] mb-0 bg-[#4b9438] shadow-md">
            {title}
          </h4>
          <p className="text-[.8rem] text-[#6c757d] text-justify">
            {description}
          </p>
          <a
            href="#"
            className="flex items-center justify-center mt-[28px] block text-[#71b85f] text-sm"
          >
            Contact Us <img src={arrow} alt="arrow" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
