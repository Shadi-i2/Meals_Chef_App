import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router basename="/Meals_Chef_App">
      <App />
    </Router>
  </StrictMode>
);
