import React from "react";
import "./Projects.css";
import Project from "./Project";
import Preview from "./Preview";
import library from "../library";

export default function Projects() {
  return (
    <>
      <section id="projects" className="container">
        <div id="projectGrid">
          <div className="scrollport">
            {" "}
            <h2 className="titles">Projects</h2>
            {library.map(
              (project) =>
                project.star ? (
                  <Project project={project} key={project.name} />
                ) : null // If `star` is false or undefined, don't render anything
            )}
          </div>{" "}
          <div className="preview">
            <Preview />
          </div>
        </div>
      </section>
    </>
  );
}
