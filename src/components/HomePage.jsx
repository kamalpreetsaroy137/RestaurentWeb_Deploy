import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar.jsx";

import leftImg from "../assets/aimg1.png";
import rightImg from "../assets/aimg2.png";
import centerImg from "../assets/aimg3.png";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="home"
      className="text-white sm:min-h-[60vh] md:min-h-[70vh] "
    >
      <div className="banner-section bg-[#71b85f] relative overflow-hidden grid grid-cols-1 items-end md:grid-cols-1">
        <img
          src={leftImg}
          alt="Left"
          className="absolute left-0 bottom-0 w-1/3 hidden md:block z-[2]"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
        />
        <div className="container text-center relative col-span-1 md:col-span-1 md:text-center">
          <h1
            className="text-[1.5rem] md:text-[2rem] leading-8 m-[1rem] md:m-4 font-light md:font-normal"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
          >
            Best dishes & ingredients
          </h1>
          <h1
            className="text-[2rem] md:text-[3rem] leading-[30px] md:leading-[60px] m-4 font-bold"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
          >
            Always Delivering <br /> Amazing Experience
          </h1>
          <button
            className="border px-6 text-[.8rem] md:text-[1rem] pointer font-bold rounded-full mt-4 hover:bg-white hover:text-[#71b85f] transition-colors duration-400 ease-in-out"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            Order Now
          </button>
        </div>
        <img
          src={rightImg}
          alt="Right"
          className="absolute right-0 bottom-0 w-1/3 hidden md:block z-[2]"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
        />
        <img
          src={centerImg}
          alt=""
          className="w-full absolute bottom-0 z-[1] col-span-3"
        />
      </div>
    </div>
  );
};

export default HomePage;
