import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GamePanel from "./components/GamePanel";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <GamePanel />
    <Footer />
  </div>
);

export default App;
