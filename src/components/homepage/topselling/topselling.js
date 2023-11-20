import "./topselling.css";
import { products } from "../../data/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoHeartOutline } from "react-icons/io5";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaExchangeAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { useState } from "react";

function TopSelling() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cellphones = products[0].selectedProducts[0].cellphones[30].itemInfo;
  const gaming = products[0].selectedProducts[0].gaming[5].itemInfo;
  const computers = products[0].selectedProducts[0].computers[6].itemInfo;
  const tvs = products[0].selectedProducts[0].tv[5].itemInfo;
  const speakers = products[0].selectedProducts[0].speakers[6].itemInfo;

  const info = [cellphones, gaming, computers, tvs, speakers];

  return (
    <div className="topselling" style={{marginTop: "80px"}}>
      <div className="header">
        <div>
          <h1> Top Selling </h1>
        </div>
        
      </div>
      <div className="container">
        <Slider ref={setSliderRef} {...settings}>
          {info.map((eachTab) => (
            <div className="eachTab" key={eachTab.id}>
              <div className="infos">
                <div className="infoOne">
                  <img src={eachTab.itemImg[0]} alt="ajk" />
                </div>

                <div className="infoTwo">
                  <p className="name"> {eachTab.category}</p>
                  <p className="namePlusColor"> {eachTab.description1}</p>

                  <div className="prices">
                    <h1 className="newItemPrice"> ${eachTab.newItemPrice}</h1>
                    <p className="oldItemPrice"> {eachTab.oldItemPrice}</p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="navArrow" style={{ marginTop: "10px" }}>
          <button onClick={sliderRef?.slickPrev} className="leftArrow">
            <FaChevronLeft />
          </button>
          <button onClick={sliderRef?.slickNext} className="rightArrow">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
