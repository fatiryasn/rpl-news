import React from "react";
import { Helmet } from "react-helmet";
import SectionController from "../components/SectionController";
import HeaderNav from "../components/HeaderNav";
import mkhas from "../assets/makanan-khas.png";
import tpanya from "../assets/togepanyabungan.png";
import asampadeh from "../assets/asampadeh.png";
import kuepakkat from "../assets/kuepakkat.png";
import itakpoul from "../assets/itakpoul.png";

const Culinary: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Kuliner</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">
            Kuliner khas dari Batak Mandailing
          </h1>
          <p className="mt-3 leading-7">
            Makanan khas Batak Mandailing mencerminkan kekayaan budaya dan
            keanekaragaman rasa yang berasal dari bahan-bahan lokal yang
            autentik. Berikut beberapa makanan khas Batak Mandailing yang
            terkenal:
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            1. Gulai Ikan Sale
          </h2>
          <img
            src={mkhas}
            alt="makanan-khas"
            title="Gulai Ikan Sale "
            className="mt-3"
          />
          <p className="mt-3 leading-7">
            Gulai ini dibuat dari ikan yang diasapi (ikan sale) kemudian dimasak
            dengan santan kental dan bumbu rempah khas. Hidangan ini memiliki
            cita rasa unik karena perpaduan antara rasa gurih santan dan aroma
            khas ikan asap.
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            2. Toge Panyabungan
          </h2>
          <img
            src={tpanya}
            alt="makanan-khas"
            title="Toge Panyabungan "
            className="mt-3"
          />
          <p className="mt-3 leading-7">
            Toge Panyabungan adalah salah satu makanan khas Batak Mandailing
            yang berasal dari daerah Panyabungan, Mandailing Natal, Sumatera
            Utara. Hidangan ini memiliki keunikan tersendiri karena bahan
            utamanya adalah tauge yang disajikan dengan kuah bumbu kacang khas
            yang kaya rasa.
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            3. Gulai Asam Padeh
          </h2>
          <img
            src={asampadeh}
            alt="makanan-khas"
            title="Gulai Asam Padeh"
            className="mt-3"
          />
          <p className="mt-3 leading-7">
            Gulai Asam Padeh adalah hidangan khas Batak Mandailing yang kaya
            rasa dan menjadi salah satu kuliner tradisional yang sering
            disajikan dalam berbagai acara, baik sehari-hari maupun dalam
            perayaan adat. Hidangan ini menonjolkan rasa asam segar yang berpadu
            dengan pedasnya bumbu gulai, menciptakan sensasi yang menggugah
            selera.
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            4. Kue Pakkat
          </h2>
          <img
            src={kuepakkat}
            alt="makanan-khas"
            title="Kue Pakkat"
            className="mt-3"
          />
          <p className="mt-3 leading-7">
            Gulai Asam Padeh adalah hidangan khas Batak Mandailing yang kaya
            rasa dan menjadi salah satu kuliner tradisional yang sering
            disajikan dalam berbagai acara, baik sehari-hari maupun dalam
            perayaan adat. Hidangan ini menonjolkan rasa asam segar yang berpadu
            dengan pedasnya bumbu gulai, menciptakan sensasi yang menggugah
            selera.
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            5. Itak Poul-poul
          </h2>
          <img
            src={itakpoul}
            alt="makanan-khas"
            title="Itak Poul-poul"
            className="mt-3"
          />
          <p className="mt-3 leading-7">
            Itak Poul-poul adalah salah satu makanan tradisional khas Batak
            Mandailing yang memiliki nilai budaya dan simbolik yang kuat.
            Hidangan ini terbuat dari bahan dasar tepung beras dan sering
            disajikan dalam berbagai acara adat atau momen-momen penting dalam
            kehidupan masyarakat Mandailing.
          </p>
          <SectionController
            previousLabel={"Pakaian Adat"}
            previousPath={"/pakaian-adat"}
            currentLabel={"Kuliner"}
            nextLabel={"Rumah Adat"}
            nextPath={"/rumah-adat"}
          />
        </div>
      </div>
    </>
  );
};

export default Culinary;
