import SectionController from "../components/SectionController";
import {Helmet} from "react-helmet"

import gondang from "../assets/gondang.png";
import tarian from "../assets/tarian.png";
import tarian2 from "../assets/tarian2.png";
import gondang2 from "../assets/gondang2.png";
import marudan from "../assets/marudan.mp3";
import sarama from "../assets/sarama.png";
import HeaderNav from "../components/HeaderNav";

const ArtMusic = () => {
  return (
    <>
      <Helmet>
        <title>Kesenian & Musik</title>
      </Helmet>
      <div className="pt-14">
        <HeaderNav />
        <div className="mt-20 px-5 w-full flex flex-col">
          <h1 className=" font-poppins font-bold text-2xl">
            Kesenian & Musik dari Batak Mandailing
          </h1>
          <div className="flex flex-col items-center">
            <img src={gondang} alt="gondang" className=" w-[90%] mt-5" />
            <div className="flex justify-between px-5">
              <img src={tarian} alt="tarian" className="w-[49.2%] mt-1" />
              <img src={tarian2} alt="tarian" className="w-[49.2%] mt-1" />
            </div>
          </div>
          <p className="mt-3 leading-7">
            Kesenian dan musik tradisional Batak Mandailing menjadi bukti nyata
            akan kekayaan budaya Indonesia yang beragam. Dari dentingan alat
            musik Gordang Sambilan hingga tarian Tor-tor yang anggun, seni
            Mandailing merefleksikan harmoni dan kearifan lokal yang diwariskan
            oleh leluhur.
          </p>
          <h2 className="font-semibold text-xl font-poppins mt-16">
            1. Alat musik tradisional
          </h2>
          <p className="mt-3 leading-7">
            Gordang Sambilan, terdiri dari sembilan gendang berukuran besar dan
            panjang yang diatur dari yang terbesar hingga yang terkecil. Dulunya
            instrumen ini digunakan untuk memanggil roh nenek moyang pada masa
            sebelum Islam serta untuk mengadakan upacara meminta hujan (mangido
            udan) guna mengatasi kekeringan dan menghentikan hujan yang
            terus-menerus.{" "}
          </p>
          <div className="flex justify-between">
            <img src={gondang2} alt="gondang" className=" w-[49%] mt-5" />
            <img src={gondang} alt="gondang" className=" w-[49%] mt-5" />
          </div>
          <h2 className="font-semibold text-xl font-poppins mt-16">
            2. Lagu Tradisional
          </h2>
          <p className="mt-3 leading-7">
            Marudan Marlasniari, sebuah lagu yang menceritakan bagaimana para
            orang tua berjuang untuk mencari nafkah dan menafkahi anak-anak
            mereka, meski cuaca panas, hujan maupun mendung, namun hal tersebut
            tidak menghalangi mereka untuk tetap bekerja dan memenuhi kebutuhan
            anak-anak mereka.
          </p>
          <div className="flex flex-col items-center mt-5 gap-10">
            <h3 className="font-semibold text-lg font-poppins mt-5">
              Marudan Marlasniari
            </h3>
            <audio controls>
              <source src={`${marudan}`} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <h3 className="font-bold text-lg font-quicksand mt-5">Lirik lagu:</h3>
          <div className="text-sm">
            <p className="mt-3">
              Marudan marlasniari hutaon doi amang
              <br /> Manjalaki parabiton mi <br /> Bope na dalan marutang,
              hubaen doi amang <br /> Asalkon ma na jadi sikolah mi
            </p>
            <p className="mt-3">
              Manangkok dohot manuat, hutaon doi inang <br /> Manjalaki
              hangoluan on <br />
              Bope na maridi hodok, hutaon doi inang <br /> Asalkon ma na lalu
              sikolah mi <br />
            </p>
            <p className="mt-3">
              Hari margonti bulan, bulan margonti taon <br /> Hari margonti
              bulan, bulan margonti taon <br /> Pasikolahon pe mur ma bahat{" "}
              <br /> Umur pe mur matobang
            </p>
            <p className="mt-3">
              Tai nung sannari, ho nung ma gabe <br /> Hami pe inda di ingot ho
              be <br /> Tai dung sannari ho nung ma gabe <br />
              Hami pe inda di ingot ko be
            </p>
            <p className="mt-3">
              Holong ni orang tua, imada tu anak na <br />
              Sadalalam ni lautan, salembut ni sutra <br /> Inda jungada
              mandokkon loja <br /> Inda jungada mangido upah <br /> Asalkon ma
              baya <br /> Anakki mar bahagia <br /> Asalkon ma baya Anakki mar
              bahagia
            </p>
            <p className="mt-3">
              Marudan marlasniari hutaon doi amang <br /> Manjalaki parabiton mi{" "}
              <br /> Bope na dalan marutang, hubaen doi amang <br /> Asalkon ma
              na jadi sikolah mi
            </p>
          </div>
          <h2 className="font-semibold text-xl font-poppins mt-16">
            3. Tarian Adat
          </h2>
          <p className="mt-3 leading-7">
            Setiap daerah punya jenis tariannya masing-masing. Salah satunya
            etnis Mandailing. Mandailing punya beberapa tarian khas yang sering
            dipertunjukkan dalam berbagai upacara dan kegiatan adat di
            masyarakat.
          </p>
          <h3 className="font-bold text-lg font-quicksand mt-5">
            1. Sarama Datu
          </h3>
          <img src={sarama} alt="sarama-datu" className="mt-3" />
          <p className="mt-3 leading-7">
            Tarian ini diiringi dengan lagu ensambel. Dengan music sambilan
            Sibaso, yang seolah-olah seperti meminta bantuan atau pertolongan
            pada begu (roh-roh halus) untuk mengabulkan permohonannya. Jenis
            tarian ini sering dipakai saat terjadi banyak musibah. Misalnya saja
            seperti hujan terus menerus, kekeringan, dan juga penyakit menular.
            Dari kepercayaan masyarakat setempat, hanya Sibasolah yang bisa
            berkomunikasi dengan roh halus lewat tariannya.
          </p>
          <h3 className="font-bold text-lg font-quicksand mt-5">
            2. Tor-tor Tapak
          </h3>
          <img src={tarian} alt="tor-tor" className="mt-3" />
          <p className="mt-3 leading-7">
            Pada tarian ini, biasanya diperuntukkan sebagai tari persembahan
            pada upacara perkawinan. Dengan nama upacara Horja Godang Haroan
            Boru. Kita bisa mengartikannya sebagai datangnya pengantin yang akan
            menikah.Tarian tor-tor tepak ini dilakukan pada malam hari dan
            digelar selama 3 hari. Ketika ingin melakukan tarian, para penari
            menggunakan pakaian khas Mandailing dengan aksesoris di bagian
            kepala.
          </p>

          <SectionController
            previousLabel={"Sejarah"}
            previousPath={"/sejarah"}
            currentLabel={"Kesenian & Musik"}
            nextLabel={"Pakaian Adat"}
            nextPath={"/pakaian-adat"}
          />
        </div>
      </div>
    </>
  );
};

export default ArtMusic;
