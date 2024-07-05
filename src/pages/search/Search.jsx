import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";

const Search = () => {
  return (
    <div className="flex">
      {/* h-screen overflow-hidden */}
      <div className="">
        <SearchPopup className=" bg-gray-200" />
      </div>
      <div className="">
        <SearchList className="bg-gray-200" />
      </div>
    </div>
  );
};

export default Search;
