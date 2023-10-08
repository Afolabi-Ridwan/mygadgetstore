import "./tvSession.css";
import SessionControl from "../sessionControl/sessionControl";

function TVSession() {
  return (
    <div className="TVSession">
      <SessionControl itemName={"tv"} />
    </div>
  );
}

export default TVSession;
