import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";

import Router from "./routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
