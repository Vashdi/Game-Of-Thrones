import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { INITIAL_LENGTH } from "./utils/consts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App initialLength={INITIAL_LENGTH} />
  </React.StrictMode>
);
