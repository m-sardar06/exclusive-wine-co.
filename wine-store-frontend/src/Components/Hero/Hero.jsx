import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import bow_icon from "../Assets/bow_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        {/* <h2>FOR AN EXECUTIVE GIFTING EXPERIENCE</h2> */}
        <div>
          <div className="hero-bow-icon">
            <h1>The Perfect Present, For Every Occasion</h1> 
            <img src={bow_icon} alt="bow" />
          </div>
          <p>EXCLUSIVE</p>
          <p>SELECTION</p>
        </div>
{/*         <div className="hero-seemore-btn">
          <div>See More</div>
          <img src={arrow_icon} alt="" />
        </div> */}
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
