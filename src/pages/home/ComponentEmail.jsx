import React from "react";

const ComponentEmail = () => {
  return (
    <div className="bg-blue-900 flex justify-center items-center py-6 ">
      <div className="container text-center">
        <h1 className="text-white text-4xl font-bold mb-4">
          Save time, save money!
        </h1>
        <p className="text-white mb-4">
          Sign up and we'll send the best deals to you
        </p>
        <input
          type="text"
          placeholder="Your Email"
          className="px-6 py-3 mb-4 mr-2 border rounded"
        />
        <button className="px-3 py-3 bg-blue-600 text-white rounded">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ComponentEmail;
