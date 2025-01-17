import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./App.css";

import { Navigation, NavMobile } from "./components/Navigation";
import { Landscape } from "./components/Landscape";
import { Projects, ProjMobile } from "./components/Projects";
import { Education, EduMobile } from "./components/Education";
import { Experience, ExpMobile } from "./components/Experience";
import { AboutMe } from "./components/AboutMe";
import { Storage } from "./components/Storage";
import Scroll from "./components/Scroll";
import FloatingButtons from "./components/FloatingButtons";

import transcript from "./transcript";
import library from "./library.json";

// import dribbble from "./assets/dribbble.svg";
// import medium from "./assets/medium.svg";
// import spotify from "./assets/spotify.svg";
// import twitter from "./assets/twitter.svg";

import linkedin from "./assets/linkedin.svg";
import instagram from "./assets/instagram.svg";
import github from "./assets/github.svg";
import facebook from "./assets/facebook.svg";
import mail from "./assets/mail.svg";

function App() {
  const [selectedSection, setSelectedSection] = useState("Home");

  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });

  const handleSelectSection = (label) => {
    setSelectedSection(label);
  };

  const buttonsList = [
    // { onClick: () => window.open("https://medium.com", "_blank"), src: medium },
    // {
    //   onClick: () => window.open("https://dribbble.com", "_blank"),
    //   src: dribbble,
    // },
    // {
    //   onClick: () => window.open("https://www.spotify.com", "_blank"),
    //   src: spotify,
    // },
    // {
    //   onClick: () => window.open("https://twitter.com", "_blank"),
    //   src: twitter,
    // },
    {
      onClick: () =>
        window.open("https://www.instagram.com/koliyus83/", "_blank"),
      src: instagram,
    },

    {
      onClick: () =>
        window.open("https://www.facebook.com/wondering.thomas", "_blank"),
      src: facebook,
    },
    {
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/cameron-howze-28a646109",
          "_blank"
        ),
      src: linkedin,
    },
    {
      onClick: () => window.open("https://github.com/camkol", "_blank"),
      src: github,
    },
    {
      onClick: () => window.open("mailto:cameronhowze4@outlook.com", "_blank"),
      src: mail,
    },
  ];

  return (
    <div className="app">
      {" "}
      {isDesktop && (
        <>
          {" "}
          <FloatingButtons
            buttonsList={buttonsList}
            buttonType="plus"
            top={"80%"}
            left={"90%"}
            degree={90}
            distance={-100}
          />
          <Navigation
            selectedSection={selectedSection}
            onSelectSection={handleSelectSection}
          />
          {selectedSection === "Home" && <Landscape />}
          {selectedSection === "Projects" && <Projects library={library} />}
          {selectedSection === "Education" && (
            <Education transcript={transcript} />
          )}
          {selectedSection === "Employment" && <Experience />}
          {selectedSection === "About Me" && <AboutMe />}
          {selectedSection === "Storage" && <Storage library={library} />}
        </>
      )}
      {isMobile && (
        <>
          {" "}
          <FloatingButtons
            buttonsList={buttonsList}
            buttonType="plus"
            top={"80%"}
            left={"85%"}
            degree={90}
            distance={-100}
          />
          <Scroll />
          <NavMobile />
          <Landscape />
          <ProjMobile library={library} isMobile={isMobile} />
          <EduMobile isMobile={isMobile} transcript={transcript} />
          <ExpMobile />
          <AboutMe isMobile={isMobile} />
          <Storage library={library} isMobile={isMobile} />
        </>
      )}
      {/* <Hamburger /> */}
    </div>
  );
}

export default App;
