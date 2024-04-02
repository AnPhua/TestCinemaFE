import React, { useState, useEffect } from "react";
import Header from "./component/header/Header";
import "./App.css";
import Footer from "./component/footer/Footer";
import Routers from "./component/Router/Routers";
import Chat from "../src/component/main/Chat";
import GoToTop from "../src/component/main/GoToTop";

function App() {
  const [showChat, setShowChat] = useState(true);

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

  return (
    <>
      <div className="App bg-white relative">
        <Header />
        <Routers />
        <Footer />
        {showChat && <Chat />}
        {!showChat && <GoToTop />}
      </div>

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
