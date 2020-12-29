import { useState } from "react";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import basketCTX from "./Context/localContext.jsx";
import "./App.css";

const App = () => {
  const [basket, setBasket] = useState([]);

  return (
    <basketCTX.Provider value={{ basket, setBasket }}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </basketCTX.Provider>
  );
};

export default App;
