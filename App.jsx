import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Menu />
      </div>
    </div>
  );
}

export default App;
