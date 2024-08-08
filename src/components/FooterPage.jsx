import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";

import footerShape from "../assets/footer-shape.png";
import logo from "../assets/logo.png";
import ii1 from "../assets/ii1.png";
import ii2 from "../assets/ii2.png";
import ii3 from "../assets/ii3.png";

import AOS from "aos";
import "aos/dist/aos.css";

const FooterPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <footer className="relative bg-[#71b85f] p-[130px_0px_25px] overflow-hidden">
      <img
        className="absolute top-[-2px] left-0 w-full"
        src={footerShape}
        alt="footer shape"
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-row justify-center items-center">
          <div className="text-center mb-6 md:mb-0 md:mr-6">
            <img
              src={logo}
              alt="logo"
              className="inline mx-auto mb-4 w-[190px]"
            />
            <div className="footer-social-links flex items-center justify-center my-[40px] border-b border-[#fff] pb-[20px]">
              <span className="inline-block font-semibold text-[#fff] mr-2">
                Follow us :
              </span>
              <ul className="flex gap-4 text-right">
                <li className="group">
                  <a
                    href="#"
                    className="w-[40px] h-[40px] rounded-full bg-none block text-[#fff] leading-[40px] text-center text-[14px] border border-[#ffffff40] transition-all ease-in-out duration-300 flex items-center justify-center group-hover:bg-white group-hover:border-transparent group-hover:text-green-500"
                  >
                    <FaFacebookF className="text-[14px] transition-colors group-hover:text-green-500" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="w-[40px] h-[40px] rounded-full bg-none block text-[#fff] leading-[40px] text-center text-[14px] border border-[#ffffff40] transition-all ease-in-out duration-300 flex items-center justify-center group-hover:bg-white group-hover:border-transparent group-hover:text-green-500"
                  >
                    <FaTwitter className="text-[14px] transition-colors group-hover:text-green-500" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="w-[40px] h-[40px] rounded-full bg-none block text-[#fff] leading-[40px] text-center text-[14px] border border-[#ffffff40] transition-all ease-in-out duration-300 flex items-center justify-center group-hover:bg-white group-hover:border-transparent group-hover:text-green-500"
                  >
                    <FaGooglePlusG className="text-[14px] transition-colors group-hover:text-green-500" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="w-[40px] h-[40px] rounded-full bg-none block text-[#fff] leading-[40px] text-center text-[14px] border border-[#ffffff40] transition-all ease-in-out duration-300 flex items-center justify-center group-hover:bg-white group-hover:border-transparent group-hover:text-green-500"
                  >
                    <FaYoutube className="text-[14px] transition-colors group-hover:text-green-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="info-box text-center text-white">
                <img
                  src={ii1}
                  alt="phone icon"
                  className="mx-auto mb-2 w-[60px]"
                />
                <p className="text-lg">Phone Number:</p>
                <p>+91 0000 0000 00</p>
              </div>
              <div className="info-box text-center text-white">
                <img src={ii2} alt="address icon" className="mx-auto mb-2" />
                <p className="text-lg">Address:</p>
                <p>123 New Design Str, Ahmedabad - Gujarat.</p>
              </div>
              <div className="info-box text-center text-white">
                <img src={ii3} alt="email icon" className="mx-auto mb-2" />
                <p className="text-lg">Drop us a line:</p>
                <p>hello@Restaurent.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ffffff4c] block text-center mt-[122px] pt-[35px] pb-[8px] text-[#fff]">
          <p>2024 © Restaurant Name All Rights Reserved. Designed by Kamal</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
