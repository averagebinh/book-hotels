import React from "react";

import object from "../../data/hotel_list.json";

const ComponentHotelList = () => {
  return (
    <div className="">
      <h1 className="flex justify-center font-semibold text-xl">
        Homes guests love
      </h1>
      <div className="flex justify-center">
        {object.map((type, index) => (
          <div key={index} className="m-4 py-4">
            <img src={type.image_url} alt={type.name} className="w-48 h-48" />
            <div className=" mt-2">
              <h2 className="text-lg font-semibold underline text-purple-600">
                {type.name}
              </h2>
              <h2 className="text-mg ">{type.city}</h2>

              <p className="text-sm font-semibold">
                Starting from ${type.price}
              </p>
            </div>
            <div className="flex items-center my-2 ">
              <p className="text-sm text-white px-1 mr-2 bg-blue-900">
                {type.rate}
              </p>
              <p>{type.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentHotelList;
