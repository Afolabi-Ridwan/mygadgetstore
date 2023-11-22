import "./menu.css";
import { Link } from "react-router-dom";

function DesktopMenu(props) {
  return (
    <div>
      <div id="menu">
        <ul>
        <Link className="linkTag" to={"/home"}>
        <li  style={{ marginLeft: "0px" }}>Home</li>
        </Link>
          <li >Today's Deals</li>
          <li>New Products</li>
          <li>Trending Products</li>
          <li>Top Selling</li>
        </ul>
      </div>
    </div>
  );
}

export default DesktopMenu;
