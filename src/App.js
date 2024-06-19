import React from "react";
import "./App.css";
import Home from "./components/Home";
import { MealProvider } from "./components/MealContext";

function App() {
  return (
    <div>
      <MealProvider>
        <Home />
      </MealProvider>
    </div>
  );
}

export default App;
