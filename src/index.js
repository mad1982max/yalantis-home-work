import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
