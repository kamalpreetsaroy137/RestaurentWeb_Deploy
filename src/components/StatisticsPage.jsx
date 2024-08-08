import React from "react";
import stat01 from "../assets/stat01.png";
import stat02 from "../assets/stat02.png";
import stat03 from "../assets/stat03.png";
import stat04 from "../assets/stat04.png";
import OdometerCounter from "./OdometerCounter.jsx";

const StatisticsPage = () => {
  return (
    <section className="statistics-section py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="statistics-wrapper">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="stat-item text-center relative">
                <div className="icon mb-4">
                  <img src={stat01} alt="Pizzas" className="mx-auto" />
                </div>
                <div className="stat-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] bg-[#4b9438] text-center rounded-full pt-[3rem]">
                  <OdometerCounter count={350} />
                  <span className="text-3xl font-semibold text-white">K</span>
                  <h3 className="info block mt-2 text-lg leading-[25px] uppercase text-white">
                    PIZZAS
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="stat-item text-center relative">
                <div className="icon mb-4">
                  <img src={stat02} alt="Deserts" className="mx-auto" />
                </div>
                <div className="stat-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] bg-[#4b9438] text-center rounded-full pt-4">
                  <OdometerCounter count={447} />
                  <span className="text-3xl font-semibold text-white">K</span>
                  <h3 className="info block mt-2 text-lg leading-[25px] uppercase text-white">
                    DESERTS
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="stat-item text-center relative">
                <div className="icon mb-4">
                  <img src={stat03} alt="Salads" className="mx-auto" />
                </div>
                <div className="stat-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] bg-[#4b9438] text-center rounded-full pt-4">
                  <OdometerCounter count={60} />
                  <span className="text-3xl font-semibold text-white">K</span>
                  <h3 className="info block mt-2 text-lg leading-[25px] uppercase text-white">
                    SALADS
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="stat-item text-center relative">
                <div className="icon mb-4">
                  <img src={stat04} alt="Pastas" className="mx-auto" />
                </div>
                <div className="stat-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] bg-[#4b9438] text-center rounded-full pt-4">
                  <OdometerCounter count={60} />
                  <span className="text-3xl font-semibold text-white">K</span>
                  <h3 className="info block mt-2 text-lg leading-[25px] uppercase text-white">
                    PASTAS
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsPage;
