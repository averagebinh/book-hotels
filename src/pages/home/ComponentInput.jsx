import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import object from "../../data/navBar.json";
import { useNavigate } from "react-router-dom";

const ComponentInput = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    // Navigate to "./search" when the search button is clicked
    navigate("/search");
  };
  return (
    <div className="flex rounded-2 border-2 border-yellow-300 px-4 relative">
      <form
        className="flex justify-center items-center w-full px-4 py-2  "
        action=""
      >
        <div>
          <FontAwesomeIcon icon={object[0].icon} className="mr-2" />
          <input className="" type="text" placeholder="Where are you going?" />
        </div>
        <div>
          <FontAwesomeIcon icon={object[5].icon} className="mr-2" />
          <input
            className=""
            type="text"
            placeholder="06/24/2022 to 06/24/2022"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={object[6].icon} className="mr-2" />
          <input type="text" placeholder="1 adult . 0 children . 1 room" />
        </div>
        <button
          className="bg-blue-600 text-white  px-2 py-1 "
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ComponentInput;

// Add code useHistory to the import from react-router-dom so when clicked to Search button, it will redirect to the Search page.
