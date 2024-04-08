import React, { useState, useEffect, createContext } from "react";
import Header from "./component/header/Header";
import "./App.css";
import Footer from "./component/footer/Footer";
import Routers from "./component/Router/Routers";
import Chat from "../src/component/main/Chat";
import GoToTop from "../src/component/main/GoToTop";

export const PassingData = createContext();
function App() {
  const [showChat, setShowChat] = useState(true);
  const [selectedCinema, setSelectedCinema] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setShowChat(false);
      } else {
        setShowChat(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleSelectCinema = (cinemaName) => {
    setSelectedCinema(cinemaName);
  };
  return (
    <>
      <PassingData.Provider value={selectedCinema}>
        <div className="App bg-white relative">
          <Header onSelectCinema={handleSelectCinema} />
          <Routers />
          <Footer />
          {showChat && <Chat />}
          {!showChat && <GoToTop />}
        </div>
      </PassingData.Provider>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap");
          .fontslt {
            font-family: "Oswald", sans-serif;
            font-weight: 600;
            color:#333333;
          `}
      </style>
    </>
  );
}

export default App;
