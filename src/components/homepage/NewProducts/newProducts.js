import "./newProducts.css";
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

function NewProducts() {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
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

  const cellphones = products[0].selectedProducts[0].cellphones[1].itemInfo;
  const gaming = products[0].selectedProducts[0].gaming[1].itemInfo;
  const computers = products[0].selectedProducts[0].computers[1].itemInfo;
  const tvs = products[0].selectedProducts[0].tv[1].itemInfo;
  const speakers = products[0].selectedProducts[0].speakers[2].itemInfo;

  const cellphones2 = products[0].selectedProducts[0].cellphones[2].itemInfo;
  const gaming2 = products[0].selectedProducts[0].gaming[2].itemInfo;
  const computers2 = products[0].selectedProducts[0].computers[1].itemInfo;

  const info = [
    cellphones,
    gaming,
    computers,
    tvs,
    speakers,
    cellphones2,
    gaming2,
    computers2,
  ];

  return (
    <div className="newProducts">
      <div className="header"> 
        <div>
          <h1> New Products</h1>
        </div>
        <div>
          <ul className="lists">
            <li style={{marginLeft: "0px"}}>Laptops</li>
            <li>SmartPhones</li>
            <li>Cameras</li>
            <li>TVs</li>
            <li>Watch</li>
          </ul>
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

                <div className="hr"></div>

                <div className="icons">
                  <div className= " heart">
                    <div className="eachIcon">
                    <IoHeartOutline  />
                    </div>
                  <span className="heartToolTip"> ADD TO WISHLIST </span>
                  </div>
                  <div className= "alt">
                  <div className="eachIcon">
                  <FaExchangeAlt  />
                    </div>
                  <span className="altToolTip"> ADD TO COMPARE </span>
                  </div>
                  <div className= " eye">
                  <div className="eachIcon">
                  <FaEye />
                    </div>
                  <span className="eyeToolTip"> QUICK VIEW </span>
                  </div>
                </div>

                <button className="cartBtn">
                  <div className="cartIcon">
                  <FaShoppingCart/>
                  </div>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="navArrow" style={{marginTop: "10px"}}>
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

export default NewProducts;
