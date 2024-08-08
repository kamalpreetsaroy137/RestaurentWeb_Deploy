import React from "react";
import stat01 from "../assets/stat01.png";
import stat02 from "../assets/stat02.png";
import stat03 from "../assets/stat03.png";
import stat04 from "../assets/stat04.png";
import StatItem from "./StatItem.jsx";

const StatisticsPage = () => {
  const statsData = [
    { imageSrc: stat01, count: 350, title: "PIZZAS" },
    { imageSrc: stat02, count: 447, title: "DESERTS" },
    { imageSrc: stat03, count: 60, title: "SALADS" },
    { imageSrc: stat04, count: 60, title: "PASTAS" },
  ];

  return (
    <section className="statistics-section py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              imageSrc={stat.imageSrc}
              count={stat.count}
              title={stat.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsPage;
