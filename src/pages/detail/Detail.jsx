import data from "../../data/detail.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const {
    name,
    address,
    distance,
    price,
    photos,
    title,
    description,
    nine_night_price,
  } = data;

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {/* Render hotel details */}
        <div className="col-span-2">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-sm">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {address}
          </p>
          <p className="text-blue-500 font-semibold">{distance}</p>
          <p className="text-green-600 font-semibold">{price}</p>
        </div>
        <div>
          <button
            className="rounded bg-blue-500 inline-block px-2 py-1 text-white
       "
          >
            Reserve or Book Now!
          </button>
        </div>
      </div>

      {/* Render hotel photos */}
      <div className="col-span-1 grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Hotel Photo ${index + 1}`}
            className="w-full"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 my-8  container pl-0">
        <div className="col-span-2  ">
          <p className="font-bold text-xl">{title}</p>
          <p className="py-9 text-sm">{description}</p>
        </div>
        <div className=" container flex flex-col justify-evenly bg-blue-100">
          <h1 className="text-gray-600 text-large font-semibold ">
            Perfect for a 9-night stay!
          </h1>
          <p>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <div className="flex">
            <p className="font-bold text-xl">${nine_night_price}</p>
            <p className="ml-1 text-xl text-gray-600"> (9 nights)</p>
          </div>
          <button
            className="rounded bg-blue-500 px-2 text-white
          "
          >
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
