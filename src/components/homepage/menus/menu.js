import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Menu(props) {
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
        <Link className="linkTag" to={"/home"}>
          
          <li>Home</li>
          </Link>
          <li>Today's Deals</li>
          <li>New Products</li>
          <li>Trending Products</li>
          <li>Top Selling</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
