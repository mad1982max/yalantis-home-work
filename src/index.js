import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "App.jsx";
import "normalize.css";
import "index.css";

render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById("root")
);
