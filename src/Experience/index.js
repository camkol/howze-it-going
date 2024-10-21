import React, { useState } from "react";
import "./Experience.css";

// Job Data
const jobData = [
  {
    title: "Manager",
    company: "Be Original Tours- Berlin Pubcrawl",
    duration: "2019-2022",
    responsibilities: [
      "As a tour leader, responsible for guiding groups of tourists through various locations and providing entertainment of the night life.",
      "Responsible for hiring and training new tour guides, ensuring that they were knowledgeable about the sites and could effectively communicate with tourists.",
      "Was responsible for creating and managing the weekly schedules for both the tour guides and the tour groups, ensuring that everyone was assigned.",
      "Established and negotiated partnerships with venue locations to ensure that the tours had access to the best possible locations and attractions.",
      "Overseeing the payroll process, ensuring that everyone was paid accurately and on time.",
      "Managed meeting point, which included registering customers and processing payments.",
    ],
    imageSrc: "images/experiece/beoriginal(whole).png",
  },
  {
    title: "Event Service Assistant",
    company: "Erd-maennchen Event und Gastronomieservice GmbH",
    duration: "2018-2019",
    responsibilities: [
      "Assisted with the construction and deconstruction of concerts and various events.",
      "Supported delivery and pickup services of furnishings for events.",
      "Maintained accountability of working hours for the crew shift.",
    ],
    imageSrc: "images/experiece/erdmaennchen(whole).png",
  },
  {
    title: "Petroleum Supply Specialist",
    company: "US Army",
    duration: "2009-2016",
    responsibilities: [
      "Coordinated the distribution and accumulation of 10K gallons of diesel fuel allowing multinational organizations to complete a unified operation.",
      "Liaise with leadership officials to maintain accountability of 70K gallons of diesel fuel.",
      "Trained and mentored 200 Afghan military employees in the fundamentals of driving in hazardous environments.",
      "Gained knowledge of maintenance and usage on various military vehicles.",
      "Experienced in usage of tools such as pallet jack, workshop tools, generators.",
      "Obtain knowledge on assembling fuel operation systems.",
    ],
    imageSrc: "images/experiece/usarmy(whole).png",
  },
  {
    title: "Baumholder BOSS President",
    company: "BOSS Program(Us Army)",
    duration: "2015-2016",
    responsibilities: [
      "Facilitated fundraising activities generating 80% in profit from sales through hosting community events.",
      "Designed guidelines for personnel from 18 separate sections to follow in order to work more effectively.",
      "Consistently conducted briefs for new personnel inspiring their morale for the area they relocated.",
      "Coordinated events for leisure travel and volunteering of communities.",
      "Build partnerships to construct profit and nonprofit programs.",
      "Conveyed monthly, quarterly, and annual budget and activities.",
      "Instructed employees on and modified the standards required for the organization.",
    ],
    imageSrc: "images/experiece/boss(whole).png",
  },
  {
    title: "CAD Operator",
    company: "Reich Design Associates. P.L.C",
    duration: "2006-2007",
    responsibilities: [
      "Completed and modified majority of company interior, exterior and detailed architectural plans.",
    ],
    imageSrc: "images/experiece/reichdesign(whole).png",
  },
  {
    title: "CAD Operator",
    company: "Tidewater Naval Architects",
    duration: "2004-2005",
    responsibilities: [
      "Completed and modified interior, exterior and detailed naval plans.",
    ],
    imageSrc: "images/experiece/tidewater(whole).png",
  },
];

// Experience Component
export default function Experience() {
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

      <ExperienceTabs jobData={jobData} onSelectJob={handleSelectJob} />
      {!selectedJob && <div></div>}
      {selectedJob && <ExperienceViewer selectedJob={selectedJob} />}
    </section>
  );
}
function ExperienceTabs({ jobData, onSelectJob }) {
  return (
    <div className="experienceTab">
      {jobData.map((job, index) => (
        <Employer
          key={index}
          company={job.company}
          duration={job.duration}
          jobData={job}
          onSelectJob={onSelectJob}
        />
      ))}
    </div>
  );
}

function Employer({ company, duration, onSelectJob }) {
  return (
    <div className="employer" onClick={() => onSelectJob(company)}>
      <h2>{company}</h2>
      <p>{duration}</p>
    </div>
  );
}

function ExperienceViewer({ selectedJob }) {
  const { title, company, duration, responsibilities, imageSrc } = selectedJob;

  return (
    <div className="educationViewer">
      <div className="section-grid">
        <div className="grid-image active">
          <img src={imageSrc} alt={company} />
        </div>{" "}
        <h4>{company}</h4> <h3 className="font-weight-bold">{title}</h3>
        <p className="card-text">{duration}</p>
        <ul>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Create a reusable Job component
