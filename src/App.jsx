import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import MenuPage from "./components/MenuPage.jsx";
import StatisticsPage from "./components/StatisticsPage.jsx";
import ServicePage from "./components/ServicePage.jsx";
import TeamPage from "./components/TeamPage.jsx";
import GalleryPage from "./components/GalleryPage.jsx";
import FacilitesPage from "./components/Facilities.jsx";
import FooterPage from "./components/FooterPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <MenuPage />
      <StatisticsPage />
      <ServicePage />
      <TeamPage />
      <GalleryPage />
      <FacilitesPage />
      <FooterPage />
    </>
  );
}

export default App;
