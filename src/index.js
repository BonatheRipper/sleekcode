import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalContext } from "./utils/GlobalContext";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
