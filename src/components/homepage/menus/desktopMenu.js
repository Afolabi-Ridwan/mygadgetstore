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
          
          <li> <a href="#topselling" className="linkTag">Today's Deals </a></li>
          
          <li> <a href="#newProducts" className="linkTag">New Products</a></li>
          <li>Trending Products</li>
          <li>Top Selling</li>
        </ul>
      </div>
    </div>
  );
}

export default DesktopMenu;
