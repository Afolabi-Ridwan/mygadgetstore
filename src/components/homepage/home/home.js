import FirstSession from "../firstSession/firstSession";
import "./home.css";
import DesktopMenu from "../menus/desktopMenu";
import Icons from "../icons/icons";
import Marquee from "react-fast-marquee";
import NewProducts from "../NewProducts/newProducts";
import CountdownSession from "../countdownSession/countdownSession";
import TopSelling from "../topselling/topselling";
import Newsletter from "../NewsLetter/Newsletter";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/navbar";
import Menu from "../menus/menu";
import { useState } from "react";

function Home() {

  // const [state, updateState] = useState(false);

  
  // function onDisplayMenu() {
  //   updateState(true);
  // }

  // const onRemoveMenuHandler = () => {
  //   updateState(false);
  // };

  return (
    <div>
      {/* <Navbar displayMenu={onDisplayMenu}/>
      <Menu stateHandler={state} removeMenuHandler={onRemoveMenuHandler}/> */}
      <DesktopMenu />
      <FirstSession />
      <Marquee pauseOnHover={true} gradientColor="none">
        <Icons />
      </Marquee>
      <NewProducts />

      <CountdownSession />

      <NewProducts />

      <TopSelling />

      <Newsletter/>

      {/* <Footer/> */}

    </div>
  );
}

export default Home;
