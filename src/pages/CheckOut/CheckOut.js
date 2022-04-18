import React from "react";

const CheckOut = () => {
  const image =
    "https://images.unsplash.com/photo-1602045486350-4e53a69865c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80";
  return (
    <div>
      <p className="text-xl text-center">You have checked Out the Item.</p>
      <p className="text-xl text-center">Thank You for staying with us.</p>
      <img src={image} alt="" />
    </div>
  );
};

export default CheckOut;
