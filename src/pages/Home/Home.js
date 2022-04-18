import React from "react";
import cover from "../../assets/images/Cover.jpg";
import Services from "../../Components/Services/Services";

const Home = () => {
  const video =
    "https://www.youtube.com/watch?v=uPX1Ol-8X8Q&ab_channel=overtimeathletes";
  return (
    <div>
      <div className="mb-14">
        <img className="h-[626px] w-full object-cover" src={cover} alt="" />
      </div>
      <Services></Services>
      <div>
        <p className="text-center text-xl m-4">
          Check Out The link of the instructor training an athlete...
          <iframe src={video} frameborder="0"></iframe>
        </p>
      </div>
    </div>
  );
};

export default Home;
