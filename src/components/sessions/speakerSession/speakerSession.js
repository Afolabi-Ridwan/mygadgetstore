import "./speakerSession.css";
import SessionControl from "../sessionControl/sessionControl";

function SpeakerSession() {
  return (
    <div className="speakerSession">
      <SessionControl itemName={"speakers"} />
    </div>
  );
}

export default SpeakerSession;
