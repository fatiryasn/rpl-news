import React from "react";
import SectionController from "../components/SectionController";
import HeaderNav from "../components/HeaderNav";
import { Helmet } from "react-helmet";

import mangupa from "../assets/mangupa.png"
import markobar from "../assets/markobar.png"

const Tradition: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tradisi & Permainan Adat</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">
            Tradisi dan Permainan khas Batak Mandailing
          </h1>
          <p className="mt-3 leading-7">
            Suku Batak Mandailing, salah satu kelompok etnis yang mendiami
            wilayah Sumatera Utara, memiliki kekayaan budaya yang luar biasa,
            mulai dari tradisi adat hingga permainan tradisional yang sarat akan
            nilai-nilai luhur. Sebagai bagian dari kehidupan masyarakat, tradisi
            dan permainan ini tidak hanya menjadi hiburan atau ritual semata,
            tetapi juga cerminan dari kearifan lokal yang diwariskan secara
            turun-temurun. Dengan setiap gerak dan langkah dalam tradisi maupun
            permainan, tercermin pesan kebersamaan, penghormatan kepada leluhur,
            serta kecintaan terhadap alam dan budaya.
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            1. Mangupa
          </h2>
          <p className="mt-3 leading-7">
            Upacara adat ini dilakukan untuk memberi restu kepada seseorang,
            baik saat memulai perjalanan, pernikahan, maupun kegiatan penting
            lainnya. Dalam mangupa, makanan khas seperti nasi, ayam panggang,
            dan telur rebus disajikan sebagai simbol doa dan keberkahan.
          </p>
          <img
            src={mangupa}
            alt="tradisi-adat"
            title="Tradisi & Permainan Batak Mandailing "
            className="mt-3"
          />
          <span className="text-center text-xs italic">Gambar: Mangupa</span>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            2. Manortor
          </h2>
          <p className="mt-3 leading-7">
            Manortor berasal dari kata tortor yang artinya menari tortor. Tari
            tortor merupakan tarian tradisional daerah Batak yang digunakan
            untuk upacara adat (horja gadang) dan pernikahan. Penggunaan tari
            tortor mempunyai perbedaan menurut kegunaannya, untuk perkawinan
            adat atau digunakan oleh dukun untuk mengobati penyakit masyarakat
            Tapanuli.
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            3. Mangambat
          </h2>
          <p className="mt-3 leading-7">
            Mangambat (mencegah) merupakan upacara menghalangi-halangi pengantin
            wanita yang akan dibawa oleh mempelai pria. Orang yang mangambat
            adalah anak laki-laki dari saudara perempuan dari ayah pengantin
            perempuan.
          </p>
          <p className="mt-2 leading-7">
            Sepupu pengantin wanita tersebut akan mencoba menghalangi dan
            berdialog dengan diksi-diksi tertentu. Saat ini tradisi ini sudah
            mulai jarang diterapkan di etnis Mandailing.
          </p>

          <h2 className="font-semibold text-xl font-poppins mt-16">
            4. Markobar
          </h2>
          <p className="mt-3 leading-7">
            Markobar adalah tradisi lisan masyarakat Mandailing yang berarti
            "berbicara" atau "mangecek" dalam bahasa setempat. Tradisi ini
            melibatkan penyampaian ide, gagasan, dan tujuan dengan keterampilan
            berbicara yang khas. Dalam konteks adat perkawinan, markobar terbagi
            menjadi tiga jenis: boru tulang (pengambilan boru tulang), marsapa
            boru (persiapan hidangan), dan mangalojongkon (permintaan maaf atas
            pelanggaran adat). Tradisi ini sarat akan nilai adat, seperti
            pepatah "na manunda sapanjang undang, na manangko sapanjang adat,"
            yang menegaskan pentingnya mengikuti tata aturan adat.
          </p>
          <img
            src={markobar}
            alt="tradisi-adat"
            title="Tradisi & Permainan Batak Mandailing "
            className="mt-3"
          />
          <span className="text-center text-xs italic">Gambar: Markobar</span>
          <p className="mt-3 leading-7">
            Dalam markobar, daun sirih (burangir) menjadi simbol penting yang
            selalu disajikan di awal upacara adat. Burangir terdiri dari sirih,
            gambir, kapur, tembakau, dan pinang yang diletakkan di atas wadah
            (partaganan), melambangkan "opat ganji lima gonop" sebagai tanda
            kelengkapan. Penyajian burangir diawali dengan izin kepada ketua
            adat (harajaon), dan setelah diterima, pihak penyelenggara
            mengutarakan maksudnya. Tradisi ini mencerminkan penghormatan kepada
            adat dan nilai-nilai kebersamaan dalam masyarakat
            Angkola-Mandailing.
          </p>
          <SectionController
            previousLabel={"Rumah Adat"}
            previousPath={"/rumah-adat"}
            currentLabel={"Tradisi & Permainan Adat"}
            nextLabel={"Galeri"}
            nextPath={"/galeri"}
          />
        </div>
      </div>
    </>
  );
};

export default Tradition;
