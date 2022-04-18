import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const { registerWithEmail, handleGoogleSignIn } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmail = (e) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      setEmail(e.target.value);
    }
  };

  const handlePassword = (e) => {
    if (e.target.value.length >= 8) {
      setPassword(e.target.value);
    }
  };
  const handleConfirmPassword = (e) => {
    if (e.target.value.length == password) {
      setConfirmPassword(e.target.value);
    }
  };

  return (
    <div className="">
      <h2 className="text-center text-4xl my-8">Register</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-1/4 flex flex-col  mx-auto">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email address"
            onBlur={handleEmail}
            required
          />
        </div>
        <div className="w-1/4 flex flex-col  mx-auto">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            onBlur={handlePassword}
            required
          />
        </div>
        <div className="w-1/4 flex flex-col  mx-auto">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="password"
            id="confirm-password"
            placeholder="re-enter password"
            onBlur={handleConfirmPassword}
            required
          />
        </div>
        <button
          type="submit"
          className="w-1/4 mt-2 bg-gray-700 text-white mx-auto p-3 text-center"
          onClick={() => {
            registerWithEmail(email, password, confirmPassword);
          }}
        >
          Register
        </button>
      </form>
      <div className="mt-4 w-1/4 mx-auto">
        <button
          className="w-full bg-gray-700 text-white mx-auto p-3 text-center my-2"
          onClick={handleGoogleSignIn}
        >
          Sign up with google
        </button>
        <Link className="text-center block" to="/login">
          Already have account?
        </Link>
      </div>
    </div>
  );
};

export default Register;
