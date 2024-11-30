import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import mkhas from "../assets/makanan-khas.png";
import radat from "../assets/rumah-adat.png";
import pkadat from "../assets/pakaian-adat.png";

const Slideshow = () => {
  const images = [radat, pkadat, mkhas];
  return (
    <Slide
      arrows={false}
      transitionDuration={500}
      infinite={true}
      autoplay={true}
      duration={3000}
    >
      {images.map((image, index) => (
        <div key={index}>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="flex items-center justify-center bg-cover bg-center h-[94vh]"
          >
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default Slideshow;
