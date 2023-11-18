import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl xl:px-28 px-4 pt-12 lg:flex bg-gray-100">
      <div className="py-28 flex flex-col-reverse md:flex-row justify-between items-center gap-14">
        <div className="md:w-1/2 items-center">
          <h1 className="text-6xl mb-5">Collections</h1>
          <p className=" text-2xl text-gray-600 mb-7">
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <button className="flex items-center gap-2 bg-gray-900 text-white p-2 rounded-lg hover:bg-orange-500">
            <FaShoppingBag></FaShoppingBag> Shop now
          </button>
        </div>
        <div className="md:w-1/2 items-center">
          <img
            className="lg:w-3/5 h-3/5 rounded-tl-full rounded-br-full"
            src="https://i.ibb.co/F51qZNr/banner.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
