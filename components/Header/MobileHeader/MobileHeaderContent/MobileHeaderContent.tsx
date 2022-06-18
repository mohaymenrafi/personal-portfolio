import Link from "next/link";
import React from "react";
import { IMenu } from "../../Header";

interface IProps {
  navMenu: IMenu[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeaderContent: React.FC<IProps> = ({ navMenu, open, setOpen }) => {
  return (
    <div
      className={`fixed glass top-0 left-0 w-screen h-screen z-20 pointer-events-none ${
        open && "open pointer-events-auto"
      }`}
    >
      <div
        className={`absolute right-0 top-0 bg-light-navy h-screen w-80 z-10 transition-transform duration-50 translate-x-80 ${
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

export default MobileHeaderContent;
