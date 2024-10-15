import React, { useState } from "react";
import Course from "./Course";

const CourseList = ({ courses }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="courseList">
      {courses.map((course, index) => (
        <Course
          key={index}
          num={index}
          curOpen={curOpen}
          onOpen={setCurOpen}
          course={course}
        />
      ))}
    </div>
  );
};

export default CourseList;
