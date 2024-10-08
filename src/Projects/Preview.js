export default function Preview() {
  return (
    <div
      id="enlargeXystinyfindModal"
      className="modal fade"
      aria-hidden="true"
      aria-labelledby="enlargeXystinyfindModalLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <img src="/images/projects/xyline-site.JPG" />
            <button className="btn-close" type="button" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h5>
              <a
                className="card-link"
                href="https://github.com/camkol/xystinyfind.git"
                target="_blank"
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
              >
                View Page
              </a>
            </h4>
            <hr />
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
    </div>
  );
}
