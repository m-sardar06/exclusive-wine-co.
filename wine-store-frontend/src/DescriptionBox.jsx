import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to Exclusive Wine & Co., where we curate a collection of
          exquisite wines and spirits that delight both the palate and the eye.
          Explore our extensive selection of wines, ranging from bold reds to
          crisp whites, each meticulously crafted to capture the essence of its
          terroir. Indulge in the elegance of our fine champagne, sparkling with
          effervescence and sophistication. Discover the allure of artisanal
          spirits, from aged whiskies to velvety liqueurs, each presented in
          captivating, eye-catching bottles that elevate any occasion. Whether
          you're a connoisseur seeking rare vintages or a novice eager to
          explore new tastes, Exclusive Wine & Co. invites you to savor the
          finest libations from around the world, beautifully bottled and ready
          to enchant. Additionally, we specialize in executive wine gifting,
          offering exquisite selections perfect for all occasions.
        </p>
        <p>
          Please note that the quantity specified refers to one bottle only, with the indicated liters.
          For any additional requests regarding packaging or gift wrapping, kindly specify them at the checkout stage.
          Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
