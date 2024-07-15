import React from "react";
import { imagePartner } from "../services/Partner/partner.js";

const Partner = () => {
  const handleMouseEnter = () => {
    const scrollingText = document.getElementById("scrollingText");
    scrollingText.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    const scrollingText = document.getElementById("scrollingText");
    scrollingText.style.animationPlayState = "running";
  };

  const imagesPartner = [...imagePartner]; // Combine all images

  return (
    <div className="p-4">
      <h1 className="font-poppins text-xl md:text-2xl font-bold text-center mb-4">
        Partner
      </h1>
      <div className="overflow-hidden whitespace-nowrap relative">
        <div
          id="scrollingText"
          className="flex animate-scroll-right gap-10 p-2"
        >
          {imagesPartner.map((image) => (
            <div
              key={image.id}
              className="flex-none bg-white flex justify-center items-center cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image.title}
                className="h-14 md:h-14 lg:h-14"
                alt={`Partner ${image.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
