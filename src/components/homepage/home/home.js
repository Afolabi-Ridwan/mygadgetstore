import FirstSession from "../firstSession/firstSession";
import "./home.css";
import DesktopMenu from "../menus/desktopMenu";
import Icons from "../icons/icons";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <div>
      <DesktopMenu />
      <FirstSession />
      <Marquee pauseOnHover={true} gradientColor="none">
        <Icons />
      </Marquee>
    </div>
  );
}

export default Home;
