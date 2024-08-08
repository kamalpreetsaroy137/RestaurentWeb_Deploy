import React, { useEffect } from "react";
import bgShape from "../assets/vegBg.png";
import fImg from "../assets/abb11.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="about" className="relative py-12 px-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col justify-center">
            <div>
              <h6 className="text-[#91999f] text-[1.8rem] leading-4 font-semibold mb-8 uppercase" data-aos="fade-up">
                About Us
              </h6>
              <h2 className="text-zinc-900 text-[3rem] leading-10 font-semibold uppercase mb-8"  data-aos="fade-up">
                Dedicated To <br /> Delight You
              </h2>
              <p className="text-gray-700 text-sm leading-6">
                Restaurant Name blends contemporary elegance and comfort with
                innovative cuisine and excellent service. The original menu and
                unique decor make Restaurant Name an ideal setting for business
                meetings, romantic evenings, or a night out with friends.
                <br />
                <br />A meal at Restaurant Name is one you won't soon forget and
                value you won’t believe.
              </p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex items-center justify-center">
            <div className="relative w-full">
              <img
                className="absolute w-full top-[3%] left-[-4%] h-auto animate-scaleAni"
                src={bgShape}
                alt="Background Shape"
              />
              <img className="relative top-0" src={fImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
