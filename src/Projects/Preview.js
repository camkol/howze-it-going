export default function Preview() {
  return (
    <div className="previewer">
      <div className="previewer-image">
        <img src="/images/projects/xyline-site.JPG" alt="xyline" />
      </div>
      <hr />
      <div className="previewer-content">
        <div className="previewer-dialog">
          <div className="previewer-links">
            <h5>
              <a
                className="card-link"
                href="https://github.com/camkol/xystinyfind.git"
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
                href="https://camkol.github.io/xystinyfind/"
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
            <li>
              {"I undertook the development for a close friend's company."}
            </li>
            <li>{`Striving for consistency, I emulated the design of their old
website, then enhance upon request.`}</li>
            <li>
              {"Bootstrap was incorporated to enhance structural elements."}
            </li>
            <li>{`A JavaScript-based slideshow was implemented for visual
appeal.`}</li>
            <li>{`Leveraging my Photoshop skills, I converted images to JPG
format to enhance accessibility and reduce file sizes,
subsequently improving load times.`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
