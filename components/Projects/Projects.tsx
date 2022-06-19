import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import SectionTitle from "../SectionTitle/SectionTitle";

const Projects = () => {
  return (
    <section className="pt-10 md:pt-14 lg:pt-100 pb-7" id="projects">
      <SectionTitle title="Projects I've Done" number="02" />

      <div className="mt-16 md:mt-0 space-y-16 md:space-y-8">
        <ProjectOverview left={false} />
        <ProjectOverview left={true} />
        <ProjectOverview left={false} />
      </div>
    </section>
  );
};

export default Projects;
