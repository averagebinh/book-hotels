import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/search.json";

const SearchList = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    // Navigate to "./detail" when the "See availability" button is clicked
    navigate("/detail");
  };
  return (
    <div className="mx-2  ">
      {/* Iterate over each item in the data array */}
      {data.map((item, index) => (
        <div
          className="grid grid-cols-4 gap-2 py-4 px-2 border my-3 "
          key={index}
        >
          {/* Display the image in one div */}
          <div className=" col-span-1">
            <img src={item.image_url} alt={item.name} className=" " />
          </div>
          {/* Display the information in another div */}
          <div className="col-span-2 ">
            <h2 className="text-blue-600 font-semibold">{item.name}</h2>
            <p className="text-sm">{item.distance} from center</p>
            <p className="bg-green-700 text-white rounded  inline-block p-1">
              {item.tag}
            </p>
            <p className="font-semibold">{item.description}</p>
            <p className="">{item.type}</p>
            <p className="text-green-700 font-semibold">
              {item.free_cancel ? "Free Cancellation" : ""}
            </p>
            <p className="text-green-700 text-sm ">
              {item.free_cancel
                ? "You can cancel later, so lock in this great price today!"
                : ""}
            </p>
          </div>
          <div className="col-span-1 ">
            <div className=" flex">
              <p>{item.rate_text}</p>
              <p className="bg-blue-900 text-white p-1 ml-auto"> {item.rate}</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold ">${item.price}</p>
              <p className="text-sm text-gray-500">Includes taxes and fees</p>
              <button
                onClick={handleSearchClick}
                className="bg-blue-600 text-white p-2 rounded"
              >
                See availability
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
