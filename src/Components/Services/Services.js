import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-9/12 mx-auto gap-12">
      {services.map((service) => {
        return (
          <SingleService key={service.id} service={service}></SingleService>
        );
      })}
    </div>
  );
};

export default Services;
