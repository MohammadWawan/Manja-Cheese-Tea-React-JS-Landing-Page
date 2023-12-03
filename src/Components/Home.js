import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" href="/src/Components/Home.js" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Selamat datang di Manja Cheese Lovers, tempat kelezatan dan
            kreativitas bersatu!
          </h1>
          <p className="primary-text">
            Kami destinasi cita rasa bagi pecinta cemilan dan cheese tea yang
            mencari pengalaman istimewa. Dengan cinta dan dedikasi, kami
            hadirkan ragam cemilan lezat dan inovatif langsung ke tangan anda.
          </p>
          <button className="secondary-button">
            Lihat Menu
            <FiArrowRight />
            {""}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
