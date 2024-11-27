import React from "react";
import SectionController from "../components/SectionController";
import HeaderNav from "../components/HeaderNav";
import ImageCard from "../components/ImageCard";
import { Helmet } from "react-helmet";

import gondang from "../assets/gondang.png";
import tarian from "../assets/tarian.png";
import tarian2 from "../assets/tarian2.png";
import gondang2 from "../assets/gondang2.png";
import sarama from "../assets/sarama.png";

import pkhas from "../assets/pakaian-adat.png";
import ulosg from "../assets/ulosgodang.png";
import pkhas2 from "../assets/pkhas2.png";
import ampu from "../assets/ampu.png";
import songket from "../assets/songket.png";
import hiakepala from "../assets/hiakepala.png";
import songket2 from "../assets/songket2.png";

import mkhas from "../assets/makanan-khas.png";
import tpanya from "../assets/togepanyabungan.png";
import asampadeh from "../assets/asampadeh.png";
import kuepakkat from "../assets/kuepakkat.png";
import itakpoul from "../assets/itakpoul.png";

import radat from "../assets/rumah-adat.png";

import mangupa from "../assets/mangupa.png";
import markobar from "../assets/markobar.png";

import photo1 from "../assets/random2.png";
import padri from "../assets/padri.png";


const Gallery: React.FC = () => {
  const images = [
    {
      src: gondang,
      alt: "Gambar 1",
      description: "Gordang Sambilan",
    },
    {
      src: tarian,
      alt: "Gambar 2",
      description: "Tarian Tor-tor Tapak",
    },
    {
      src: tarian2,
      alt: "Gambar 3",
      description: "Tarian Khas Mandailing.",
    },
    {
      src: sarama,
      alt: "Gambar 4",
      description: "Tarian Adat Sarama",
    },
    {
      src: pkhas,
      alt: "Gambar 5",
      description: "Pakaian Adat Mandailing",
    },
    {
      src: ampu,
      alt: "Gambar 6",
      description: "Ampu, topi khas mandailing",
    },
    {
      src: mkhas,
      alt: "Gambar 7",
      description: "Gulai Ikan Sale.",
    },
    {
      src: ulosg,
      alt: "Gambar 8",
      description: "Ulos Mandailing",
    },
    {
      src: hiakepala,
      alt: "Gambar 9",
      description: "Hiasan Kepala Wanita",
    },
    {
      src: tpanya,
      alt: "Gambar 10",
      description: "Toge Panyabungan.",
    },
    {
      src: songket,
      alt: "Gambar 11",
      description: "Kain Songket.",
    },
    {
      src: asampadeh,
      alt: "Gambar 12",
      description: "Asam Padeh",
    },
    {
      src: photo1,
      alt: "Gambar 13",
      description: "Etnis Mandailing",
    },
    {
      src: kuepakkat,
      alt: "Gambar 14",
      description: "Kue Pakkat",
    },
    {
      src: padri,
      alt: "Gambar 15",
      description: "Ilustrasi Perang Padri.",
    },
    {
      src: markobar,
      alt: "Gambar 16",
      description: "Tradisi adat Markobar.",
    },
    {
      src: itakpoul,
      alt: "Gambar 17",
      description: "Itakpoul, makanan khas Mandailing",
    },
    {
      src: radat,
      alt: "Gambar 18",
      description: "Rumah Adat Mandailing, Bagas Godang",
    },
    {
      src: gondang2,
      alt: "Gambar 19",
      description: "Gordang Sambilan.",
    },
    {
      src: mangupa,
      alt: "Gambar 20",
      description: "Tradisi Mangupa.",
    },
    {
      src: pkhas2,
      alt: "Gambar 21",
      description: "Pakaian Adat Mandailing",
    },
    {
      src: songket2,
      alt: "Gambar 22",
      description: "Kain Songket",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Galeri</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">Galeri</h1>

          <div className="min-h-screen py-8  mt-5 rounded-3xl">
            <div className="grid grid-cols-2 place-items-center sm:grid-cols-2 gap-2">
              {images.map((image, index) => (
                <ImageCard
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  description={image.description}
                />
              ))}
            </div>
          </div>
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
