import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <h3>{course.courseName || course.degreeName}</h3>
      {course.certificate && (
        <a href={course.certificate} target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      )}
      {course.lessons && (
        <ul>
          {course.lessons.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>
      )}
      {course.modules && (
        <div>
          {Object.entries(course.modules).map(([module, lessons], index) => (
            <div key={index}>
              <h4>{module}</h4>
              <ul>
                {lessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Course;
