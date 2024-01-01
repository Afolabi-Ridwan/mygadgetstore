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
import { ToastContainer, toast } from "react-toastify";
// import { useContext } from "react";
// import { Context } from "../../../redux/cartStore/storeContext";
import { useDispatch } from "react-redux";
import { CartActions } from "../../../redux/cartSlice/cartSlice";

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

  const cellphones = products[0].selectedProducts[0].cellphones[1];
  const gaming = products[0].selectedProducts[0].gaming[1];
  const computers = products[0].selectedProducts[0].computers[1];
  const tvs = products[0].selectedProducts[0].tv[1];
  const speakers = products[0].selectedProducts[0].speakers[2];

  const cellphones2 = products[0].selectedProducts[0].cellphones[2];
  const gaming2 = products[0].selectedProducts[0].gaming[2];
  const computers2 = products[0].selectedProducts[0].computers[1];

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


  const dispatch = useDispatch();

  function addToCart(itemAdded) {
    toast.success("Added to Cart!!!");

    dispatch(
      CartActions.addItem({
        id: itemAdded.id,
        name: itemAdded.itemInfo.name,
        img: itemAdded.itemInfo.itemImg[0],
        newPrice: itemAdded.itemInfo.newItemPrice,
      })
    );
  }

  return (
    <div id="newProducts">
      <div className="header">
        <div>
          <h1> New Products</h1>
        </div>
        <div>
          <ul className="lists">
            <li style={{ marginLeft: "0px" }}>Laptops</li>
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
                  <img src={eachTab.itemInfo.itemImg[0]} alt="ajk" />
                </div>

                <div className="infoTwo">
                  <p className="name"> {eachTab.itemInfo.category}</p>
                  <p className="namePlusColor">
                    {" "}
                    {eachTab.itemInfo.description1}
                  </p>

                  <div className="prices">
                    <h1 className="newItemPrice">
                      {" "}
                      ${eachTab.itemInfo.newItemPrice}
                    </h1>
                    <p className="oldItemPrice">
                      {" "}
                      {eachTab.itemInfo.oldItemPrice}
                    </p>
                  </div>
                </div>

                <div className="hr"></div>

                <div className="icons">
                  <div className=" heart">
                    <div className="eachIcon">
                      <IoHeartOutline />
                    </div>
                    <span className="heartToolTip"> ADD TO WISHLIST </span>
                  </div>
                  <div className="alt">
                    <div className="eachIcon">
                      <FaExchangeAlt />
                    </div>
                    <span className="altToolTip"> ADD TO COMPARE </span>
                  </div>
                  <div className=" eye">
                    <div className="eachIcon">
                      <FaEye />
                    </div>
                    <span className="eyeToolTip"> QUICK VIEW </span>
                  </div>
                </div>

                <button className="cartBtn" onClick={() => addToCart(eachTab)}>
                  <div className="cartIcon">
                    <FaShoppingCart />
                  </div>
                  Add to Cart
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={4000}
                  closeOnClick
                  draggable
                  pauseOnHover
                  theme="dark"
                />
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

export default NewProducts;
