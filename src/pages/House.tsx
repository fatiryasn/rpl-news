import React from "react";
import SectionController from "../components/SectionController";
import HeaderNav from "../components/HeaderNav";
import { Helmet } from "react-helmet";

const House: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Rumah Adat</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">
            Rumah Adat Batak Mandailing
          </h1>
          <SectionController
            previousLabel={"Kuliner"}
            previousPath={"/kuliner"}
            currentLabel={"Rumah Adat"}
            nextLabel={"Tradisi & Permainan Adat"}
            nextPath={"/tradisi-dan-permainan"}
          />
        </div>
      </div>
    </>
  );
};

export default House;
