import { Provider } from "react-redux";
import Main from "Components/Main/Main";
import Header from "Components/Header/Header";
import BasketProvider from "Helpers/basket/contextProvider";
import GoodsFromServerProvider from "Helpers/goodsFromServer/contextProvider";
import { store } from "Helpers/basket/core";

import "App.css";

const App = () => {
  return (
    <Provider store={store}>
      <GoodsFromServerProvider>
        <BasketProvider>
          <div className="app">
            <Header />
            <Main />
          </div>
        </BasketProvider>
      </GoodsFromServerProvider>
    </Provider>
  );
};

export default App;
