import React, { useState } from "react";
import "./Experience.css";
import { jobData } from "../jobData";

// Experience Component
export function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSelectJob = (company) => {
    const jobObject = jobData.find((job) => job.company === company);
    setSelectedJob((current) =>
      company === current?.company ? null : jobObject
    );
  };

  return (
    <section className="container" id="experience">
      {/* <h2 className="titles">Past Employment</h2> */}

      <ExperienceTabs
        jobData={jobData}
        onSelectJob={handleSelectJob}
        selectedJob={selectedJob}
      />
      {!selectedJob && <div></div>}
      {selectedJob && <ExperienceViewer selectedJob={selectedJob} />}
    </section>
  );
}
function ExperienceTabs({ jobData, onSelectJob, selectedJob }) {
  const styleHeight = { height: `${100 / jobData.length}%` };

  return (
    <div className="experienceTab">
      {jobData.map((job, index) => (
        <Employer
          key={index}
          company={job.company}
          duration={job.duration}
          jobData={job}
          onSelectJob={onSelectJob}
          style={styleHeight}
          selectedJob={selectedJob}
        />
      ))}
    </div>
  );
}

function Employer({ company, onSelectJob, style, selectedJob }) {
  return (
    <div
      className={`employer presser ${
        selectedJob?.company === company ? "active" : ""
      }`}
      onClick={() => onSelectJob(company)}
      style={style}
      id=""
    >
      <h2>{company}</h2>
    </div>
  );
}

function ExperienceViewer({ selectedJob }) {
  const { title, company, duration, responsibilities, imageSrc } = selectedJob;

  return (
    <div className="experienceViewer">
      <div className="experienceTop">
        <div className="employerImage">
          <img src={imageSrc} alt={company} />
        </div>
        <div className="experienceTitles">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{duration}</p>
        </div>
      </div>
      <hr />
      <ul>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Create a reusable Job component
