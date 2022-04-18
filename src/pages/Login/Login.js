import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { handleGoogleSignIn } = useFirebase();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmail = (e) => {};

  const handlePassword = (e) => {};

  return (
    <div className="">
      <h2 className="text-center text-4xl my-8">Login</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-1/4 flex flex-col  mx-auto">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="enter email address"
            onBlur={handleEmail}
          />
        </div>
        <div className="w-1/4 flex flex-col  mx-auto">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            onBlur={handlePassword}
          />
        </div>
        <button
          type="submit"
          className="w-1/4 mt-2 bg-gray-700 text-white mx-auto p-3 text-center"
        >
          login
        </button>
      </form>
      <div className="mt-4 w-1/4 mx-auto">
        <button
          className="w-full bg-gray-700 text-white mx-auto p-3 text-center my-2"
          onClick={handleGoogleSignIn}
        >
          Sign in with google
        </button>
        <Link className="text-center block" to="/register">
          Don't have account
        </Link>
      </div>
    </div>
  );
};

export default Login;
