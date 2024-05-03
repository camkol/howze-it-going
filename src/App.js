import React from "react";
import "./App.css";

function App() {
  return <Navigation />;
}

function Navigation() {
  return (
    <>
      {" "}
      <header>
        <nav className="navbar" role="navigation">
          <a className="roll-out-text" href="index.html">
            <h1 id="top">Cameron Howze</h1>
          </a>
          <button
            className="navbarToggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbarTogglerIcon" />
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbarNav">
              <li className="navItem">
                <a className="navLink active" href="index.html">
                  <h4>Home</h4>
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="#education">
                  <h4>Education</h4>
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="#experience">
                  <h4>Employment</h4>
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="about.html">
                  <h4>About Me</h4>
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="library.html">
                  <h4>Library</h4>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
