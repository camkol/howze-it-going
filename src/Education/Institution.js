import React from "react";
import CourseList from "./CourseList";

const Institution = ({ name, details }) => {
  return (
    <div className="institution">
      <h2>
        {name} ({details.year})
      </h2>
      <CourseList courses={details.courses || details.degrees} />
    </div>
  );
};

export default Institution;
