import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.jpg"

const HeaderNav: React.FC = () => {
  return (
    <div className="px-5 flex justify-between items-center text-sm  font-quicksand gap-5">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faInstagram} className="h-7 hover:text-purple-800" onClick={() => window.open("https://www.instagram.com/xi.rplone/")} />
        <img src={logo} alt="logo" className="h-10  rounded-full"/>
      </div>
      <div className="w-56 text-blue-950 underline">
        <span className="max-w-[50px]">
          <a href="/">Home</a> | <a href="/fakta-singkat">Fast Facts</a> |{" "}
          <a href="/sejarah">Sejarah</a> |{" "}
          <a href="/kesenian-dan-musik">Kesenian & Musik</a> |{" "}
          <a href="/pakaian-adat">Pakaian Adat</a> | {" "}
          <a href="/kuliner">Kuliner</a> |{" "}
          <a href="/rumah-adat">Rumah Adat</a> |{" "}
          <a href="/tradisi-dan-permainan">Tradisi & Permainan</a> | {" "}
          <a href="/galeri">Galeri</a>

        </span>
      </div>
    </div>
  );
};

export default HeaderNav;
