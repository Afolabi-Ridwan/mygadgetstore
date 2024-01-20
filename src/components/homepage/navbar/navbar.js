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
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar(props) {
  const [state, updateState] = useState(false);

  const dropdownHandler = () => {
    updateState((prev) => !prev);
  };

  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };



  const counter = useSelector((state) => state.cart.counter);
  const wishListCounter = useSelector(state => state.cart.wishListCounter);
  const wishList = useSelector(state => state.cart.wishList);
  console.log(wishList)

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
              <input
                type="text"
                onChange={changeHandler}
                placeholder="search here"
              />
              <Link    to={`/searchPage/${input}`}>
              <button> Search </button>
              </Link>
            </div>
          </form>
        </div>

        <div className="icons">
          <div className="heartIconTab">
            <Link className="linkTag" to={"/wishList"}>
            <FontAwesomeIcon className="heart" icon={faHeart} />
            <p className={` cartNo ${wishListCounter >= 0 && "cartAdded"}`}> {wishListCounter}</p>
            </Link>
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

