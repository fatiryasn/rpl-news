import React ,{useState} from "react";

import { faBars, faLanguage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState<Boolean>(false);

  const checkPath = (path: String) => location.pathname === path;

  return (
    <>
      <div className="px-5 py-3 fixed w-full flex justify-between items-center bg-spcRed text-spcWhite shadow-md z-50">
        <div className="">
          <h1 className="font-bold font-poppins ">
            RPL<sup>1</sup>{" "}
            <span className="font-playwrite font-normal text-sm">news</span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="font-playwrite">
            <FontAwesomeIcon icon={faLanguage} />
          </button>
          <div className="flex md:hidden" onClick={() => setSidebar(!sidebar)}>
            {sidebar ? (
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-5" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`fixed z-40 top-12 bottom-0 right-0 left-1/2 bg-black flex flex-col transform transition-transform duration-300 ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between p-5 mt-12 h-full">
          <div className="flex flex-col gap-5 font-quicksand">
            <a
              href="/"
              className={`${
                checkPath("/")
                  ? "text-spcYellow font-bold border-solid border-white  w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Home
            </a>
            <a
              href="/fakta-singkat"
              className={`${
                checkPath("/fakta-singkat")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Fast Facts
            </a>
            <a
              href="/sejarah"
              className={`${
                checkPath("/sejarah")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Sejarah
            </a>
            <a
              href="/kesenian-dan-musik"
              className={`${
                checkPath("/kesenian-dan-musik")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Kesenian & Musik
            </a>
            <a
              href="/pakaian-adat"
              className={`${
                checkPath("/pakaian-adat")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Pakaian Adat
            </a>
            <a
              href="/kuliner"
              className={`${
                checkPath("/kuliner")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Kuliner
            </a>
            <a
              href="/rumah-adat"
              className={`${
                checkPath("/rumah-adat")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Rumah Adat
            </a>
            <a
              href="/tradisi-dan-permainan"
              className={`${
                checkPath("/tradisi-dan-permainan")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Tradisi & Permainan Adat
            </a>
            <a
              href="/galeri"
              className={`${
                checkPath("/galeri")
                  ? "text-spcYellow font-bold border-solid border-white w-fit"
                  : "text-white  border-transparent"
              } border-b-2 `}
            >
              Galeri
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
