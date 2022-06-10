import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mh Abdullah</title>
        <meta name="description" content="I am a frontend developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-navy px-12 md:px-100 lg:px-150">
        <div className="lg:max-w-5xl mx-auto">
          <Banner />
          <About />
        </div>
      </main>
    </div>
  );
};

export default Home;
