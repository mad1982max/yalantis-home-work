import { useState } from "react";
import Main from "Components/Main/Main";
import Header from "Components/Header/Header";
import { basketCTX, fetchedDataCTX } from "Context/localContext.jsx";
import "App.css";

const App = () => {
  const [basket, setBasket] = useState([]);
  const [allGoods, setAllGoods] = useState([]);

  return (
    <fetchedDataCTX.Provider value={{ allGoods, setAllGoods }}>
      <basketCTX.Provider value={{ basket, setBasket }}>
        <div className="app">
          <Header />
          <Main />
        </div>
      </basketCTX.Provider>
    </fetchedDataCTX.Provider>
  );
};

export default App;
