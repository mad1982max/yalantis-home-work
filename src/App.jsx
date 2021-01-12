import Main from "Components/Main/Main";
import Header from "Components/Header/Header";
import BasketProvider from "Helpers/basket/contextProvider";
import GoodsFromServerProvider from "Helpers/goodsFromServer/contextProvider";
import "App.css";

const App = () => {
  return (
    <GoodsFromServerProvider>
      <BasketProvider>
        <div className="app">
          <Header />
          <Main />
        </div>
      </BasketProvider>
    </GoodsFromServerProvider>
  );
};

export default App;
