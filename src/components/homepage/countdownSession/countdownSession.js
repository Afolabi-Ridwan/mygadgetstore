import "./countdownSession.css"
import firstImage from "../images/hotdeal.png"
import CountdownTimer from "./timecounter";
import { Link } from "react-router-dom";

function CountdownSession() {
  return (
    <div className="countdownSession">
      <img className="image" src={firstImage} alt="fst"/>
      <div className="timerTab">
        <CountdownTimer/>
        <h1> HOT DEAL THIS WEEK</h1>
        <p>New Collection Up to 50% OFF</p>
        <button> 
          <Link className="linkTag" to={"/shopitems"}>
          Shop Now
          </Link>
           </button>
      </div>
    </div>
  );
}

export default CountdownSession;
