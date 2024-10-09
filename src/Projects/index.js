import React from "react";
import "./Projects.css";
import Project from "./Project";
import Preview from "./Preview";

export default function Projects() {
  return (
    <>
      <section id="projects" className="container">
        <div>
          <h2 className="titles">Projects</h2>
        </div>
        <div id="projectGrid">
          <div className="scrollport">
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
