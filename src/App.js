import React from "react";

import "./App.css";
import Navigation from "./Navigation";
import Scroll from "./Scroll";
import Landscape from "./Landscape";
import Hamburger from "./Hamburger";

function App() {
  return (
    <>
      <Scroll />
      <Navigation />
      <Landscape />
      <Hamburger />
    </>
  );
}

export default App;
