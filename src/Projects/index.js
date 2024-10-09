import React, { useState } from "react";
import "./Projects.css";
import Project from "./Project";
import Preview from "./Preview";
import library from "../library";
// import AnimatedCanvas from "../AnimatedCanvas";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  // Dont get confused with library.map

  const handleSelectProject = (name) => {
    const projectObject = library.find((proj) => proj.name === name);
    setSelectedProject((current) =>
      name === current?.name ? null : projectObject
    );
  };

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
                  <Project
                    project={project}
                    key={project.name}
                    onSelectProject={handleSelectProject}
                  />
                ) : null // If `star` is false or undefined, don't render anything
            )}
          </div>{" "}
          <div className="preview">
            {!selectedProject && <div></div>}
            {selectedProject && <Preview project={selectedProject} />}
          </div>
        </div>
      </section>
    </>
  );
}
