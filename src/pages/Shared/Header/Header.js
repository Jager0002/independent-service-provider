import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white sticky top-0">
      <div className="items-center w-11/12 mx-auto h-20 font-thin flex justify-between">
        <div>
          <Link to="/">
            <h2>Athlete Trainer</h2>
          </Link>
        </div>
        <div className="flex gap-x-4">
          <Link to="/">Home</Link>
          <Link to="/CheckOut">Checkout</Link>
          <Link to="/About">About</Link>
          <Link to="/Blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
