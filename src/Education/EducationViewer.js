import React from "react";
import Institution from "./Institution";

const EducationViewer = ({ transcript }) => {
  return (
    <div>
      {Object.entries(transcript).map(([institution, details]) => (
        <Institution key={institution} name={institution} details={details} />
      ))}
    </div>
  );
};

export default EducationViewer;
