import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const {handleGoogleSignIn } = useFirebase();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmail = (e) => {};

  const handlePassword = (e) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email address"
            onBlur={handleEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            onBlur={handlePassword}
          />
        </div>
        <button type="submit">login</button>
      </form>
      <Link to='/register'>dont have account</Link>
      <button onClick={handleGoogleSignIn}>sign in with google</button>
    </div>
  );
};

export default Login;
