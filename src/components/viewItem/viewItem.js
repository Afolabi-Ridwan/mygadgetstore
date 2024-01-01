import { useParams } from "react-router-dom";
import { product } from "../data/data";
import "./viewItem.css";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useRef } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { Context } from "../../redux/cartStore/storeContext";
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/cartSlice/cartSlice";

function ViewItem(props) {
  const { id, getItemName } = useParams();

  const productInfo = product.filter((eachproduct) => eachproduct.id === id);
  const otherProduct = product.filter((eachproduct) => eachproduct.id !== id);

  const itemName =
    getItemName !== "tv"
      ? getItemName.charAt(0).toUpperCase() + getItemName.slice(1)
      : getItemName.toUpperCase();

  const filteredCategory = otherProduct.filter(
    (eachProduct) => eachProduct.itemInfo.category === itemName
  );

  const [view, setView] = useState(false);

  const changeViewHandler = () => {
    setView((prev) => !prev);
  };

  const message = useRef();

  function submit(e) {
    e.preventDefault();
    console.log(message.current.value);
  }

  //  const {cartAmountDispatch} = useContext(Context)
  const dispatch = useDispatch();

  function addToCart(itemAdded) {
    toast.success("Added to Cart!!!");

    dispatch( CartActions.addItem({
        id: itemAdded.id,
        name: itemAdded.itemInfo.name,
        img: itemAdded.itemInfo.itemImg[0],
        newPrice: itemAdded.itemInfo.newItemPrice,
      })
    );
  }

  return (
    <div className="viewItem">
      <div className="product">
        {productInfo.map((eachInfo) => (
          <div className="container" key={eachInfo.id}>
            <div className="firstTab">
              <div>
                <img
                  src={`../../../${eachInfo.itemInfo.itemImg[0]}`}
                  alt="ajk"
                />
              </div>
              <div className="infos">
                <p className="category">{eachInfo.itemInfo.category}</p>
                <p className="name">{eachInfo.itemInfo.name}</p>
                <h3> ${eachInfo.itemInfo.newItemPrice}</h3>
                <p className="shortDesc">{eachInfo.itemInfo.shortDesc}</p>

                <div className="buttons">
                  <div className="cartBtnContainer">
                    <button
                      onClick={() => addToCart(eachInfo)}
                      className="cartBtn"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="buyBtnContainer">
                    <button className="buyBtn">Buy Now</button>
                    <div id="filler"> </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`secondTab `}
              style={{ color: "white", marginTop: "40px" }}
            >
              <div style={{ display: "flex", marginBottom: "40px" }}>
                <p
                  onClick={changeViewHandler}
                  style={{ cursor: "pointer" }}
                  className={`description ${!view && "active"}`}
                >
                  Description
                </p>
                <p
                  onClick={changeViewHandler}
                  style={{ marginLeft: "30px", cursor: "pointer" }}
                  className={`review ${view && "active"}`}
                >
                  {"Review(2)"}
                </p>
              </div>

              {!view ? (
                <div className="descriptionTab">
                  <p>{eachInfo.itemInfo.description}</p>
                </div>
              ) : (
                <div className="reviewTab">
                  {eachInfo.itemInfo.reviews.map((eachReview, index) => (
                    <div key={index}>
                      <p className="name"> John Doe </p>
                      <p className="rating">{eachReview.rating} (rating)</p>
                      <p className="text">{eachReview.text}</p>
                    </div>
                  ))}

                  <h4> Tell us about your experience</h4>
                  <form onSubmit={submit}>
                    <input placeholder="Enter name" required />

                    <div className="stars">
                      <div>
                        {" "}
                        1 <FaStar />{" "}
                      </div>
                      <div>
                        {" "}
                        2 <FaStar />{" "}
                      </div>
                      <div>
                        {" "}
                        3 <FaStar />{" "}
                      </div>
                      <div>
                        {" "}
                        4 <FaStar />{" "}
                      </div>
                      <div>
                        {" "}
                        5 <FaStar />{" "}
                      </div>
                    </div>

                    <textarea
                      placeholder="Review Message"
                      required
                      ref={message}
                    />
                    <button> Submit </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="otherProducts">
        <h4 className="header"> You might also like </h4>

        <div className="container">
          {filteredCategory.map((eachTab) => (
            <div key={eachTab.id}>
              <div className="eachTab">
                <div className="infoOne">
                  <img
                    src={`../../../${eachTab.itemInfo.itemImg[0]}`}
                    alt="ajk"
                  />
                </div>

                <div className="infoTwo">
                  <p className="name"> {eachTab.itemInfo.name}</p>
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

                  <button
                    className="addToCartBtn"
                    onClick={() => addToCart(eachTab)}
                  >
                    {" "}
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewItem;

