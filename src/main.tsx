import React from "react";
import ReactDOM from "react-dom";
import { RouterConfig } from "./RouterConfig";
import "tailwindcss/tailwind.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>,
  document.getElementById("root")
);
