import React from "react";

const SingleService = ({ service }) => {
  const { img, title, details, price } = service;
  return (
    <div className="bg-red-200">
      <div>
        <img className="w-full h-[300px] object-cover block" src={img} alt="" />
      </div>
      <div className="description ">
        
      </div>
    </div>
  );
};

export default SingleService;
