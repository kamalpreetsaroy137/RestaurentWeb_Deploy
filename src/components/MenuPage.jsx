import React, { useEffect } from "react";
import bgShape from "../assets/vegBg.png";
import fImg from "../assets/abimg.png";
import starter from "../assets/m1.png";
import dishes from "../assets/m2.png";
import dessert from "../assets/m3.png";
import drinks from "../assets/m4.png";
import AOS from "aos";
import "aos/dist/aos.css";
const menuItems = [
  {
    name: "World's Best Lasagna",
    description: "Numquam est odit",
    calories: 590,
    price: 20,
  },
  {
    name: "World's Best Lasagna",
    description: "Numquam est odit",
    calories: 590,
    price: 20,
  },
  {
    name: "World's Best Lasagna",
    description: "Numquam est odit",
    calories: 590,
    price: 20,
  },
];

const OpeningTimes = () => (
  <div className="">
    <div className="opening-time flex items-center">
      <ul className="time-list text-white text-[1.8rem] sm:text-[1.5rem] md:text-[1rem] leading-[3rem] sm:leading-[2.5rem] md:leading-[2rem] list-none p-0">
        <li className="">Monday.................12am - 10pm</li>
        <li>Tuesday.................12am - 10pm</li>
        <li>Wednesday.................12am - 10pm</li>
        <li>Thursday.................12am - 10pm</li>
        <li>Friday.................12am - 10pm</li>
        <li>Saturday.................12am - 8pm</li>
        <li>Sunday.................Closed</li>
      </ul>
      <div className="ml-4 mt-4 md:mt-6 lg:mt-6">
        <a
          href="#"
          className="bookbtn bg-[#fff] text-[#71b85f] py-2 px-4 rounded-full shadow-md hover:bg-[#71b85f] hover:text-white hover:shadow-lg font-semibold border-0 text-sm md:text-base cursor-pointer transition-all duration-300 ease-in-out"
        >
          Order Now
        </a>
      </div>
    </div>
  </div>
);

const MenuItemsTable = ({ items }) => (
  <div className="main-content py-4">
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b-2 border-gray-300">
              <td className="border px-4 py-2">
                <div className="col-one">
                  <h4 className="title text-sm text-zinc-700">{item.name}</h4>
                  <span className="sub-title text-xs text-[#91999f]">
                    {item.description}
                  </span>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="col-two text-center">
                  <div className="count text-sm text-zinc-700">
                    {item.calories}{" "}
                    <span className="text-xs text-[#91999f]">Kcal</span>
                  </div>
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="col-three text-center">
                  <div className="price text-sm text-zinc-700">
                    ${item.price}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-8 text-center">
      <button className="bg-[#71b85f] tracking-[.15em] text-white shadow-md hover:bg-white hover:text-[#71b85f] hover:shadow-lg py-3 px-8 font-semibold rounded-full inline-block mb-0 border-0 text-sm font-100 cursor-pointer transition-all duration-300 ease-in-out">
        View Full Menu
      </button>
    </div>
  </div>
);

const MenuPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="menu" className="menu-section flex flex-col md:flex-row">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <div>
              <h6
                className="text-[#91999f] block text-2xl leading-[38px] mb-2 font-semibold uppercase"
                data-aos="fade-up"
              >
                Explore our menu
              </h6>
              <h2
                className="text-[3.2rem] text-zinc-900 leading-[70px] font-bold mb-[11px] block"
                data-aos="fade-up"
              >
                Try Our Specialities
              </h2>

              <ul className="flex flex-wrap items-center justify-between list-none py-1 text-[#91999f] text-xs">
                <li className="flex items-center gap-2 mb-2 md:mb-0">
                  <a href="#Starters" className="flex items-center gap-2">
                    <img src={starter} alt="Starters" />
                    Starters
                  </a>
                </li>
                <li className="flex items-center gap-2 mb-2 md:mb-0">
                  <a href="#Dishes" className="flex items-center gap-2">
                    <img src={dishes} alt="Dishes" />
                    Dishes
                  </a>
                </li>
                <li className="flex items-center gap-2 mb-2 md:mb-0">
                  <a href="#Deserts" className="flex items-center gap-2">
                    <img src={dessert} alt="Desserts" />
                    Deserts
                  </a>
                </li>
                <li className="flex items-center gap-2 mb-2 md:mb-0">
                  <a href="#Drinks" className="flex items-center gap-2">
                    <img src={drinks} alt="Drinks" />
                    Drinks
                  </a>
                </li>
              </ul>

              <MenuItemsTable items={menuItems} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <OpeningTimes />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
