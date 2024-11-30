import React ,{useState} from "react";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState<Boolean>(false);

  const checkPath = (path: String) => location.pathname === path;

  return (
    <>
      <div className="px-5 py-3 lg:px-12 lg:py-5 fixed w-full flex justify-between lg:justify-center items-center bg-spcRed text-spcWhite shadow-md z-50">
        <div className="">
          <h1 className="font-bold font-poppins lg:text-lg ">
            RPL<sup>1</sup>{" "}
            <span className="font-playwrite font-normal text-sm">news</span>
          </h1>
        </div>
        <div className="flex items-center justify-center lg:hidden gap-5">
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
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
