import React from "react";
import "./Projects.css";
import Project from "./Project";
import Preview from "./Preview";

export default function Projects() {
  return (
    <>
      <section id="projects" className="container">
        <div id="projectGrid">
          <div className="scrollport">
            {" "}
            <h2 className="titles">Projects</h2>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>{" "}
          <div className="preview">
            <Preview />
          </div>
        </div>
      </section>
    </>
  );
}
