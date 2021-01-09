import React, { StrictMode } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "App.jsx";
import "normalize.css";
import "index.css";

render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
