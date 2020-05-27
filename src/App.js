import React from "react";
import "./App.css";
import Perfume from "./components/Perfume";
import Cart from "./components/Cart";

const App = () => {
  return (
      <div className="app">
       <Cart />
        <Perfume />
      </div>
  );
};

export default App;
