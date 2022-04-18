import React from "react";

const SingleService = ({ service }) => {
  const { img, title, detail, price } = service;
  return (
    <div className="flex flex-col shadow-2xl min-h-[500px] justify-between">
      <div>
        <div className="overflow-hidden">
          <img
            className="w-[480px] h-[330px] object-cover block hover:scale-110 transition-transform"
            src={img}
            alt=""
          />
        </div>
        <div className="description p-2">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-4xl">${price}</p>
          <p>{detail}</p>
        </div>
      </div>
      <button className="h-12 bg-gray-800 hover:bg-gray-700 text-white transition-colors">
        CheckOut
      </button>
    </div>
  );
};

export default SingleService;
