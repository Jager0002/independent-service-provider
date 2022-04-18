import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.init";

const Header = () => {
  // const [exist, setExist] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
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
          <Link to="/checkOut">Checkout</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          {user ? (
            <button
              onClick={() => {
                signOut(auth);
                navigate("/login");
              }}
            >
              signout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
