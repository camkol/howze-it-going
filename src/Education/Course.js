import React, { useState } from "react";
import LessonModule from "./LessonModule";

const Course = ({ course, num, curOpen, onOpen }) => {
  // console.log(course.lessons);
  const isOpen = curOpen === num;

  const handleOpen = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className="course" onClick={handleOpen}>
      <h3 className="presser">{course.courseName || course.degreeName}</h3>
      <div className={`lessonModule${isOpen ? "" : " close"}`}>
        {course.certificate && (
          <a
            href={course.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="presser"
          >
            View Certificate
          </a>
        )}
        <LessonModule lessons={course.lessons} modules={course.modules} />
      </div>
    </div>
  );
};

export default Course;
