import { useState } from "react";
import Main from "Components/Main/Main";
import Header from "Components/Header/Header";
import { basketCTX } from "Context/localContext.jsx";
import fetchedDataCTX from "Helpers/goodsFromServer/context"
import useFetchedData from "Helpers/goodsFromServer/state";
import "App.css";

const App = () => {
  const [basket, setBasket] = useState([]);
  // const [allGoods, setAllGoods] = useState([]);
  const {allGoods, setAllGoods, isLoading} = useFetchedData();

  return (
    <fetchedDataCTX.Provider value={{ allGoods, setAllGoods, isLoading }}>
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
