import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-100">
      <div className="flex items-baseline">
        <span className="text-green font-mono text-xl">01.&nbsp;</span>
        <h3
          className="flex-grow font-sans text-lightest-slate text-[32px]
         relative flex items-center header-line whitespace-nowrap"
        >
          About Me
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className=" col-span-2">
          <p className="text-slate text-xl mt-5 max-w-540 font-light mb-4">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="text-slate text-xl mt-5 max-w-540 font-light mb-4">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p className="text-slate text-xl mt-5 max-w-540 font-light mb-4">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
        </div>
        <div className="mt-5">
          <Image
            src="/images/profile-pic.jpg"
            width={500}
            height={500}
            objectFit="cover"
            alt="mohaymen abdullah profile picture"
            className="rounded "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
