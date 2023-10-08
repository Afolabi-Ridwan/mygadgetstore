import "./menu.css";

function DesktopMenu(props) {
  return (
    <div>
      <div id="menu">
        <ul>
          <li style={{ marginLeft: "0px" }}>Home</li>
          <li>Today's Deals</li>
          <li>New Products</li>
          <li>Trending Products</li>
          <li>Top Selling</li>
        </ul>
      </div>
    </div>
  );
}

export default DesktopMenu;
