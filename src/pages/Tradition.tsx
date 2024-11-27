import React from 'react'
import SectionController from '../components/SectionController';
import HeaderNav from '../components/HeaderNav';

const Tradition: React.FC = () => {
  return (
    <div className="pt-14">
      <HeaderNav />
      <div className="mt-20 px-5 w-full flex flex-col">
        <h1 className=" font-poppins font-bold text-2xl">
          Tradisi dan Permainan khas Batak Mandailing
        </h1>
      <SectionController
        previousLabel={"Rumah Adat"}
        previousPath={"/rumah-adat"}
        currentLabel={"Tradisi & Permainan Adat"}
        nextLabel={"Galeri"}
        nextPath={"/galeri"}
      />
      </div>
    </div>
  );
}

export default Tradition