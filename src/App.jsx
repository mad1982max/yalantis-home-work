import { Provider } from "react-redux";
import Main from "Components/Main/Main";
import Header from "Containers/Header/Header";
import { store } from "core";

import "App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
