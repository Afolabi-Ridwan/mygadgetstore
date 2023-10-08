import React from "react";
// import Marquee from "react-fast-marquee";
import "./icons.css";

import firstImage from "../images/shipping-truck.svg";
import secondImage from "../images/chat-support.svg";
import thirdImage from "../images/money-returns.svg";
import fourthImage from "../images/discount.svg";

function Icons() {
  return (
    <div className="icons-content">
      <div className="marquee-icons">
        <div className="svgImages">
          <img src={firstImage} alt="hr" className="svgIcons" />
        </div>
        <div>
          <h3>Free Delivery</h3>
          <p>Free shipping on all order</p>
        </div>
      </div>

      <div className="marquee-icons">
        <div className="svgImages">
          <img src={secondImage} alt="rf" className="svgIcons" />
        </div>
        <div>
          <h3>Online Support 24/7</h3>
          <p>Support online 24 hours a day</p>
        </div>
      </div>
      <div className="marquee-icons">
        <div className="svgImages">
          <img src={thirdImage} alt="jsrd" className="svgIcons return" />
        </div>
        <div>
          <h3>Money Return</h3>
          <p>Guaranteed under 7 days</p>
        </div>
      </div>
      <div className="marquee-icons">
        <div className="svgImages">
          <img src={fourthImage} alt="fskj" className="svgIcons" />
        </div>
        <div>
          <h3>Member Discount</h3>
          <p>On every order under $100</p>
        </div>
      </div>
    </div>
  );
}

export default Icons;
