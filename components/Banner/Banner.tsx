import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="pt-16 pb-10 md:pb-20">
      <p className="text-green text-base font-mono mb-7">Hi, my name is</p>
      <h2 className="text-lightest-slate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
        Mohaymen Abdullah.
      </h2>
      <h2 className="text-slate text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
        I build things for the web.
      </h2>
      <p className="text-slate text-xl mt-5 max-w-[540px] font-light">
        I am a web developer specializing in frontend development. I focus on
        developing quality products that will push your business forward. In
        free time I read books, blogs.
        {/* and write on{" "}
        <span className="text-green italic">dev.to</span> */}
      </p>
      <Link href="/#projects">
        <button className="btn-primary px-7 py-5 text-sm mt-12 font-mono">
          <a>Chekcout my projects</a>
        </button>
      </Link>
    </section>
  );
};

export default Banner;
