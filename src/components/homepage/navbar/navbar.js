import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import firstImage from "./images/1679220140028test";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
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
          <p> 1</p>
        </div>
        <div className="cartIconTab">
          <FontAwesomeIcon className="cart" icon={faCartShopping} />
          <p> 21</p>
        </div>
        <div>
          <img src={firstImage} alt="sf" />
        </div>
        <div className="bars" onClick={props.displayMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
