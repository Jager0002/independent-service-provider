import React from "react";
import cover from "../../assets/images/Cover.jpg";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <div>
        <img className="h-[626px] w-full object-cover" src={cover} alt="" />
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
