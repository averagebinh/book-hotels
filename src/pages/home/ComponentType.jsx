import React from "react";

import object from "../../data/type.json";

const ComponentType = () => {
  return (
    <div className="">
      <h1 className="flex justify-center font-semibold text-xl">
        Browse by property type
      </h1>
      <div className="flex justify-center">
        {object.map((type, index) => (
          <div key={index} className="m-4">
            <img src={type.image} alt={type.name} className="w-48 h-48" />
            <div className=" mt-2">
              <h2 className="text-lg font-semibold">{type.name}</h2>
              <p className="text-sm text-gray-600">{type.count} properties</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentType;
