import React, { useEffect } from "react";

import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import ic3 from "../assets/ic3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const FacilitesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const facilities = [
    { icon: ic1, text: "Parking Available" },
    { icon: ic2, text: "Kids Play Area" },
    { icon: ic3, text: "Menu à la Carte" },
  ];

  return (
    <section
      id="contact"
      className="facilities-section px-16 py-12 mb-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="text-center">
            <h6
              className="text-[#91999f] block text-[3rem] leading-[px] pt-[3rem] mb-[1.8rem] font-semibold uppercase"
              data-aos="fade-up"
            >
              facilities
            </h6>
            <h2
              className="text-[4rem] leading-[4rem] font-bold mb-[.8px] block"
              data-aos="fade-up"
            >
              Make Plans To Visit Us
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((amenity, index) => (
            <div
              key={index}
              className="single-facilities border border-[#0000001a] p-[60px_30px_37px] text-center rounded-[10px] transition-all ease-in-out duration-300 hover:border-[#71b85f] hover:translate-y-[-5px]"
            >
              <div className="icon mb-4">
                <img
                  src={amenity.icon}
                  alt={`amenity-icon-${index}`}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-700">{amenity.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitesPage;
