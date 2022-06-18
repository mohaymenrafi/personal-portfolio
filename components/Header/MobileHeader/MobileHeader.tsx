import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IMenu } from "../Header";
import MobileHeaderContent from "./MobileHeaderContent/MobileHeaderContent";

interface IProps {
  navMenu: IMenu[];
}

const MobileHeader: React.FC<IProps> = ({ navMenu }) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    // console.log(first);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <div className="bg-navy p-6 font-mono md:px-12 flex justify-between items-center">
        <h2 className="text-green cursor-pointer">
          <Link href="/">{"<MhAbdullah />"}</Link>
        </h2>
        <button className="fancy-menu z-50" onClick={() => setOpen(!open)}>
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
      <MobileHeaderContent navMenu={navMenu} open={open} setOpen={setOpen} />
    </>
  );
};
export default MobileHeader;
