import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
