import { useState } from "react";
// import Biblioteka from "./Biblioteka.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log("Kliknięto serce! Aktualna liczba kliknięć: " + count);
  };

  return (
    <>
      <header>
        <img
          src="public/czarneKolo.png"
          className="user-awatar"
          alt="Czarne koło"
        />
        <br />
        <p className="user-cytat">6 7</p>
      </header>

      <main>
        <div className="panDiv">
          <h3>
            łączna ilość spędzona na konsumpcji XXX : <br />
            7865 h !!!
          </h3>
        </div>
        {/* placeholder */}
        <div className="panDiv">
          <p>#comedy: </p>
          <div className="pasekWyswietlany">
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
          </div>
        </div>

        {/* placeholder */}
        <div className="panDiv">
          <p>#romance:</p>
          <div className="pasekWyswietlany">
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
            <div className="test1"></div>
          </div>
        </div>

        {/* placeholder
        <div className="panDiv">
          <div></div>
        </div>

          {/* placeholder 
        <div className="panDiv">
          <div></div>
        </div> */}
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
          onClick={handleClick}
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
        <img
          src="public/sercePlaceholder.png"
          className="serce-placeholder"
          alt="serce"
        />
      </main>
      <footer>
        <p>&copy; 2026 My App. All rights reserved.</p>
      </footer>
    </>
  );
}
export default App;
