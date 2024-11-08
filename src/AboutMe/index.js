import React from "react";
import "./AboutMe.css"; // Add a CSS file for styling if necessary

export function AboutMe({ isMobile }) {
  return (
    <section className="container" role="presentation" id="aboutMe">
      {isMobile && <h2 className="titles">About Me</h2>}
      <div className="aboutRow">
        <div className="picHolder">
          <img id="profilePic" src="images/profile.jpg" alt="Profile" />
        </div>
        <div className="textHolder">
          <p>
            Born in Mount Holly, New Jersey, on February 25, 1983, I have always
            approached life with curiosity and an eagerness to explore new
            challenges. My career has been shaped by a wide array of experiences
            across fields such as event services, tourism, military operations,
            and now web development. These chapters of my life have instilled in
            me a unique blend of skills—adaptability, leadership, critical
            thinking, and an unwavering commitment to continuous growth.
          </p>
          <p>
            After completing my education in Computer Drafting and Design and
            Digital Entertainment and Game Design, I began my professional
            journey as a CAD operator, contributing to architectural and naval
            projects with precision and creativity. This early experience honed
            my technical expertise and ability to manage complex design
            processes.
          </p>
          <p>
            Later, my path led me to serve in the U.S. Army for nearly eight
            years as a Petroleum Supply Specialist. I took pride in ensuring the
            seamless distribution of critical resources and mentoring others,
            even under the most challenging conditions. My time in the military
            taught me the value of teamwork, meticulous planning, and
            perseverance—traits that continue to guide me in every endeavor.
          </p>
          <p>
            Following my military career, I embraced roles in event services and
            tourism, where I excelled in managing people, creating memorable
            experiences, and fostering meaningful connections. Notably, as a
            Manager for Be Original Tours, I oversaw operations in Berlin’s
            vibrant nightlife, building partnerships, training employees, and
            managing complex schedules.
          </p>
          <p>
            However, my passion for technology and creativity never faded. In
            2022, I made the decision to pivot my career toward web and software
            development. Taking this leap required courage and a deep belief in
            the limitless potential of the tech industry. I invested in my
            education, enrolling in courses from Codecademy, freeCodeCamp, and
            Udemy, and earned certificates in Full-Stack Development,
            JavaScript, and React. This journey of self-discovery and upskilling
            reignited my love for problem-solving and design, which I now
            channel into creating intuitive, user-friendly applications.
          </p>
          <p>
            Today, as a freelance web developer, I take pride in delivering
            solutions that blend creativity with functionality. My work for
            clients like XysTinyFinds LLC involves everything from recreating
            designs to enhancing websites with JavaScript and optimizing images
            for improved performance. These projects exemplify my ability to
            bridge technical skills with user-centered design.
          </p>
          <p>
            Looking ahead, I am excited to bring my diverse background to the
            world of web development. My experiences—whether managing tours,
            leading soldiers, or crafting architectural designs—have all
            contributed to a strong foundation of resilience, innovation, and
            collaboration. I am eager to continue growing in this field,
            leveraging my unique journey to make meaningful contributions to the
            tech community. With a deep respect for continuous learning and a
            commitment to excellence, I am confident in my ability to thrive in
            a dynamic environment that values creativity, innovation, and
            teamwork.
          </p>
        </div>
      </div>
    </section>
  );
}
