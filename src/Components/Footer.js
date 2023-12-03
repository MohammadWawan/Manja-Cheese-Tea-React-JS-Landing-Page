import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <p className="footer-title-section">Manja Cheese Tea</p>
        <br />
        <a className="footer-address-section">
          Jln.Angkasa Mulyono,Samping Coto Marina
        </a>
        <div className="footer-icons">
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
          <BsYoutube />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Help Center</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
        </div>
        <div className="footer-section-columns">
          <span>+62 812-2540-8474</span>
          <span>manjacheesetea@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
