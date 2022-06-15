import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const techs: string[] = [
  "React",
  "Styled Components",
  "Express",
  "Spotify API",
  "Heroku",
];

const ProjectOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 items-center">
      <div className="md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2 z-10">
        <p className="text-green font-mono text-13">Featured Project</p>
        <h2 className=" text-3xl text-lightest-slate font-medium mt-2">
          Halcyon Theme
        </h2>
        <p className="bg-light-navy text-lg text-light-slate p-6 mt-5">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
          <br />
          {/* <Link href={"/details"}>
            <span className="text-green text-13 font-mono cursor-pointer">
              View Details
            </span>
          </Link> */}
        </p>
        <div className="flex space-x-4 mt-4">
          {techs.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className="list-none text-light-slate font-mono text-13"
              >
                {item}
              </li>
            );
          })}
        </div>
        <div className="flex mt-6 items-center space-x-4">
          <FiGithub className="project-links" />
          <FiExternalLink className="project-links" />
        </div>
      </div>

      <div className="md:col-start-4 md:col-end-9 md:row-start-1 md:row-end-2 relative">
        <Image
          src="/project-images/halcyon.jpg"
          alt="project image"
          objectFit="contain"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default ProjectOverview;
