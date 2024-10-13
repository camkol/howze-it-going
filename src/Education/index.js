import React from "react";
import "./Education.css";
import transcript from "../transcript";
import EducationViewer from "./EducationViewer";
import EducationTabs from "./EducationTabs";

export default function Education() {
  return (
    <section id="education" className="container">
      {/* <div className="educationTab">
        <EducationTabs transcript={transcript} />
      </div> */}
      <div className="educationViewer">
        <EducationViewer transcript={transcript} />
      </div>
    </section>
  );
}
