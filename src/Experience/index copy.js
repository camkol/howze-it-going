import React from "react";

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
  // Add other jobs here ...
];

// Experience Component
export default function Experience() {
  return (
    <section className="container" id="experience">
      <h2 className="titles">Past Employment</h2>
      <div className="desktop">
        {jobData.map((job, index) => (
          <div key={index} id={`section${index + 1}`}>
            <Job
              title={job.title}
              company={job.company}
              duration={job.duration}
              responsibilities={job.responsibilities}
              imageSrc={job.imageSrc}
              altText={job.altText}
            />
          </div>
        ))}
      </div>
      <div className="mobile row">
        {jobData.map((job, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <div className="card-header">
                <img
                  className="card-img-top portrait"
                  src={job.imageSrc}
                  alt={job.altText}
                />
                <h3 className="font-weight-bold">{job.title}</h3>
                <h4>{job.company}</h4>
                <p className="card-text">{job.duration}</p>
              </div>
              <div className="card-body">
                <ul>
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Create a reusable Job component
const Job = ({ title, company, duration, responsibilities, imageSrc }) => {
  return (
    <div className="section-grid">
      <div className="left">
        <div className="grid-text">
          <h3 className="font-weight-bold">{title}</h3>
          <h4>{company}</h4>
          <p className="card-text">{duration}</p>
          <ul>
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="grid-image active">
          <img src={imageSrc} alt={company} />
        </div>
      </div>
    </div>
  );
};
