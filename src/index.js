import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import background from "./clouds.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <img src={background} className="img img-fluid" />
    <App />
  </React.StrictMode>
);

reportWebVitals();
