import "./App.css";
import Home from "./components/homepage/home/home";
import SignIn from "./components/signIn/signIn";
import ComputerSession from "./components/sessions/computerSession/computerSession";
import PhoneSession from "./components/sessions/phoneSession/phoneSession";
import TVSession from "./components/sessions/tvSession/tvSession";
import SpeakerSession from "./components/sessions/speakerSession/speakerSession";
import GamingSession from "./components/sessions/gamingSession/gamingSession";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ViewItem from "./components/viewItem/viewItem";
import ShopItems from "./components/shopItems/shopItems";
import Navbar from "./components/homepage/navbar/navbar";
import Menu from "./components/homepage/menus/menu";
import { useState } from "react";
import Footer from "./components/homepage/Footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const [state, updateState] = useState(false);

  function onDisplayMenu() {
    updateState(true);
  }

  const onRemoveMenuHandler = () => {
    updateState(false);
  };

  let location = useLocation();

  return (
    <div className="App">
       
      
      { location.pathname !== "/" && <Navbar displayMenu={onDisplayMenu} />}
      { location.pathname !== "/" && <Menu stateHandler={state} removeMenuHandler={onRemoveMenuHandler} />}


        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/computerSession" element={<ComputerSession />} />
          <Route path="/cellphoneSession" element={<PhoneSession />} />
          <Route path="/tvSession" element={<TVSession />} />
          <Route path="/speakerSession" element={<SpeakerSession />} />
          <Route path="/gamingSession" element={<GamingSession />} />
          <Route path="/viewItem/:id/:getItemName" element={<ViewItem />} />
          <Route path="home/viewItem/:id/:getItemName" element={<ViewItem />} />
          <Route path="/shopItems" element={<ShopItems />} />
        </Routes>

        
        { location.pathname !== "/" && <Footer />}


    </div>
  );
}

export default App;
