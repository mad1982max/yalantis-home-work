import { Provider } from "react-redux";
import Main from "Components/Main/Main";
import Header from "Containers/Header/Header";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "core";

import "App.css";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app">
          <Header />
          <Main />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
