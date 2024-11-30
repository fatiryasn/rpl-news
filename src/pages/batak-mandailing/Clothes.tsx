import React from "react";
import { Helmet } from "react-helmet";

import SectionController from "./components/SectionController";
import HeaderNav from "./components/HeaderNav";

import pkhas from "./assets/pakaian-adat.png";
import ulosg from "./assets/ulosgodang.png";
import pkhas2 from "./assets/pkhas2.png";
import ampu from "./assets/ampu.png";
import songket from "./assets/songket.png";
import hiakepala from "./assets/hiakepala.png";
import songket2 from "./assets/songket2.png";

const Clothes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>RPL1 News | Pakaian Adat - Batak Mandailing</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">
            Pakaian Adat Laki-laki dan Perempuan Batak Mandailing
          </h1>
          <img
            src={pkhas}
            alt="pakaian-adat"
            title="Pakaian Adat Batak Mandailing "
            className="mt-3"
          />

          <h2 className="font-semibold text-xl font-poppins mt-16">
            1. Bahan Utama
          </h2>
          <p className="mt-3 leading-7">
            Pakaian adat Mandailing umumnya terbuat dari kain ulos, yang dikenal
            sebagai ulos Godang atau ulos besar. Kain ini ditenun secara
            tradisional dengan motif khas yang penuh makna.
          </p>
          <div className="flex flex-col items-center justify-center">
            <img
              src={ulosg}
              alt="pakaian-adat"
              title="Pakaian Adat Batak Mandailing "
              className="mt-3 w-[50%]"
            />
            <span className="text-xs italic">Ulos Godang Mandailing</span>
          </div>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            2. Warna Dominan
          </h2>
          <p className="mt-3 leading-7">
            Warna hitam, merah, dan emas adalah warna dominan pada pakaian adat
            Mandailing.
          </p>
          <ul className="list-disc mt-3 px-5">
            <li>Hitam : Melambangkan kebesaran dan kewibawaan</li>
            <li>Merah : Melambangkan keberanian dan semangat</li>
            <li>Emas : Melambangkan kemakmuran dan kejayaan</li>
          </ul>
          <div className="flex items-center justify-between">
            <img
              src={pkhas2}
              alt="pakaian-adat"
              title="Pakaian Adat Batak Mandailing "
              className="mt-3 w-[50%]"
            />
            <img
              src={pkhas}
              alt="pakaian-adat"
              title="Pakaian Adat Batak Mandailing "
              className="mt-3 w-[40%]"
            />
          </div>
          <span className="text-xs italic w-full text-center">
            Contoh visual penggunaan warna dominan
          </span>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            3. Elemen Pada Pria
          </h2>
          <ul className="list-disc pl-5 mt-3">
            <li>
              <span>
                Ampu: Penutup kepala pria yang berbentuk seperti topi khas.
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={ampu}
                  alt="pakaian-adat"
                  title="Pakaian Adat Batak Mandailing "
                  className="mt-3 w-[50%]"
                />
                <span className="text-xs italic text-center">Gambar: Ampu</span>
              </div>
            </li>
            <li className="mt-2">
              <p>
                Baju Godang: baju berbentuk jas dengan warna hitam keemasan atau
                merah. Bajo Godang ini tidak memiliki kerah di bagian leher.
              </p>
            </li>
            <li className="mt-2">
              <p>
                Bobat (ikat pinggang), item ini juga ditemukan di pengantin
                laki-laki. Bobat diselipkan di pinggang pada bagian luar. Di
                Bobat tersebut juga diselipkan pisau sebanyak dua pisau. Pisau
                tersebut adalah pisau jantan dan pisau betina, kedua pisau ini
                memiliki gagang yang berbeda. Pisau jantan diselipkan di sebelah
                kanan dan pisau betina di sebelah kiri.
              </p>
            </li>
            <li className="mt-2">
              <span>
                Sarung Songket: Dipakai di pinggang hingga lutut, memberikan
                kesan elegan.
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={songket}
                  alt="pakaian-adat"
                  title="Pakaian Adat Batak Mandailing "
                  className="mt-3 w-[50%]"
                />
                <span className="text-xs italic text-center">
                  Gambar: Sarung Songket
                </span>
              </div>
            </li>
          </ul>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            4. Elemen Pada Wanita
          </h2>
          <ul className="list-disc pl-5 mt-3">
            <li>
              <span>
                Hiasan Kepala: Wanita mengenakan hiasan kepala berupa mahkota
                kecil yang dihiasi bunga emas.
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={hiakepala}
                  alt="pakaian-adat"
                  title="Pakaian Adat Batak Mandailing "
                  className="mt-3 w-[50%]"
                />
                <span className="text-xs italic text-center">
                  Gambar: Hiasan kepala wanita
                </span>
              </div>
            </li>
            <li className="mt-2">
              <span>
                Kain Songket: Rok panjang yang berhiaskan motif tenunan khas.
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={songket2}
                  alt="pakaian-adat"
                  title="Pakaian Adat Batak Mandailing "
                  className="mt-3 w-[50%]"
                />
                <span className="text-xs italic text-center">
                  Gambar: Kain songket
                </span>
              </div>
            </li>
            <li className="mt-2">
              <span>
                Baju Kurung: Atasan longgar yang memberikan kesan anggun.
              </span>
            </li>
            <li className="mt-2">
              <span>
                Selendang Ulos: Dililitkan di bahu atau digunakan sebagai
                penutup kepala.
              </span>
            </li>
            <li className="mt-2">
              <span>
                Kalung emas: Disematkan di atas bahan kain beludru berwarna
                hitam.
              </span>
            </li>
            <li className="mt-2">
              <span>Anting-anting emas</span>
            </li>
            <li className="mt-2">
              <span>
                Sepasang keris yang berukuran kecil. Keris ini diselipkan di
                ikat pinggang di bagian depan.
              </span>
            </li>
          </ul>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            5. Fungsi Pakaian Adat
          </h2>
          <ol className="list-decimal pl-5 mt-5">
            <li>
              <h3 className="font-poppins text-lg font-semibold">Pernikahan</h3>
              <p>
                Dalam pernikahan adat Mandailing, pakaian ini menunjukkan status
                sosial keluarga kedua mempelai. Penggunaan kain ulos tertentu
                juga menyimbolkan doa dan restu.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="font-poppins text-lg font-semibold">
                Upacara Adat
              </h3>
              <p>
                Dipakai dalam Horja, upacara adat besar Mandailing, seperti
                pemberian gelar kehormatan atau pesta adat syukuran.
              </p>
            </li>
            <li className="mt-2">
              <h3 className="font-poppins text-lg font-semibold">
                Acara Keagamaan
              </h3>
              <p>
                Pakaian adat juga digunakan dalam perayaan hari besar keagamaan,
                menunjukkan penghormatan terhadap leluhur dan tradisi.
              </p>
            </li>
          </ol>
          <SectionController
            previousLabel={"Kesenian & Musik"}
            previousPath={"/batak-mandailing/kesenian-dan-musik"}
            currentLabel={"Pakaian Adat"}
            nextLabel={"Kuliner"}
            nextPath={"/batak-mandailing/kuliner"}
          />
        </div>
      </div>
    </>
  );
};

export default Clothes;
