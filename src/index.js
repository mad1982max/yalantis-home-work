import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { historyLib } from "Libs/history";
import App from "App.jsx";
import "normalize.css";
import "index.css";

render(
  <Router history={historyLib} basename="/">
    <App />
  </Router>,
  document.getElementById("root")
);
