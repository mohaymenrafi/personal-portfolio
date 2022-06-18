import Link from "next/link";
import React, { useState } from "react";
import { IMenu } from "../Header";

interface IProps {
  navMenu: IMenu[];
}

const MobileHeader: React.FC<IProps> = ({ navMenu }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={`${open && "overflow-y-hidden"}`}>
      <div className="bg-navy p-6 font-mono md:px-12 flex justify-between items-center">
        <h2 className="text-green">
          <Link href="/">{"<MhAbdullah />"}</Link>
        </h2>
        <button className="fancy-menu z-20" onClick={() => setOpen(!open)}>
          <span
            className={`rectangle rectangle--top rectangle--small ${
              open && "open"
            }`}
          ></span>
          <span
            className={`rectangle rectangle--middle ${open && "open"}`}
          ></span>
          <span
            className={`rectangle rectangle--bottom rectangle--small ${
              open && "open"
            }`}
          ></span>
        </button>
      </div>
      {/* mobile menu content  */}
      <div
        className={`absolute right-0 top-0 bg-light-navy h-screen w-80 z-10 transition-transform duration-65 translate-x-80 ${
          open && "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-center h-full p-6">
          <ul className="font-mono text-center space-y-10">
            {navMenu.map((menuItem: IMenu, index: number) => (
              <li
                key={index}
                className="text-lightest-slate hover:text-green cursor-pointer text-[18px] list-none"
                onClick={() => setOpen(!open)}
              >
                <Link href={`/${menuItem.url}`}>
                  <a>
                    <span className="text-green">0{index + 1}. </span>
                    <br />
                    {menuItem.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
