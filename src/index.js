import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "App.jsx";
import "index.css";

ReactDOM.render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
