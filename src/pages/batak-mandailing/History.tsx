import React from "react";
import { Helmet } from "react-helmet";

import SectionController from "./components/SectionController";
import HeaderNav from "./components/HeaderNav";

import photo1 from "./assets/random2.png";
import padri from "./assets/padri.png";
const History: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sejarah</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">
            Sejarah dan Asal-Usul etnis Batak Mandailing
          </h1>
          <img src={photo1} alt="pic1" className="mt-5" />
          <h2 className="font-semibold text-xl font-poppins mt-16">
            Asal-Usul Nama 'Mandailing'
          </h2>
          <p className="mt-3 leading-7">
            Nama Mandailing memiliki akar sejarah yang kaya dan berlapis,
            mencerminkan perjalanan panjang identitas budaya masyarakatnya.
            Berbagai teori dan legenda berkembang mengenai asal usul nama ini,
            yang tak hanya menarik perhatian sejarawan, tetapi juga menjadi
            kebanggaan masyarakat Mandailing di Sumatera Utara.
          </p>
          <h3 className="font-semibold font-poppins mt-5">
            1. Berasal dari kata "Mandala & Holing"
          </h3>
          <p className="mt-3 leading-7">
            Menurut salah satu teori, nama Mandailing berasal dari gabungan kata
            “Mandala” dan “Holing”. Mandala, yang berasal dari bahasa Sanskerta,
            berarti "wilayah" atau "lingkaran kekuasaan", sedangkan Holing
            mengacu pada kerajaan kuno yang dikenal dalam catatan sejarah
            Nusantara. Gabungan ini menghasilkan makna "Wilayah Holing",
            menunjukkan kemungkinan pengaruh kerajaan Hindu-Buddha di masa lalu
            pada kawasan ini.
          </p>
          <h3 className="font-semibold font-poppins mt-5">
            2. Jejak sejarah dan pengaruh Perang Padri
          </h3>
          <p className="mt-3 leading-7">
            Nama Mandailing juga mendapatkan perhatian selama periode Perang
            Padri (1803-1838). Dalam konflik ini, Mandailing sering disebut
            sebagai salah satu wilayah yang berada di bawah pengaruh budaya
            Minangkabau dan Islam. Beberapa sumber menyebutkan bahwa istilah
            Mandailing lebih sering digunakan setelah peperangan untuk merujuk
            pada identitas masyarakat di wilayah tersebut.
          </p>
          <img src={padri} alt="Perang padri" />
          <span className="text-xs italic text-center">
            Ilustrasi Perang Padri
          </span>

          <h3 className="font-semibold font-poppins mt-5">
            3. Berasal dari bahasa Minangkabau
          </h3>
          <p className="mt-3 leading-7">
            Teori lain mengatakan, nama suku Mandailing di Sumatera Utara ini
            berasal dari bahasa Minangkabau yaitu Mandehiliang yang memiliki
            arti "Ibu yang hilang". Dari ini, terdapat fakta bahwa kedudukan
            seorang wanita terutama sosok ibu di Minangkabau benar-benar
            penting.
          </p>
          <h2 className="font-semibold text-xl font-poppins mt-16">
            Periode Kerajaan
          </h2>
          <p className="mt-3 leading-7">
            Pada abad 13 hingga 15 Masehi, Mandailing berada di bawah kekuasaan
            Kerajaan Aru yang didirikan pada 1295 Masehi. Pada periode ini,
            Mandailing tergabung dalam wilayah kekuasaan Aru. Namun, setelahnya
            muncul kekuasaan otonom pertama, dimulai dengan klan Pulungan.
            Kemudian, klan Nasution menguasai daerah Mandailing Gondang, diikuti
            oleh klan Lubis yang menguasai Mandailing Julu, yang masing-masing
            memerintah secara otonom.
          </p>
          <h2 className="font-semibold text-xl font-poppins mt-16">
            Pengaruh Islam (Abad ke-19)
          </h2>
          <p className="mt-3 leading-7">
            Islam menjadi agama utama di Mandailing pada masa kekuasaan Kaum
            Padri (1803–1837). Kaum Padri yang berasal dari Minangkabau membawa
            misi Islamisasi ke Mandailing. Perlawanan terhadap pengaruh Padri
            sempat terjadi, tetapi akhirnya masyarakat Mandailing menerima Islam
            sebagai bagian dari identitas mereka.
          </p>
          <h2 className="font-semibold text-xl font-poppins mt-16">
            Mandailing Hari Ini
          </h2>
          <p className="mt-3 leading-7">
            Saat ini, masyarakat Batak Mandailing terus berkembang pesat
            meskipun tetap menjaga akar budaya dan tradisi mereka. Di Kabupaten
            Mandailing Natal, Sumatera Utara, suku Mandailing masih menjadi
            kelompok etnis utama, dengan nilai kekeluargaan yang kuat dan marga
            sebagai identitas sosial penting. Agama Islam, yang telah
            mempengaruhi budaya mereka sejak abad ke-17, menjadi bagian tak
            terpisahkan dari kehidupan sehari-hari.
          </p>
          <SectionController
            previousLabel={"Fast Facts"}
            previousPath={"/batak-mandailing/fakta-singkat"}
            currentLabel={"Sejarah"}
            nextLabel={"Kesenian & Musik"}
            nextPath={"/batak-mandailing/kesenian-dan-musik"}
          />
        </div>
      </div>
    </>
  );
};

export default History;
