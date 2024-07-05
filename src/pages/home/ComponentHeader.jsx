import React from "react";

const ComponentHeader = () => {
  return (
    <header className="container grid top-0 bg-blue-900 text-white">
      <div className="grid place-items-start">
        <div className=" gap-2  ">
          <h1 className="text-3xl font-semibold">
            A Lifetime of discounts? It's Genius.
          </h1>
          <h2 className="">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free account
          </h2>
          <button className="bg-blue-600 mr-1 px-2 py-1">
            Sign in / Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default ComponentHeader;
