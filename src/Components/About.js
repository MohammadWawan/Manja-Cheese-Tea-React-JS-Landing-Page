import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Manja Cheese Tea: Perpaduan yang Mantap!
        </h1>
        <p className="primary-text">
          Manja Cheese Tea! Hadir dengan kelezatan yang memikat dan keharuman
          teh yang khas.
        </p>
        <p className="primary-text">
          Memadukan cream cheese yang lembut dengan keharuman teh pilihan
          terbaik, menciptakan harmoni rasa yang tak tergantikan.
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Lebih Detail</button>
          <a
            className="watch-video-button"
            href="https://web.facebook.com/ManjabyFF/videos/385826032175406"
          >
            <BsFillPlayCircleFill />
            Tonton Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
