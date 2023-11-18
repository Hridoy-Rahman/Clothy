import React from "react";

const Category = () => {
  const companyLogo = [
    { id: 1, img: "https://i.ibb.co/6ngs6R9/brand1.png" },
    { id: 2, img: "https://i.ibb.co/1mT74G5/brand2.png" },
    { id: 3, img: "https://i.ibb.co/myWTFpd/brand3.png" },
    { id: 4, img: "https://i.ibb.co/ZJbQWXD/brand4.png" },
    { id: 5, img: "https://i.ibb.co/cXrnX2s/brand5.png" },
  ];
  return (
    <div className="max-w-screen-2xl xl:px-28 px-4 pt-8">
      <div className="flex justify-around">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={`${img}`} alt="" />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 pt-12">
        <p className="font-semibold uppercase text-center md:-rotate-90 md:p-1.5 p-2 bg-black text-white rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <img
            className="w-full hover:scale-105 transition-all duration-200"
            src="https://i.ibb.co/YypnC3H/image1.png"
            alt=""
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <img
            className="w-full hover:scale-105 transition-all duration-200"
            src="https://i.ibb.co/7rL52X3/image2.png"
            alt=""
          />
          <img
            className="w-full hover:scale-105 transition-all duration-200"
            src="https://i.ibb.co/2dFtVmg/image3.png"
            alt=""
          />
          <img
            className="w-full hover:scale-105 transition-all duration-200"
            src="https://i.ibb.co/YXDJ0nQ/image4.png"
            alt=""
          />
          <img
            className="w-full hover:scale-105 transition-all duration-200"
            src="https://i.ibb.co/gStB1R8/image5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
