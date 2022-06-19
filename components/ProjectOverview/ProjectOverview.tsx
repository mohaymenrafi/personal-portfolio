import Image from "next/image";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const techs: string[] = [
  "React",
  "Styled Components",
  "Express",
  "Spotify API",
  "Heroku",
];

interface IProps {
  left: boolean;
}

const ProjectOverview: React.FC<IProps> = ({ left }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 items-center bg-[url('/project-images/halcyon.jpg')] md:bg-[url('/project-images/transparent.png')] bg-cover bg-no-repeat bg-center">
      <div
        className={`${
          left
            ? "md:col-start-1 md:col-end-6"
            : "md:col-start-4 md:col-end-9 md:text-right"
        } md:row-start-1 md:row-end-2 z-10 p-12 md:p-0 bg-light-navy/90 md:bg-transparent`}
      >
        <p className="text-green font-mono text-13">Featured Project</p>
        <h2 className=" text-3xl text-lightest-slate font-medium mt-2">
          Halcyon Theme
        </h2>
        <p className="md:bg-light-navy text-lg text-light-slate md:p-6 mt-5">
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
        <div className={`flex flex-wrap mt-4 ${!left && "md:justify-end"}`}>
          {techs.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className={`list-none text-light-slate font-mono text-13 ${
                  left ? "mr-4" : "mr-4 md:mr-0 md:ml-4"
                }`}
              >
                {item}
              </li>
            );
          })}
        </div>
        <div
          className={`flex mt-6 items-center space-x-4 ${
            !left && "md:justify-end"
          }`}
        >
          <FiGithub className="project-links" />
          <FiExternalLink className="project-links" />
        </div>
      </div>

      <div
        className={`${
          left ? "md:col-start-4 md:col-end-9" : "md:col-start-1 md:col-end-6"
        } md:row-start-1 md:row-end-2 relative hidden md:block`}
      >
        <Image
          src="/project-images/halcyon.jpg"
          alt="project image"
          objectFit="contain"
          width="100%"
          height="80%"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default ProjectOverview;
