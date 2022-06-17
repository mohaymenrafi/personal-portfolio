import Link from "next/link";
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
    <header>
      <DesktopHeader navMenu={navMenu} />
      <MobileHeader />
    </header>
  );
};

export default Header;
