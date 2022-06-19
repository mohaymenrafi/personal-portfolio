import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { BiRightArrow } from "react-icons/bi";

const techs: string[] = [
  "Javascript (ES6)",
  "Typescript",
  "React",
  "Next JS",
  "Jest (RTL)",
  "Express JS & MongoDB",
];

const About = () => {
  return (
    <section className="py-10 md:py-14 lg:py-100" id="about">
      <SectionTitle title="About Me" number="01" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-12">
        <div className=" col-span-2">
          <p className="text-slate text-xl mt-5 max-w-540 font-light mb-4">
            Hello! My name is Abdullah and I am electrical engineering graduate.
            However, I found coding interesting while doing a introductory Java
            course in my undergrad. Since then I never looked back. Started my
            journey as a Wordpress developer and doing freelance work on Upwork
            and mostly Fiverr. Worked with more than 50+ clients and with more
            than 150+ 5 ⭐ reviews.
          </p>
          <p className="text-slate text-xl mt-5 max-w-540 font-light mb-4">
            Fast-forward to today, I work as Frontend Developer mostly using
            React JS framework. Along with frontend I am familier with backend
            tools such as Node JS & Express JS.
          </p>
          <p className="text-slate text-xl mt-5 max-w-540 font-light mb-4">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[400px] font-mono">
            {techs.map((item: string, index: number) => (
              <li
                key={index}
                className="list-none flex items-center space-x-1 text-13"
              >
                <BiRightArrow className="text-green text-[11px]" />
                <span className="text-slate">{item}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="mt-5 flex md:block justify-center relative">
          <Image
            src="/images/profile-pic.jpg"
            width={500}
            height={500}
            objectFit="contain"
            alt="mohaymen abdullah"
            className="rounded "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
