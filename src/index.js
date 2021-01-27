import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App.jsx";
import "normalize.css";
import "index.css";

render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
