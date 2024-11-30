import React from "react";

interface NewsCardProps {
  title: String;
  desc: String;
  dest: String;
  img: String;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, desc, dest, img }) => {
  return (
    <div className="flex flex-col min-w-full shadow-lg border border-gray-400 hover:scale-105 transition cursor-pointer ">
      <img src={`${img}`} alt="preview" className="h-48 w-full object-cover" />
      <div
        className="flex flex-col items-start p-5"
        onClick={() => window.open(`${dest}`)}
      >
        <h2 className="font-poppins font-bold text-lg">{title}</h2>
        <p className="font-quicksand text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
