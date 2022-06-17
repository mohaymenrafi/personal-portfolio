import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const LeftSidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center space-y-8 fixed bottom-0 left-12">
      <a
        href="https://github.com/mohaymenrafi"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub className="sidebar-icons" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohaymenabdullah/"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin className="sidebar-icons" />
      </a>
      <a
        href="https://twitter.com/mohaymen_rafi"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter className="sidebar-icons" />
      </a>
      <span className="border-l border-slate h-20"></span>
    </div>
  );
};

export default LeftSidebar;
