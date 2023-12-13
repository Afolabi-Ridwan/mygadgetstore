import "./topselling.css";
import { products } from "../../data/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const cellphones = products[0].selectedProducts[0].cellphones[30];
  const gaming = products[0].selectedProducts[0].gaming[5];
  const computers = products[0].selectedProducts[0].computers[6];
  const tvs = products[0].selectedProducts[0].tv[5];
  const speakers = products[0].selectedProducts[0].speakers[6];
  
  const info = [cellphones, gaming, computers, tvs, speakers];


  return (
    <div id="topselling" className="topselling" style={{marginTop: "80px"}}>
      <div className="header">
        <div>
          <h1> Top Selling </h1>
        </div>
        
      </div>
      <div className="container">
        <Slider ref={setSliderRef} {...settings}>
          {info.map((eachTab) => (
            <div className="eachTab" key={eachTab.id}>
              <Link className="linkTag" to={`viewItem/${eachTab.id}/${eachTab.itemInfo.category}`}>
              <div className="infos">
                <div className="infoOne" >
                  <img src={eachTab.itemInfo.itemImg[0]} alt="ajk" />
                </div>

                <div className="infoTwo">
                  <p className="name"> {eachTab.itemInfo.category}</p>
                  <p className="namePlusColor"> {eachTab.itemInfo.description1}</p>

                  <div className="prices">
                    <h1 className="newItemPrice"> ${eachTab.itemInfo.newItemPrice}</h1>
                    <p className="oldItemPrice"> {eachTab.itemInfo.oldItemPrice}</p>
                    
                  </div>
                </div>
              </div>
              </Link>
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