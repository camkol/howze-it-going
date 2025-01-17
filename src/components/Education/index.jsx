import { useState } from "react";
import "./Education.css";

export function Education({ transcript }) {
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
          selectedInstitution={selectedInstitution}
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

export function EduMobile({ transcript, isMobile }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section id="education" className="container">
      {Object.entries(transcript).map(([institution, details]) => (
        <Institution
          key={institution}
          uni={institution}
          name={{ name: institution }}
          details={details}
          isMobile={isMobile}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </section>
  );
}

function EducationTabs({
  transcript,
  onSelectInstitution,
  selectedInstitution,
}) {
  const styleHeight = { height: `${100 / Object.keys(transcript).length}%` };

  return (
    <>
      {Object.entries(transcript).map(([institution, details]) => (
        <InstitutionTab
          key={institution}
          details={{ name: institution, ...details }}
          onSelectInstitution={onSelectInstitution}
          style={styleHeight}
          selectedInstitution={selectedInstitution}
        />
      ))}
    </>
  );
}

function InstitutionTab({
  details,
  onSelectInstitution,
  selectedInstitution,
  style,
}) {
  return (
    <div
      className={`tab presser ${
        selectedInstitution?.name === details.name ? "active" : ""
      }`}
      onClick={() => onSelectInstitution(details.name)}
      style={style}
      id={details.name}
    >
      <div className="imageHold">
        <img src={details.image} alt={details.name} />
      </div>
    </div>
  );
}

const EducationViewer = ({ institute }) => {
  return (
    <>
      <Institution name={institute.name} details={institute.details} />
    </>
  );
};

const Institution = ({ name, details, isMobile, curOpen, onOpen, uni }) => {
  const isOpen = curOpen === uni;

  const handleOpen = () => {
    onOpen(isOpen ? null : uni);
  };

  return (
    <div className="institution">
      {isMobile ? (
        <div className="schoolImage" onClick={handleOpen}>
          {" "}
          <img src={details.image} alt={name} />{" "}
          <p className="duration">({details.year})</p>
        </div>
      ) : (
        <>
          <h2>{name}</h2> <p className="duration">({details.year})</p>
        </>
      )}

      <CourseList
        courses={details.courses || details.degrees}
        instOpen={isOpen}
      />
    </div>
  );
};

const CourseList = ({ courses, instOpen }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className={`courseList${instOpen ? "" : " close"}`}>
      <hr />
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

const Course = ({ course, num, curOpen, onOpen }) => {
  // console.log(course.lessons);
  const isOpen = curOpen === num;

  const handleOpen = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`course ${isOpen ? "open" : "close"}`} onClick={handleOpen}>
      <h3 className="presser courseName">
        {course.courseName || course.degreeName}
      </h3>
      <div className="lessonModule">
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

function LessonModule({ lessons, modules }) {
  return (
    <>
      {" "}
      {lessons && (
        <ul>
          {lessons.map((lesson, index) => {
            if (typeof lesson === "object") {
              // Handle the case where lesson is an object
              return (
                <li key={index}>
                  <strong>{lesson.category}:</strong>
                  <ul>
                    {lesson.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              // Render as normal string lesson
              return <li key={index}>{lesson}</li>;
            }
          })}
        </ul>
      )}
      {modules && (
        <ol>
          {Object.entries(modules).map(([module, lessons], index) => (
            <li key={index}>
              {module}

              <ul>
                {lessons.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
