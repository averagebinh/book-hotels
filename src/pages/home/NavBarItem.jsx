import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import object from "../../data/navBar.json";

const NavBarItem = () => {
  return (
    <header className="container w-full flex justify-center  top-0 bg-blue-900 text-white py-2">
      <div className="grid grid-cols-3 gap-4">
        <h1 className="col-span-1 font-bold text-lg md:text-xl ">
          Booking Website
        </h1>

        <div className="col-span-2 row-start-2 mt-4 col-start-1 col-end-3 flex flex-row">
          {object.map((item, index) => (
            <div className=" flex items-center mb-2 mr-7" key={index}>
              <FontAwesomeIcon icon={["fas", item.icon]} className="mr-2" />
              <span>{item.type}</span>
            </div>
          ))}
        </div>
        <div className=" flex mt-2 col-span-1 col-start-3 row-start-1 justify-end">
          <button className=" px-4 py-2 mr-2  text-blue-900 bg-white rounded">
            Register
          </button>
          <button className="px-4 py-2 mr-2  text-blue-900 bg-white rounded">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBarItem;
