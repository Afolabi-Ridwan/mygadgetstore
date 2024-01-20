import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Menu(props) {

  const closeMenuHandler = () => {
    return props.removeMenuHandler();
  };

  return (
    <div>
      <div className={`mobileNavbar ${props.stateHandler && "active"}`}>
        <div className={"logo"}>
          <div>
            <h1>GADGET</h1>
          </div>
          <div>
            <p id="circle"></p>
          </div>
          <p className="xMark" onClick={props.removeMenuHandler}>
            <FontAwesomeIcon icon={faXmark} />
          </p>
        </div>
        <ul>
          <li onClick={closeMenuHandler}>
            <Link className="linkTag" to={"/home"}>
              Home
            </Link>
          </li>

          <li onClick={closeMenuHandler}>
            {" "}
            <a href="#topselling" className="linkTag">
              Today's Deals
            </a>
          </li>
          <li onClick={closeMenuHandler}>
            {" "}
            <a href="#newProducts" className="linkTag">
              New Products
            </a>
          </li>
          <li onClick={closeMenuHandler}>Trending Products</li>
          <li onClick={closeMenuHandler}>Top Selling</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
