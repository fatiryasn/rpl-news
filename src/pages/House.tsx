import React from "react";
import SectionController from "../components/SectionController";
import HeaderNav from "../components/HeaderNav";
import { Helmet } from "react-helmet";

import radat from "../assets/rumah-adat.png"

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
            Rumah Adat Batak Mandailing, Bagas Godang
          </h1>
          <img
            src={radat}
            alt="rumah-adat"
            title="Rumah Adat Batak Mandailing "
            className="mt-3"
          />
          <p className="mt-3 leading-7">
            Bagas Godang adalah rumah adat khas masyarakat Batak Mandailing yang
            memiliki ciri khas sebagai simbol kehormatan dan identitas budaya.
            Rumah ini tidak hanya berfungsi sebagai tempat tinggal, tetapi juga
            sebagai pusat kegiatan adat, tempat musyawarah, dan upacara
            tradisional
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            Ciri Arsitektur Bagas Godang
          </h2>
          <ol className="list-decimal pl-5">
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Bentuk Panggung
              </h3>
              <p className="mt-1 leading-7">
                Rumah Bagas Godang berbentuk rumah panggung dengan tiang-tiang
                penyangga yang kokoh. Hal ini berfungsi untuk melindungi rumah
                dari banjir, serangan binatang buas, dan kelembapan tanah.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Bahan Bangunan
              </h3>
              <p className="mt-1 leading-7">
                Dibangun dari bahan alami, seperti kayu untuk dinding dan tiang,
                serta ijuk atau daun rumbia untuk atap. Kayu yang digunakan
                biasanya berasal dari pohon yang kuat seperti kayu meranti.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Atap Ijuk Berbentuk Gonjong
              </h3>
              <p className="mt-1 leading-7">
                Atapnya berbentuk melengkung dengan ujung yang runcing ke atas,
                menyerupai tanduk kerbau. Desain ini melambangkan kekuatan dan
                kebijaksanaan.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Ornamen Ukiran
              </h3>
              <p className="mt-1 leading-7">
                Dihiasi dengan ukiran tradisional yang memiliki motif khas
                Mandailing, seperti motif flora, fauna, dan simbol-simbol adat
                yang sarat makna filosofis.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Warna Dominan
              </h3>
              <p className="mt-1 leading-7">
                Warna-warna tradisional yang digunakan adalah hitam, merah, dan
                putih. Warna hitam melambangkan duka atau kehidupan, merah
                melambangkan keberanian, dan putih melambangkan kesucian.
              </p>
            </li>
          </ol>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            Fungsi Bagas Godang
          </h2>
          <ol className="list-decimal pl-5">
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Tempat Tinggal Raja
              </h3>
              <p className="mt-1 leading-7">
                Bagas Godang biasanya ditempati oleh raja atau pemimpin adat
                sebagai simbol kekuasaan dan status sosial dalam masyarakat.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Pusat Kegiatan Adat
              </h3>
              <p className="mt-1 leading-7">
                Rumah ini menjadi tempat berlangsungnya upacara adat seperti
                pernikahan, musyawarah, dan berbagai ritual tradisional.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Penyimpanan Pusaka
              </h3>
              <p className="mt-1 leading-7">
                Di dalam Bagas Godang, terdapat ruang khusus untuk menyimpan
                benda pusaka atau peninggalan leluhur.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Ornamen Ukiran
              </h3>
              <p className="mt-1 leading-7">
                Dihiasi dengan ukiran tradisional yang memiliki motif khas
                Mandailing, seperti motif flora, fauna, dan simbol-simbol adat
                yang sarat makna filosofis.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="text-lg font-poppins font-semibold">
                Warna Dominan
              </h3>
              <p className="mt-1 leading-7">
                Warna-warna tradisional yang digunakan adalah hitam, merah, dan
                putih. Warna hitam melambangkan duka atau kehidupan, merah
                melambangkan keberanian, dan putih melambangkan kesucian.
              </p>
            </li>
          </ol>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            4. Sopo Godang
          </h2>
          <p className="mt-3 leading-7">
            Biasanya di depan Bagas Godang terdapat Sopo Godang, bangunan balai
            yang digunakan sebagai tempat berkumpul dan bermusyawarah. Sopo
            Godang juga digunakan untuk melatih seni budaya seperti gordang
            sambilan, alat musik tradisional Mandailing.
          </p>
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
