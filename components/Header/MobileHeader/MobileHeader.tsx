import Link from "next/link";
import React, { useState } from "react";
import { IMenu } from "../Header";
import MobileContent from "./MobileContent/MobileContent";

interface IProps {
  navMenu: IMenu[];
}

const MobileHeader: React.FC<IProps> = ({ navMenu }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
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
      <MobileContent navMenu={navMenu} open={open} setOpen={setOpen} />
    </>
  );
};
export default MobileHeader;
