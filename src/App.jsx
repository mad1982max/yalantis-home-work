import { useState } from "react";
import { HashRouter } from "react-router-dom";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import basketCTX from "./Context/localContext.jsx";
import "./App.css";

const App = () => {
  const [basket, setBasket] = useState([]);

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <basketCTX.Provider value={{ basket, setBasket }}>
        <div className="app">
          <Header />
          <Main />
        </div>
      </basketCTX.Provider>
    </HashRouter>
  );
};

export default App;
