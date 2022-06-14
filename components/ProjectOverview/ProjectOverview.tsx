import Image from "next/image";
import React from "react";

const Techs = [
  "React",
  "Styled Components",
  "Express",
  "Spotify API",
  "Heroku",
];

const ProjectOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <p className="text-green font-mono text-13">Featured Project</p>
        <h2 className=" text-3xl text-lightest-slate font-medium mt-2">
          Halcyon Theme
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          consectetur numquam sint, harum quam, inventore facilis sequi nihil
          omnis consequatur deserunt cupiditate sapiente reiciendis quo eaque
          nostrum odio. Recusandae, eveniet?
        </p>
      </div>

      <div>
        <Image
          src={"/project-images/halcyon.jpg"}
          height={400}
          width={500}
          alt="project image"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ProjectOverview;
