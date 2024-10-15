export default function LessonModule({ lessons, modules }) {
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
        <div>
          {Object.entries(modules).map(([module, lessons], index) => (
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
    </>
  );
}
