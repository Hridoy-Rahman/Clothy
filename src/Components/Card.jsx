import React from "react";
import { Link } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border-2 rounded-xl items-center justify-center border-gray-400 hover:scale-105 transition-all duration-200"
        >
          <Link to={`/shop/${product.id}`}>
            <img src={product.image} alt="" />
          </Link>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h1>
            <div className="flex justify-between">
              <p className="text-gray-500 font-semibold">{product.category}</p>
              <p className="text-gray-900 font-bold">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
