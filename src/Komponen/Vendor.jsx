import React from "react";
import { imageVendor } from "../services/Vendor/vendor.js";

const Vendor = () => {
  const images = [...imageVendor]; 

  return (
    <div className="p-4">
      <h1 className="font-poppins text-xl md:text-2xl font-bold text-center mb-4">
        Vendor
      </h1>
      <div className="overflow-hidden whitespace-nowrap relative">
        <div
          id="scrollingText3"
          className="flex animate-scroll-left gap-10 p-2"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none bg-white flex justify-center items-center cursor-pointer"
              onMouseEnter={() => {
                const scrollingText = document.getElementById("scrollingText3");
                scrollingText.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                const scrollingText = document.getElementById("scrollingText3");
                scrollingText.style.animationPlayState = "running";
              }}
            >
              <img
                src={image.title}
                className="h-auto"
                alt={`Vendor ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendor;
