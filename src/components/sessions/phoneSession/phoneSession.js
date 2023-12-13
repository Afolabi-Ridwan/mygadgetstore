import SessionControl from "../sessionControl/sessionControl";
import { useContext } from "react";
// import CartNoContext from "../../../redux/cartNoContext";
function PhoneSession() {

  return (
    <div className="phoneSession">
      <SessionControl itemName={"cellphones"} />
    </div>
  );
}

export default PhoneSession;
