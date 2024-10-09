import { useState } from "react";

export default function Project({ project, onSelectProject }) {
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
      onClick={() => onSelectProject(project.name)}
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
        <hr />
        <h5 className="card-title">{project.name}</h5>
        <p className="progStyle">
          {renderLanguages(project.language)} {/* Call the render function */}
        </p>
      </div>
    </div>
  );
}
