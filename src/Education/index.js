import React, { useState } from "react";
import "./Education.css";
import transcript from "../transcript";
import EducationViewer from "./EducationViewer";
import EducationTabs from "./EducationTabs";

export default function Education() {
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const handleSelectInstitution = (name) => {
    const institutionObject = transcript[name];
    setSelectedInstitution((current) =>
      name === current?.name ? null : { name, details: institutionObject }
    );
  };

  return (
    <section id="education" className="container">
      <div className="educationTab">
        <EducationTabs
          transcript={transcript}
          onSelectInstitution={handleSelectInstitution}
        />
      </div>
      <div className="educationViewer">
        {!selectedInstitution && <div></div>}
        {selectedInstitution && (
          <EducationViewer institute={selectedInstitution} />
        )}
      </div>
    </section>
  );
}
