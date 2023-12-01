import "./App.css";
import Home from "./components/homepage/home/home";
import SignIn from "./components/signIn/signIn";
import ComputerSession from "./components/sessions/computerSession/computerSession";
import PhoneSession from "./components/sessions/phoneSession/phoneSession";
import TVSession from "./components/sessions/tvSession/tvSession";
import SpeakerSession from "./components/sessions/speakerSession/speakerSession";
import GamingSession from "./components/sessions/gamingSession/gamingSession";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewItem from "./components/viewItem/viewItem";
// import Navbar from "./components/homepage/navbar/navbar";
// import Menu from "./components/homepage/menus/menu";
// import { useState } from "react";

function App() {
  // const [state, updateState] = useState(false);

  // function onDisplayMenu() {
  //   updateState(true);
  // }

  // const onRemoveMenuHandler = () => {
  //   updateState(false);
  // };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>

        {/* <Navbar displayMenu={onDisplayMenu} />
        <Menu stateHandler={state} removeMenuHandler={onRemoveMenuHandler} /> */}

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/computerSession" element={<ComputerSession />} />
          <Route path="/cellphoneSession" element={<PhoneSession />} />
          <Route path="/tvSession" element={<TVSession />} />
          <Route path="/speakerSession" element={<SpeakerSession />} />
          <Route path="/gamingSession" element={<GamingSession />} />
          <Route path="/viewItem/:id/:getItemName" element={<ViewItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;