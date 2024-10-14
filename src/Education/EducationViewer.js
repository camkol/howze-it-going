import React from "react";
import Institution from "./Institution";

const EducationViewer = ({ institute }) => {
  return (
    <div>
      <Institution name={institute.name} details={institute.details} />
    </div>
  );
};

export default EducationViewer;
