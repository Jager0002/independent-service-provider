import React from "react";
import cover from "../../assets/images/Cover.jpg";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <div className="mb-14">
        <img className="h-[626px] w-full object-cover" src={cover} alt="" />
      </div>
      <Services></Services>
      <div>
        <p className="text-center text-xl m-4">
          Check Out The link of the instructor training an athlete...
          <link rel="stylesheet" href="" />
        </p>
      </div>
    </div>
  );
};

export default Home;
