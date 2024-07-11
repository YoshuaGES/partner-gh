import {
  imageClient1,
  imageClient2,
  imageClient3,
  imageClient4,
} from "./services/client.js";

import { imagePartner1 } from "./services/partner.js";
import { imagePartner2 } from "./services/partner.js";
import { imageVendor1 } from "./services/vendor.js";
import { imageVendor2 } from "./services/vendor.js";

const App = () => {
  return (
    <div className="bg-gray-100 p-20 min-h-screen">
      <h1 className="font-poppins text-2xl font-bold text-center p-20">
        Our Client
      </h1>
      <div className="grid grid-cols-8 gap-4 p-2 animate-scroll-left">
        {imageClient1.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-4 p-2 animate-scroll-right">
        {imageClient2.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-4 p-2 animate-scroll-left">
        {imageClient3.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-4 p-2 animate-scroll-right">
        {imageClient4.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
      <h1 className="font-poppins text-2xl font-bold text-center p-20">
        Our Partner
      </h1>
      <div className="grid grid-cols-7 gap-4 p-2 animate-scroll-left">
        {imagePartner1.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-4 p-2 animate-scroll-right">
        {imagePartner2.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
      <h1 className="font-poppins text-2xl font-bold text-center p-20">
        Our Vendor
      </h1>
      <div className="grid grid-cols-4 gap-4 p-2 animate-scroll-left">
        {imageVendor1.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4 p-2 animate-scroll-right">
        {imageVendor2.map((image) => (
          <div
            key={image.id}
            className="bg-white flex justify-center items-center rounded-lg shadow-lg cursor-pointer"
          >
            <img src={image.title} className="h-auto p-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;