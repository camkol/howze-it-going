import React from "react";

import "./App.css";
import Navigation from "./Navigation";
import Scroll from "./Scroll";
import Landscape from "./Landscape";
import Projects from "./Projects";
// import Hamburger from "./Hamburger";

function App() {
  return (
    <>
      <Scroll />
      <Navigation />
      <Landscape />
      {/* <Hamburger /> */}
      <Projects />
    </>
  );
}

export default App;
