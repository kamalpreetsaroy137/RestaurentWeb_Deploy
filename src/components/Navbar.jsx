import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className="bg-[#71b85f] sticky top-0 z-50 px-10 py-4 border-b-[0.1px] border-gray-300 drop-shadow">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-full" />
        </a>
        <div className="flex items-center space-x-6">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white text-2xl"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Navigation Links */}
          <ul
            className={`md:flex md:space-x-6 md:items-center md:text-white md:text-[1rem] md:font-bold 
            ${
              isOpen
                ? "flex flex-col space-y-4 text-white absolute top-16 left-[-23px] px-12 py-8 w-full bg-[#71b85f] md:static md:flex-row md:space-y-0"
                : "hidden"
            }`}
          >
            <li>
              <a
                href="#home"
                className={`link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => handleClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`link ${activeLink === "about" ? "active" : ""}`}
                onClick={() => handleClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className={`link ${activeLink === "menu" ? "active" : ""}`}
                onClick={() => handleClick("menu")}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`link ${activeLink === "services" ? "active" : ""}`}
                onClick={() => handleClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={`link ${activeLink === "gallery" ? "active" : ""}`}
                onClick={() => handleClick("gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`link ${activeLink === "contact" ? "active" : ""}`}
                onClick={() => handleClick("contact")}
              >
                Contact Us
              </a>
            </li>
            <li>
              <button
                className="bg-white text-[#71b85f] py-1 px-4 rounded-full
                hover:bg-[#4b9438] hover:text-white
                transition-colors duration-400 ease-in-out"
              >
                Order Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
