import React from "react";
import SectionController from "../components/SectionController";
import HeaderNav from "../components/HeaderNav";
import { Helmet } from "react-helmet";

const Gallery: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Galeri</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">Galeri</h1>
          <SectionController
            previousLabel={"Tradisi & Permainan Adat"}
            previousPath={"/tradisi-dan-permainan"}
            currentLabel={"Galeri"}
            nextLabel={"Home"}
            nextPath={"/"}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
