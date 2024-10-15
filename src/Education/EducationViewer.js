import React from "react";
import Institution from "./Institution";

const EducationViewer = ({ institute }) => {
  return (
    <>
      <Institution name={institute.name} details={institute.details} />
    </>
  );
};

export default EducationViewer;
