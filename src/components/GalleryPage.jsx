import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";

import recipe1 from "../assets/recipe1.jpg";
import recipe2 from "../assets/recipe2.png";
import recipe3 from "../assets/recipe3.png";
import recipe4 from "../assets/recipe4.png";
import recipe5 from "../assets/recipe5.png";
import recipe6 from "../assets/recipe6.png";
import recipe7 from "../assets/recipe7.png";
import recipe8 from "../assets/recipe8.png";
import recipe9 from "../assets/recipe9.png";
import recipe10 from "../assets/recipe10.png";
import recipe11 from "../assets/recipe11.png";
import recipe12 from "../assets/recipe12.png";

import AOS from "aos";
import "aos/dist/aos.css";

const GalleryPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    recipe1,
    recipe2,
    recipe3,
    recipe4,
    recipe5,
    recipe6,
    recipe7,
    recipe8,
    recipe9,
    recipe10,
    recipe11,
    recipe12,
  ];

  return (
    <section id="gallery" className="bg-gray-100 px-4 sm:px-8 lg:px-16 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6
            className="text-[#91999f] block text-2xl leading-[2.5rem] pt-[3rem] mb-[1.8rem] font-semibold uppercase"
            data-aos="fade-up"
          >
            Our Gallery
          </h6>
          <h2
            className="text-[4rem] leading-[4rem] font-bold mb-[11px] block"
            data-aos="fade-up"
          >
            Restaurant Name
          </h2>
          <p className="text-gray-700">
            Transform your Event from Ordinary to Extraordinary
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden">
              <div className="absolute inset-0 opacity-25"></div>
              <img
                src={src}
                alt={`gallery-img-${index}`}
                className="w-full h-full object-cover rotate-effect cursor-pointer bg-black p-5 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
