import React, { useState } from "react";
import "./Projects.css";
import library from "../../library";
// import AnimatedCanvas from "../AnimatedCanvas";

export function Projects() {
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
          <div className="projectpreview">
            {!selectedProject && <div></div>}
            {selectedProject && <ProjectPreview project={selectedProject} />}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProjMobile({ isMobile }) {
  return (
    <section id="projects" className="container">
      {" "}
      <h2 className="titles">Projects</h2>{" "}
      {library.map(
        (project) =>
          project.star ? (
            <Project project={project} key={project.name} isMobile={isMobile} />
          ) : null // If `star` is false or undefined, don't render anything
      )}
    </section>
  );
}

function Project({ project, onSelectProject, isMobile }) {
  // Initialize state with the project's image source
  const [imageSrc, setImageSrc] = useState(project.projectImage);

  // Function to render programming languages
  const renderLanguages = (languages) => {
    return languages.map((lang) => {
      switch (lang) {
        case "redux":
          return (
            <span key={lang} className="reduxSpan">
              Redux
            </span>
          );
        case "react":
          return (
            <span key={lang} className="reactSpan">
              React
            </span>
          );
        case "jquery":
          return (
            <span key={lang} className="jqSpan">
              jQuery
            </span>
          );
        case "javascript":
          return (
            <span key={lang} className="jsSpan">
              JavaScript
            </span>
          );
        case "html":
          return (
            <span key={lang} className="htmlSpan">
              HTML
            </span>
          );
        case "bootstrap":
          return (
            <span key={lang} className="bsSpan">
              Bootstrap
            </span>
          );
        case "bulma":
          return (
            <span key={lang} className="bulmaSpan">
              Bulma
            </span>
          );
        case "css":
          return (
            <span key={lang} className="cssSpan">
              CSS
            </span>
          );
        case "sass":
          return (
            <span key={lang} className="sassSpan">
              SASS
            </span>
          );
        case "3ds":
          return (
            <span key={lang} className="dsSpan">
              3ds Max
            </span>
          );
        case "photoshop":
          return (
            <span key={lang} className="psSpan">
              Photoshop
            </span>
          );
        default:
          return null; // Handle unknown languages
      }
    });
  };

  return (
    <div
      className="card presenter"
      onClick={!isMobile ? () => onSelectProject(project.name) : undefined}
    >
      <div className="card-body presser">
        <div id={project.name} className="imager">
          <img
            alt={project.name}
            className="imagist"
            src={imageSrc}
            onMouseOver={() => setImageSrc(project.screenImage)}
            onMouseOut={() => setImageSrc(project.projectImage)}
          />
        </div>
        <h5 className="card-title">{project.name}</h5>
        {isMobile && <Buttons gitHub={project.gitHub} site={project.site} />}

        <hr />
        <p className="progStyle">
          {renderLanguages(project.language)} {/* Call the render function */}
        </p>
      </div>
    </div>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className="previewer">
      <div className="previewer-image">
        <img src={project.screenImage} alt={project.name} />
      </div>
      <hr />
      <div className="previewer-content">
        <div className="previewer-dialog">
          <div className="previewer-links">
            <Buttons gitHub={project.gitHub} site={project.site} />
          </div>
        </div>
        <div className="previewer-process">
          <h4>Process</h4>
          <ul>
            {project.process.map((process, index) => (
              <li key={index}>{process}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Buttons({ gitHub, site }) {
  return (
    <div className="buttons">
      <a href={gitHub} target="_blank" rel="noreferrer noopener">
        <button className="button">GitHub</button>
      </a>
      <a href={site} target="_blank" rel="noreferrer noopener">
        <button className="button">View</button>
      </a>
    </div>
  );
}