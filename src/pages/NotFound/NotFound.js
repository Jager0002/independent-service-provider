import React from "react";

const NotFound = () => {
  const image =
    "https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg";
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default NotFound;
