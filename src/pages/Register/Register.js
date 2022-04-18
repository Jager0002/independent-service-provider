import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const { registerWithEmail, handleGoogleSignIn } = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmail = (e) => {};

  const handlePassword = (e) => {};

  const handleConfirmPassword = (e) => {};
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
        <div>
          <label htmlFor="confirm-password"></label>
          <input
            type="password"
            name="confirmpassword"
            id="confirm-password"
            placeholder="enter password"
            onBlur={handleConfirmPassword}
          />
        </div>
        <button type="submit">register</button>
      </form>
      <button onClick={handleGoogleSignIn}>sign in with google</button>
    </div>
  );
};

export default Register;
