import React from "react";
import object from "../../data/city.json";

const ComponentCity = () => {
  return (
    <div className="flex justify-center">
      {object.map((city) => (
        <div key={city.name} className="relative m-4">
          <img src={city.image} alt={city.name} className="w-48 h-48" />
          <div className="absolute inset-0 flex flex-col items-start justify-end pl-2 pb-2 text-white">
            <h2 className="text-lg font-semibold">{city.name}</h2>
            <p className="text-sm">{city.subText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentCity;
