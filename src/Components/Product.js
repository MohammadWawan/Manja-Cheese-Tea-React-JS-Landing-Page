import React from "react";
import Produk1 from "../Assets/produk 1.png";
import Produk2 from "../Assets/produk 2.png";
import Produk3 from "../Assets/produk 3.png";
import Produk4 from "../Assets/produk 4.png";
import Produk5 from "../Assets/produk 5.png";
import Produk6 from "../Assets/produk 6.png";
import Produk7 from "../Assets/produk 7.png";
import Produk8 from "../Assets/produk 8.png";
import Produk9 from "../Assets/produk 9.png";
import Produk10 from "../Assets/produk 10.png";

const Work = () => {
  const workInfoData = [
    {
      image: Produk1,
      title: "Pinky Promise",
      text: "Varian Rasa Red Velvet",
      price: "Rp.17.000",
    },
    {
      image: Produk2,
      title: "Coffee Unicorn",
      text: "Varian Rasa Coffee",
      price: "Rp.17.000",
    },
    {
      image: Produk3,
      title: "Kuta Sunbeam",
      text: "Varian Rasa Thai Tea",
      price: "Rp.17.000",
    },
    {
      image: Produk10,
      title: "Pop Ice",
      text: "Semua Varian Rasa (Bisa Request Hangat)",
      price: "Rp.5.000",
    },
    {
      image: Produk4,
      title: "Pisang Nugget Tiramisu",
      text: "Topping Choco Chips",
      price: "Rp.25.000",
    },
    {
      image: Produk5,
      title: "Pisang Nugget Cheese",
      text: "Topping Taburan Keju Parut",
      price: "Rp.25.000",
    },
    {
      image: Produk6,
      title: "Pisang Nugget Cappucino",
      text: "Topping Taburan Bubuk Milo",
      price: "Rp.25.000",
    },
    {
      image: Produk7,
      title: "Pisang Nugget Cappucino",
      text: "Topping Taburan Cookies Oreo",
      price: "Rp.25.000",
    },
    {
      image: Produk8,
      title: "Pisang Nugget Green Tea",
      text: "Topping Taburan Cookies Oreo",
      price: "Rp.25.000",
    },
    {
      image: Produk9,
      title: "Pisang Nugget Mix (Green Tea+Cappucino)",
      text: "Topping Taburan Choco Chips+Milo",
      price: "Rp.25.000",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Product</p>
        <h1 className="primary-heading">Varian Product</h1>
        <p className="primary-text">
          Kami menyediakan beberapa varian makanan dan minuman yang pastinya
          dapat memanjakan mood mu yang lagi galau-galaunya
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <p className="product-price">{data.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
