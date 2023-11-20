import "./countdownSession.css"
import firstImage from "../images/hotdeal.png"
import CountdownTimer from "./timecounter";

function CountdownSession() {
  return (
    <div className="countdownSession">
      <img className="image" src={firstImage} alt="fst"/>
      <div className="timerTab">
        <CountdownTimer/>
        <h1> HOT DEAL THIS WEEK</h1>
        <p>New Collection Up to 50% OFF</p>
        <button> Shop Now </button>
      </div>
    </div>
  );
}

export default CountdownSession;
