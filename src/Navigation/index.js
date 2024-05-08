import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <>
      <header>
        <nav className="navbar" role="navigation">
          <a className="roll-out-text" href="index.html">
            <h1 id="top">Cameron Howze</h1>
          </a>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <button className="navbarToggler" aria-label="Toggle navigation">
              Menu
            </button>{" "}
            <ul className="navbarNav">
              <li className="navItem">
                <a className="navLink" href="#projects">
                  <h4>Projects</h4>
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
