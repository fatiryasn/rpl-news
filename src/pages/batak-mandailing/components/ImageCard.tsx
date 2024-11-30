import React, { useState } from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    setTimeout(() => setShowContent(true), 100); 
  };
  const closePopup = () => {
    setShowContent(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto cursor-pointer rounded-lg shadow-lg border border-gray-500 mt-5 hover:opacity-90"
        onClick={openPopup}
      />

      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 px-5 flex items-center justify-center z-50 transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transition-transform duration-300 ${
              showContent ? "scale-100" : "scale-90"
            }`}
          >
            <h2 className="text-lg font-bold mb-4">{alt}</h2>
            <p className="text-sm text-gray-700">{description}</p>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
