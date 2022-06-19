import React from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

export interface IMenu {
  name: string;
  url: string;
}

const navMenu: IMenu[] = [
  {
    name: "About Me",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Blog",
    url: "blog",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30">
      <div className="hidden md:block sticky top-0">
        <DesktopHeader navMenu={navMenu} />
      </div>
      <div className="md:hidden">
        <MobileHeader navMenu={navMenu} />
      </div>
    </header>
  );
};

export default Header;
