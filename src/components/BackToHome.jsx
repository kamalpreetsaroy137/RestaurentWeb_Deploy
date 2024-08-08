import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { IoIosArrowUp } from "react-icons/io";
const BackToHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="z-[999] fixed bottom-4 right-4 flex flex-col space-y-4">
      {isVisible && (
        <button
          className={`w-[3rem] h-[3rem] p-0 text-white bg-[#71b85f] fixed z-[999] bottom-[1.7rem] right-[1.7rem] rounded-[.4rem] transform transition-all duration-300 ${
            isVisible ? "translate-y-0 active" : "translate-y-[150px]"
          } shadow-lg hover:bg-[#5a9648] flex items-center justify-center`} // Added flex, items-center, and justify-center
          onClick={scrollToTop}
          data-aos="fade-down"
        >
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToHome;
