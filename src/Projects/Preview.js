export default function Preview({ project }) {
  return (
    <div className="previewer">
      <div className="previewer-image">
        <img src={project.screenImage} alt={project.name} />
      </div>
      <hr />
      <div className="previewer-content">
        <div className="previewer-dialog">
          <div className="previewer-links">
            <h5>
              <a
                className="card-link"
                href={project.gitHub}
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </h5>
            <hr />
            <h4>
              <a
                className="card-link"
                href={project.site}
                target="_blank"
                rel="noreferrer noopener"
              >
                View Page
              </a>
            </h4>
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
