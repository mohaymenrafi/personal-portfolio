import React from "react";

const RightSidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center space-y-8 fixed bottom-0 right-9">
      <a
        href="mailto:mohaymen.rafi@gmail.com"
        className="text-slate font-mono text-13 text-sideways-right hover:text-green"
      >
        mohaymen.rafi@gmail.com
      </a>
      <span className="border-l border-slate h-20"></span>
    </div>
  );
};

export default RightSidebar;
