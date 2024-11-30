import React from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SectionControllerProps {
  previousLabel: String;
  previousPath: String;
  currentLabel: String;
  nextLabel: String;
  nextPath: String;
}

const SectionController: React.FC<SectionControllerProps> = ({
  previousLabel,
  previousPath,
  currentLabel,
  nextLabel,
  nextPath,
}) => {
  return (
    <div className="py-5 px-3 flex justify-between items-center w-full bg-gray-200 shadow-lg mt-60">
      <div className="max-w-[90%] flex justify-center items-center">
        <a
          href={`${previousPath}`}
          className="font-playwrite text-xs flex items-center "
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="h-2 bg-gray-300 rounded-full p-2"
          />
          <span>{previousLabel}</span>
        </a>
      </div>

      <div className=" w-full flex justify-center items-center ">
        <span className="font-poppins font-semibold text-center text-[0.9rem]">{currentLabel}</span>
      </div>

      <div className="max-w-[90%] flex justify-center items-center">
        <a
          href={`${nextPath}`}
          className="font-playwrite text-xs flex items-center "
        >
          <span className="w-fit">{nextLabel}</span>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-2 bg-gray-300 rounded-full p-2"
          />
        </a>
      </div>
    </div>
  );
};

export default SectionController;
