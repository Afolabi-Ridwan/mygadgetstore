import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import firstImage from "./images/1679220140028test";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../../redux/cartStore/storeContext";
import { useRef } from "react";
import { useSelector } from "react-redux";

function Navbar(props) {
  const [state, updateState] = useState(false);
  const dropdownHandler = () => {
    updateState((prev) => !prev);
  };

  // const { counter } = useContext(Context);
  // console.log(cartItems);

  const {cartItems,counter} = {cartItems: useSelector((state) => (state.cart.cartItems)), counter: useSelector((state) => (state.cart.counter))}
  // const cartItems = useSelector((state) => ( state.cart.cartItems));

  // const cartItems = useSelector((state) => state.cart.cartItems);
  // const counter = useSelector((state) => state.cart.counter);
  console.log(cartItems, counter);


  // const resultModalHandler = () => {
  //   setTimer(true)
  //   console.log("clicked")
  //   dialog.current.showModal();
  // }

  return (
    <div>
      <div className="navbar">
        <div className="logo" style={{ cursor: "pointer" }}>
          <div>
            <Link className="linkTag" to="/home">
              <h1> GADGET </h1>
            </Link>
          </div>

          <div>
            <p></p>
          </div>
        </div>

        <div>
          <form>
            <div className="form">
              <input type="text" placeholder="search here" />
              <button> Search </button>
            </div>
          </form>
        </div>

        <div className="icons">
          <div className="heartIconTab">
            <FontAwesomeIcon className="heart" icon={faHeart} />
            <p className={` cartNo ${counter > 0 && "cartAdded"}`}> 1</p>
          </div>
          <div className="cartIconTab">
            <Link to="/resultModal" className="linkTag">
              <FontAwesomeIcon className="cart" icon={faCartShopping} />
              <p className={`cartNo ${counter > 0 && "cartAdded"}`}>
                {" "}
                {counter}
              </p>
            </Link>
          </div>

          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div>
              <img src={firstImage} alt="sf" />
            </div>
            <div
              className={`dropDown ${state === false ? "active" : "remove"}`}
              onClick={dropdownHandler}
            >
              <FaCaretDown />
            </div>
            <div
              className={`dropUp ${state === true ? "active" : ""}`}
              onClick={dropdownHandler}
            >
              <FaCaretUp />
            </div>
          </div>
          <div className="bars" onClick={props.displayMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={`signInOrOut ${state === true ? "active" : ""}`}>
            <p> Sign In</p>
            <p style={{ marginTop: "15px" }}>
              {" "}
              <Link className="linkTag" to={"/"}>
                Sign Out
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// const cartItem = useSelector(state => state.cart)

// console.log(cartItem)
