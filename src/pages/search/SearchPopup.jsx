import React from "react";

const SearchPopup = () => {
  return (
    <div className="flex flex-col bg-yellow-500 px-2 ">
      <h1 className="text-xl font-semibold text-gray-600">Search</h1>
      <p className="py-2 text-sm">Destination</p>
      <input type="text" placeholder="" className="py-2"></input>
      <p className="py-2 text-sm">Check-in Date</p>
      <input
        type="text"
        placeholder="06/24/2022 to 06/24/2022"
        className="py-2 text-black"
      ></input>
      <p className="py-2 text-sm">Options</p>
      <div className="text-gray-600 ">
        <div className="py-2">
          <label className="text-xs">Min Price per night</label>
          <input type="text" className="py-1" placeholder="" />
        </div>
        <div className="py-2">
          <label className="text-xs">Max Price per night</label>
          <input type="text" className="py-1" placeholder="" />
        </div>
        <div className="py-2 flex">
          <label className="text-xs">Adult</label>
          <input
            type="text"
            className="py-1 ml-auto" //how to make this input start at the far right of the row?
            placeholder="1"
          />
        </div>
        <div className="py-2 flex">
          <label className="text-xs">Children</label>
          <input type="text" className="py-1 ml-auto" placeholder="0" />
        </div>
        <div className="py-2 flex">
          <label className="text-xs">Room</label>
          <input type="text" className="py-1 ml-auto" placeholder="1" />
        </div>
      </div>
      <button className="py-2 my-6  bg-blue-600">Search</button>
    </div>
  );
};

export default SearchPopup;
