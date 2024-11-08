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

export function ExpMobile() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section className="container" id="experience">
      <div className="experienceMob">
        {" "}
        <h2 className="titles">Past Employment</h2>
        {jobData.map((job, index) => (
          <Employment
            key={index}
            num={index}
            job={job}
            curOpen={curOpen}
            onOpen={setCurOpen}
          />
        ))}
      </div>
    </section>
  );
}

function Employment({ job, curOpen, onOpen, num }) {
  const { imageSrc, company, title, duration, responsibilities } = job;

  const isOpen = curOpen === num;

  const handleOpen = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className="experienceView">
      <div className="experienceTop" onClick={handleOpen}>
        <div className="employerImage">
          <img src={imageSrc} alt={company} />
        </div>
        <p>{duration}</p>
      </div>
      <div className={`experienceTitles${isOpen ? "" : " close"}`}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <hr />
        <ul>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>{" "}
      </div>
    </div>
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
      <h3>{company}</h3>
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
