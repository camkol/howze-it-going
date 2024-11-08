import React, { useState } from "react";
import "./App.css";
import { Navigation, NavMobile } from "./Navigation";
import Scroll from "./Scroll";
import { Landscape } from "./Landscape";
import { Projects, ProjMobile } from "./Projects";
import { Education, EduMobile } from "./Education";
import { Experience, ExpMobile } from "./Experience";
import { useMediaQuery } from "react-responsive";
import transcript from "./transcript";
import { AboutMe } from "./AboutMe";
// import Hamburger from "./Hamburger";

function App() {
  const [selectedSection, setSelectedSection] = useState("Home");

  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });

  const handleSelectSection = (label) => {
    setSelectedSection(label);
  };
  return (
    <div className="app">
      {/* <Hamburger /> */}
      {isDesktop && (
        <>
          <Navigation
            selectedSection={selectedSection}
            onSelectSection={handleSelectSection}
          />

          {selectedSection === "Home" && <Landscape />}
          {selectedSection === "Projects" && <Projects />}
          {selectedSection === "Education" && <Education />}
          {selectedSection === "Employment" && <Experience />}
          {selectedSection === "About Me" && <AboutMe />}
        </>
      )}
      {isMobile && (
        <>
          <Scroll />
          <NavMobile />
          <Landscape />
          <ProjMobile isMobile={isMobile} />
          <EduMobile isMobile={isMobile} transcript={transcript} />
          <ExpMobile />
          <AboutMe isMobile={isMobile} />
        </>
      )}
    </div>
  );
}

export default App;
