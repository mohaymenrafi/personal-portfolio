import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import SectionTitle from "../SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <section className="py-100">
      <SectionTitle title="Projects I've Done" number="02" />
      <div>
        <ProjectOverview />
      </div>
    </section>
  );
};

export default Projects;