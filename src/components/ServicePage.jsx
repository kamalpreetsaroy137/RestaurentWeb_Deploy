import React, { useEffect } from "react";
import ServiceBox from "./ServiceBox";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import serviceBg from "../assets/servicebg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="services"
      className="service-section relative overflow-hidden px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-16"
    >
      <div
        className="absolute top-0 left-0 w-full h-[60%] bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${serviceBg})` }}
      ></div>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6
            className="sub-title text-white text-2xl md:text-3xl lg:text-4xl font-semibold uppercase"
            data-aos="fade-up"
          >
            Services
          </h6>
          <h2
            className="title text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            data-aos="fade-up"
          >
            What We Can Do For You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceBox
            imageSrc={service1}
            title="Buffet Service"
            description="Provides you with buffet service in the morning, at noon and at night."
          />
          <ServiceBox
            imageSrc={service2}
            title="Food Delivery"
            description="Provides you with food delivery service during all meal times."
          />
          <ServiceBox
            imageSrc={service3}
            title="Cafeteria"
            description="Offers a cafeteria service with a variety of options throughout the day."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
