import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import App from "App";
import { historyLib } from "Bus/Libs/history";
import "normalize.css";
import "index.css";

render(
  <Router history={historyLib} basename="/">
    <App />
  </Router>,
  document.getElementById("root")
);
