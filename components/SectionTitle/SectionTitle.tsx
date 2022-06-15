import React from "react";

interface IProps {
  title: string;
  number: string;
}

const SectionTitle: React.FC<IProps> = ({ title, number }) => {
  return (
    <div className="flex items-baseline">
      <span className="text-green font-mono text-xl">{number}.&nbsp;</span>
      <h3
        className="flex-grow font-sans text-lightest-slate text-[32px]
         relative flex items-center header-line whitespace-nowrap font-medium"
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
