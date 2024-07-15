import React from "react";
import { imageClient1 } from "../services/Client/client1.js";
import { imageClient2 } from "../services/Client/client2.js";
import { imageClient3 } from "../services/Client/client3.js";

const Client = () => {
  const images1 = [...imageClient1, ...imageClient1];
  const images2 = [...imageClient2, ...imageClient2];
  const images3 = [...imageClient3, ...imageClient3];

  return (
    <div className="p-4">
      <h1 className="font-poppins text-xl md:text-2xl font-bold text-center mb-4">
        Client
      </h1>
      <div className="overflow-hidden whitespace-nowrap relative">
        <div
          id="scrollingText1"
          className="flex animate-scroll-left gap-10 p-2"
        >
          {images1.map((image, index) => (
            <div
              key={index}
              className="flex-none bg-white flex justify-center items-center cursor-pointer"
              onMouseEnter={() => {
                const scrollingText = document.getElementById("scrollingText1");
                scrollingText.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                const scrollingText = document.getElementById("scrollingText1");
                scrollingText.style.animationPlayState = "running";
              }}
            >
              <img
                src={image.title}
                className="h-auto"
                alt={`Client ${index}`}
              />
            </div>
          ))}
        </div>
        <div
          id="scrollingText2"
          className="flex animate-scroll-right gap-10 p-2"
        >
          {images2.map((image, index) => (
            <div
              key={index}
              className="flex-none bg-white flex justify-center items-center cursor-pointer"
              onMouseEnter={() => {
                const scrollingText = document.getElementById("scrollingText2");
                scrollingText.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                const scrollingText = document.getElementById("scrollingText2");
                scrollingText.style.animationPlayState = "running";
              }}
            >
              <img
                src={image.title}
                className="h-auto"
                alt={`Client ${index}`}
              />
            </div>
          ))}
        </div>
        <div
          id="scrollingText5"
          className="flex animate-scroll-left gap-10 p-2"
        >
          {images3.map((image, index) => (
            <div
              key={index}
              className="flex-none bg-white flex justify-center items-center cursor-pointer"
              onMouseEnter={() => {
                const scrollingText = document.getElementById("scrollingText5");
                scrollingText.style.animationPlayState = "paused";
              }}
              onMouseLeave={() => {
                const scrollingText = document.getElementById("scrollingText5");
                scrollingText.style.animationPlayState = "running";
              }}
            >
              <img
                src={image.title}
                className="h-auto"
                alt={`Client ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
