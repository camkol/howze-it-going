import { useState } from "react";

export default function Project() {
  const [imageSrc, setImageSrc] = useState("/images/projects/xyline.jpg");

  return (
    <div className="card presenter">
      <div className="card-body presser">
        <div id="xysTinyFind" className="imager">
          <img
            alt="xyline"
            className="imagist"
            src={imageSrc}
            onMouseOver={() => setImageSrc("/images/projects/xyline-site.JPG")}
            onMouseOut={() => setImageSrc("/images/projects/xyline.jpg")}
          />
        </div>
        <hr />
        <h5 className="card-title">Xystinyfind</h5>
        <p className="progStyle">
          <span className="jqSpan">jQuery</span>
          <span className="jsSpan">JavaScript</span>
          <span className="htmlSpan">HTML</span>
          <span className="bsSpan">Bootstrap</span>
          <span className="cssSpan">CSS</span>
          <span className="sassSpan">SASS</span>
          <span className="psSpan">Photoshop</span>
        </p>
      </div>
    </div>
  );
}
