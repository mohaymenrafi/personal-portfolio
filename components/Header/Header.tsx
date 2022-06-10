import React from "react";

const navMenu: string[] = ["About Me", "Projects", "Blog", "Contact"];

const Header: React.FC = () => {
  return (
    <header className=" bg-navy p-6 font-mono md:px-12">
      <div className="flex">
        {/* logo and navmenu */}
        <div className="flex-grow flex items-center justify-between">
          <h2 className="text-green">{"<MhAbdullah />"}</h2>
          <div className="flex space-x-8 transition ease-in-out">
            {navMenu.map((menuItem, index) => (
              <li
                key={index}
                className="text-lightest-slate hover:text-green cursor-pointer text-13 list-none"
              >
                <span className="text-green">0{index + 1}. </span>
                {menuItem}
              </li>
            ))}
          </div>
        </div>
        {/* resume button */}
        <div className="ml-8">
          <button className="btn-primary">Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
