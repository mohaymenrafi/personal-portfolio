import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const LeftSidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center space-y-8 fixed bottom-0 left-12">
      <FiGithub className="sidebar-icons" />
      <FiLinkedin className="sidebar-icons" />
      <FiTwitter className="sidebar-icons" />
      <span className="border-l border-slate h-20"></span>
    </div>
  );
};

export default LeftSidebar;
