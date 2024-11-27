import NavCard from "../components/NavCard";
import Slideshow from "../components/Slideshow";

const Home = () => {
  return (
    <div className="pt-11">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-10 ">
          <h1 className="font-bold text-3xl font-poppins text-white">
            Batak Mandailing
          </h1>
          <span className="text-spcYellow max-w-72 text-center font-quicksand ">
            Sejarah | Kesenian & Musik | Pakaian Adat | Kuliner | Rumah Adat |
            Tradisi & Permainan Adat
          </span>
        </div>
        <Slideshow />
      </div>
      <div className="px-5 mt-32 w-full flex flex-col items-center">
        <h1 className="font-bold text-3xl font-poppins">Selamat Datang!</h1>
        <p className="font-quicksand text-center">ke website sebagai media literasi yang menyediakan macam informasi lengkap terkait salah satu etnis dari Sumatera Utara, yaitu Batak Mandailing.</p>
      </div>
      <div className="flex flex-col mt-32 gap-16 px-5 w-full">
        <h1 className="font-quicksand text-xl font-semibold self-center">Infomateri yang disediakan</h1>
        <NavCard
          title={"Fast Facts"}
          desc={"Beberapa data dan statistik mengenai keberadaan etnis Batak Mandailing."}
          facingTo={"left"}
          dest={"/fakta-singkat"}
        />
        <NavCard
          title={"Sejarah"}
          desc={
            "Baca sejarah lengkap Batak Mandailing mulai dari asal-usul nama Mandailing, dan lain-lain"
          }
          facingTo={"right"}
          dest={"/sejarah"}
        />
        <NavCard
          title={"Kesenian & Musik"}
          desc={"Alat musik tradisional, tarian adat, dan lagu tradisional dapat anda lihat disini."}
          facingTo={"left"}
          dest={"/kesenian-dan-musik"}
        />
        <NavCard
          title={"Pakaian Adat"}
          desc={"Kenali lebih dalam tiap detail yang ada di pakaian adat Batak Mandailing."}
          facingTo={"right"}
          dest={"/pakaian-adat"}
        />
        <NavCard
          title={"Kuliner"}
          desc={"Menyelam ke dalam dunia kuliner lewat cita rasa khas Batak Mandailing."}
          facingTo={"left"}
          dest={"/kuliner"}
        />
        <NavCard
          title={"Rumah Adat"}
          desc={"Baca mengenai rupa dan makna dari bentuk rumah adat Batak Mandailing."}
          facingTo={"right"}
          dest={"/rumah-adat"}
        />
        <NavCard
          title={"Tradisi & Permainan Adat"}
          desc={"Hal apa saja yang menjadi tradisi dan kebiasaan etnis Batak Mandailing"}
          facingTo={"left"}
          dest={"/tradisi-dan-permainan"}
        />
        <NavCard
          title={"Galeri"}
          desc={"Lihat kumpulan foto terkait dengan Batak Mandailing."}
          facingTo={"right"} 
          dest={"/galeri"}
        />
      </div>
    </div>
  );
};

export default Home;
