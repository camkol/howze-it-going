import React from "react";
import Institution from "./Institution";

const EducationViewer = ({ education }) => {
  return (
    <div>
      {Object.entries(education).map(([institution, details]) => (
        <Institution key={institution} name={institution} details={details} />
      ))}
    </div>
  );
};

export default EducationViewer;
