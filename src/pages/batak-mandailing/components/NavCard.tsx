import React from "react";

interface NavCardProps {
  title: String;
  desc: String;
  facingTo: String;
  dest: String;
}

const NavCard: React.FC<NavCardProps> = ({ title, desc, facingTo, dest }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`${
          facingTo == "left" ? "rounded-se-3xl" : "rounded-ss-3xl self-end"
        } h-3 w-[50%] lg:w-[16%] bg-gray-800`}
      ></div>
      <div
        className={`flex flex-col ${
          facingTo == "left"
            ? "rounded-se-3xl rounded-ss-none self-start items-start"
            : "self-end rounded-ss-3xl rounded-se-none items-end"
        } p-5 max-w-96 shadow-md rounded-sm border border-slate-300`}
      >
        <h1 className="text-xl lg:text-2xl font-bold font-poppins text-spcRed">{title}</h1>
        <p
          className={`${
            facingTo == "left" ? "text-start" : "text-end"
          } font-quicksand text-sm lg:text-base`}
        >
          {desc}
        </p>
        <a href={`${dest}`}>
          <button
            className={`${
              facingTo == "left" ? "self-end" : "self-start"
            } font-playwrite text-xs mt-3 px-5 py-1 bg-spcYellow rounded-lg border-black border hover:bg-yellow-300`}
          >
            Lihat
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavCard;
