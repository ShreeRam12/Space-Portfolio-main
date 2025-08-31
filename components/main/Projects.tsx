import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full cursor-pointer">
        <ProjectCard
          src="/RQ.png"
          title="RapidQube Website"
          description="RapidQube Digital is a disruptive, results-driven, next-gen IT services provider solving the modern digital challenges and assisting customers to adopt digital technologies with best-in-class services."
          link="https://www.rapidqube.com/"
        />
        <ProjectCard
          src="/RQ_BH.png"
          title="RapidQube Behrain Website"
          description="We’re RapidQube Delivering solutions leveraging “best in class” digital technology to enhance your business. Let's make something amazing together."
          link="https://www.rapidqube.bh/"
        />
        <ProjectCard
          src="/HDPAY.png"
          title="HaodaPay Website"
          description="We at Haoda Pay are experts in providing payment and collecting services that support companies all over India. We guarantee that all of your payments, including incentive disbursements, vendor settlements, salary payouts, and daily pay cheques, are made on schedule each and every time."
          link="https://www.haodapay.com/"
        />
        <ProjectCard
          src="/I2G.png"
          title="I2Global Website"
          description="At i2Global, we are pioneering the future of education through a blend of innovative offline and online learning experiences. With our footprint extending across Pan India, we are dedicated to reshaping the educational landscape to meet diverse learning needs."
          link="https://www.i2global.in/"
        />
        <ProjectCard
          src="/AYN_Media.png"
          title="AYN Media Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://www.ayntechmedia.com/"
        />
        <ProjectCard
          src="/Samniya_Digital.png"
          title="Samniya Digital Website"
          description="With decades of experience, Samniya Digital offers solutions to our customers globally in the space of digital transformation and digital marketing, including Web/ Mobile App Development, append UI/UX Design services, Data Analytics, Data Migration/Visualization, and more."
          link="https://www.samniyadigital.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
