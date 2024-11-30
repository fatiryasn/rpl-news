import React from "react";
import { Helmet } from "react-helmet";

import logo from "/logo.jpg";
import radat from "./batak-mandailing/assets/rumah-adat.png";
import NewsCard from "../components/NewsCard";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>RPL1 News | Home</title>
      </Helmet>
      <div className="pt-14">
        <div className="flex flex-col items-center px-5 md:px-28 lg:px-48 gap-32 mt-20">
          <div className="flex flex-col items-center gap-5">
            <img src={logo} alt="logo" className="rounded-full h-20" />
            <h1 className="font-bold font-poppins ">
              RPL<sup>1</sup>{" "}
              <span className="font-playwrite font-normal text-sm">news</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <NewsCard
              title="Batak Mandailing"
              desc="Infomateri mengenai Batak Mandailing termasuk Sejarah, Tradisi, Kesenian, dan lain-lain"
              dest="/batak-mandailing"
              img={radat}
            />
            <NewsCard
              title="Coming Soon"
              desc="Coming Soon"
              dest="/"
              img={""}
            />
            <NewsCard
              title="Coming Soon"
              desc="Coming Soon"
              dest="/"
              img={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
