import { useState } from "react";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import CTX from "./Context/localContext.jsx";
import "./App.css";

const App = () => {
  const [basket, setBasket] = useState([]);

  return (
    <CTX.Provider value={{ basket, setBasket }}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </CTX.Provider>
  );
};

export default App;
