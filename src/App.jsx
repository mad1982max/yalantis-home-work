import { Provider } from "react-redux";
import Main from "Components/Main/Main";
import Header from "Components/Header/Header";
import GoodsFromServerProvider from "Helpers_/goodsFromServer/contextProvider";
import { store } from "core";

import "App.css";

const App = () => {
  return (
    <Provider store={store}>
      <GoodsFromServerProvider>
        <div className="app">
          <Header />
          <Main />
        </div>
      </GoodsFromServerProvider>
    </Provider>
  );
};

export default App;
