import React from "react";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import SectionTitle from "../SectionTitle/SectionTitle";
import featuredProjects, {
  IFeaturedProjects,
} from "../../data/project-data/featured-projects";

const Projects = () => {
  return (
    <section className="pt-10 md:pt-14 lg:pt-100 pb-7" id="projects">
      <SectionTitle title="Projects I've Done" number="02" />

      <div className="mt-16 md:mt-0 space-y-16 md:space-y-8">
        {featuredProjects.map((item: IFeaturedProjects, idx: number) => (
          <ProjectOverview featuredProjects={item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
