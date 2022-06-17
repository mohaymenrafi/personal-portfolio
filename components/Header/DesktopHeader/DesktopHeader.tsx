import React from "react";
import Link from "next/link";
import { IMenu } from "../Header";

interface IProps {
  navMenu: IMenu[];
}

const DesktopHeader: React.FC<IProps> = ({ navMenu }) => {
  return (
    <div className="flex bg-navy p-6 font-mono md:px-12">
      {/* logo and navmenu */}
      <div className="flex-grow flex items-center justify-between">
        <h2 className="text-green">
          <Link href="/">{"<MhAbdullah />"}</Link>
        </h2>
        <div className="flex space-x-8 transition ease-in-out">
          {navMenu.map((menuItem: IMenu, index: number) => (
            <li
              key={index}
              className="text-lightest-slate hover:text-green cursor-pointer text-13 list-none"
            >
              <Link href={`/${menuItem.url}`}>
                <a>
                  <span className="text-green">0{index + 1}. </span>
                  {menuItem.name}
                </a>
              </Link>
            </li>
          ))}
        </div>
      </div>
      {/* resume button */}
      <div className="ml-8">
        <button className="btn-primary">
          <a href="/Resume_Abdullah_Al_Mohaymen_Rafi.pdf" download>
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default DesktopHeader;
