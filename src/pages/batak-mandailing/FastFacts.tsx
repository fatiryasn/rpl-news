import React from "react";
import { Helmet } from "react-helmet";

import SectionController from "./components/SectionController";
import BarChart1 from "./components/BarChart1";
import PieChart1 from "./components/PieChart1";
import HeaderNav from "./components/HeaderNav";

import photo1 from "./assets/random1.png";

const FastFacts: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>RPL1 News | Fakta Singkat - Batak Mandailing</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col items-center lg:px-72">
          <h1 className=" font-poppins font-bold text-2xl">
            Fakta dan Data Batak Mandailing
          </h1>
          <p className="mt-5 leading-7">
            Batak Mandailing merupakan salah satu kelompok etnik pribumi yang
            menghuni daerah selatan Provinsi Sumatera Utara. Mereka pernah
            berada di bawah pengaruh Kaum Padri dari Minangkabau, sehingga
            secara kultural etnis ini dipengaruhi oleh budaya agama Islam.
            Sebagian kecil etnis ini juga bermukim di Selangor dan Perak,
            Semenanjung Malaysia.
          </p>
          <img src={photo1} alt="foto1" className="mt-3" />
          <table className="mt-3 border ">
            <tr>
              <td className="border p-2">Jumlah Populasi</td>
              <td className="border p-2">
                1.500.000 (menurut Badan Pusat Statistik)
              </td>
            </tr>
            <tr>
              <td className="border p-2">Wilayah Sebaran</td>
              <td className="border p-2">
                <ul className="list-disc ml-3">
                  <li>Sumatera Utara: 1.035.000 penduduk</li>
                  <li>Sumatera Barat: 214.000 penduduk</li>
                  <li>Riau: 210.000 penduduk </li>
                  <li>DKI Jakarta: 30.000 penduduk</li>
                  <li>Kepulauan Riau: 11.000 penduduk</li>
                  <li>Malaysia: 5.400 penduduk</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border p-2">Marga</td>
              <td className="border p-2">
                <ol className="list-decimal ml-4">
                  <li>Babiat</li>
                  <li>Batubara</li>
                  <li>Baumi</li>
                  <li>Dalimunte</li>
                  <li>Daulay</li>
                  <li>Harahap</li>
                  <li>Hasibuan</li>
                  <li>Lintang</li>
                  <li>Lubis</li>
                  <li>Mardia</li>
                  <li>Matondang</li>
                  <li>Nasution</li>
                  <li>Parinduri</li>
                  <li>Pulungan Rambe</li>
                  <li>Rangkuti Tanjung</li>
                </ol>
              </td>
            </tr>
          </table>
          <BarChart1 />
          <PieChart1 />
          <div className="flex flex-col justify-center items-center mt-48">
            <h2 className="font-semibold font-poppins text-xl text-center">
              Pusat Budaya dan Tradisi Batak Mandailing
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1073892.7594639931!2d98.7601614614046!3d0.9269162758582854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302bcf1af5e053a7%3A0x3039d80b220ce60!2sKabupaten%20Mandailing%20Natal%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1732681308997!5m2!1sid!2sid"
              width="270"
              height="230"
              loading="lazy"
              className="border border-black text-center mt-10"
            ></iframe>
            <div>
              <span className="italic text-xs font-quicksand mt-3">
                Kabupaten Mandailing Natal, Google Maps
              </span>
            </div>
          </div>
          <SectionController
            previousLabel={"Home"}
            previousPath={"/batak-mandailing"}
            currentLabel={"Fast Facts"}
            nextLabel={"Sejarah"}
            nextPath={"/batak-mandailing/sejarah"}
          />
        </div>
      </div>
    </>
  );
};

export default FastFacts;
