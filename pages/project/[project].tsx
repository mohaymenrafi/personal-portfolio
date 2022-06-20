import { useRouter } from "next/router";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import featuredProjects from "../../data/project-data/featured-projects";

const ProjectDetails = () => {
  const router = useRouter();
  const { project } = router.query;

  const filteredProject = featuredProjects.filter(
    (item) => project === item.url
  );
  const projectData = filteredProject[0];

  return (
    <div className="bg-navy px-12 md:px-100 lg:px-150">
      <div className="lg:max-w-5xl mx-auto py-12 md:py-100">
        <p className="text-green font-mono text-13">Featured Project</p>
        <h2 className=" text-3xl text-lightest-slate font-medium mt-2 mb-8">
          {projectData?.name}
        </h2>
        <img
          src={projectData?.image}
          alt={projectData?.name}
          className="w-full"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12">
          <div className="bg-light-navy p-8 rounded shadow-md space-y-4">
            {projectData?.features.map((item: string, idx: number) => (
              <li className="list-none text-base text-lightest-slate" key={idx}>
                <BiRightArrow className="text-green text-13 mr-2 mb-[2px] inline" />
                {item}
              </li>
            ))}
          </div>
          <div>
            <h2 className="text-xl text-lightest-slate">Techs Used</h2>

            <div className={`flex flex-wrap mt-4`}>
              {projectData?.techs.map((item: string, index: number) => {
                return (
                  <li
                    key={index}
                    className={`list-none text-light-slate font-mono text-13 mr-4`}
                  >
                    {item}
                  </li>
                );
              })}
            </div>
            <h2 className="text-xl text-lightest-slate mt-6">Sources</h2>
            <div className="space-x-4 text-green font-mono text-13 cursor-pointer">
              <a href={projectData?.githubUrl} target="_blank" rel="noreferrer">
                Github Repo
              </a>
              {projectData?.gitBackend && (
                <a
                  href={projectData?.gitBackend}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo (Server)
                </a>
              )}
              <a href={projectData?.liveUrl} target="_blank" rel="noreferrer">
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
