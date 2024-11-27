import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div className="min-h-[40vh] mt-60 bg-black text-spcWhite flex flex-col items-center gap-16 py-10 px-4">
      <div>
        <h1 className="font-bold font-poppins">
          RPL<sup>1</sup>{" "}
          <span className="font-playwrite font-normal text-sm">news</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={logo} alt="logo" className="h-20 rounded-full" />
        <FontAwesomeIcon
          icon={faGithub}
          className="h-7"
          onClick={() => window.open("https://github.com/fatiryasn/rpl-news")}
        />
      </div>
      <div>
        <p className="text-xs font-quicksand font-thin">
          Made with love{" "}
          <FontAwesomeIcon icon={faHeart} className="text-spcYellow" />
        </p>
      </div>
    </div>
  );
}

export default Footer