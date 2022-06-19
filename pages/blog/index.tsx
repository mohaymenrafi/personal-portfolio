import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

// 87+127

export default function Blog() {
  return (
    <div>
      <Header />
      <section className="h-[calc(100vh-199px)] md:h-[calc(100vh-214px)] bg-navy flex items-center justify-center flex-col">
        <h2 className="text-lightest-slate text-5xl md:text-6xl font-sans font-bold py-12 text-center">
          I will share my stories soon!
        </h2>
        <button className="btn-primary">
          <Link href="/">Back to Home</Link>
        </button>
      </section>
      <Footer />
    </div>
  );
}
