import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/MobileHeader/MobileHeader";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import Projects from "../components/Projects/Projects";
import RightSidebar from "../components/RightSidebar/RightSidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mh Abdullah</title>
        <meta name="description" content="I am a frontend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MobileHeader />
      <main className="bg-navy px-12 md:px-100 lg:px-150 relative">
        <div className="lg:max-w-5xl mx-auto">
          <Banner />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <LeftSidebar />
          <RightSidebar />
        </div>
      </main>
    </div>
  );
};

export default Home;
