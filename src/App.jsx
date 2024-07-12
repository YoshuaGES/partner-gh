import React from "react";
import "./App.css";

// Import all images from services/client.js
import { imageClient1, imageClient2 } from "./services/client.js";

const App = () => {
  const handleMouseEnter = () => {
    const scrollingText = document.getElementById("scrollingText");
    scrollingText.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    const scrollingText = document.getElementById("scrollingText");
    scrollingText.style.animationPlayState = "running";
  };

  const images = [...imageClient1, ...imageClient2]; // Combine all images

  return (
    <div className="p-2 md:p-10 min-h-screen">
      <h1 className="font-poppins text-xl md:text-2xl font-bold text-center p-2 md:p-10">
        Client
      </h1>
      <div className="overflow-hidden whitespace-nowrap relative">
        <div id="scrollingText" className="flex animate-scroll-left gap-10 p-2">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex-none bg-white flex justify-center items-center cursor-pointer"
            >
              <img
                src={image.title}
                className="h-auto"
                alt={`Client ${image.id}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
