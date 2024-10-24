import React, { useState } from "react";

import "./App.css";
import Navigation from "./Navigation";
// import Scroll from "./Scroll";
import Landscape from "./Landscape";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
// import Hamburger from "./Hamburger";

function App() {
  const [selectedSection, setSelectedSection] = useState("Home");

  const handleSelectSection = (label) => {
    setSelectedSection(label);
  };
  return (
    <>
      {/* <Scroll /> */}
      {/* <Hamburger /> */}
      <Navigation
        selectedSection={selectedSection}
        onSelectSection={handleSelectSection}
      />

      {selectedSection === "Home" && <Landscape />}
      {selectedSection === "Projects" && <Projects />}
      {selectedSection === "Education" && <Education />}
      {selectedSection === "Employment" && <Experience />}
    </>
  );
}

export default App;
