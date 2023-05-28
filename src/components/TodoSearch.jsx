import SearchIcon from "../svg/SearchIcon";

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <div className="relative mb-6">
      <SearchIcon className="absolute top-4 left-4" />
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
          // console.log(event.target.value);
        }}
        type="text"
        placeholder="Search here"
        className="bg-[#FAFAFA] text-[#96A0B5] rounded-lg w-full py-4 px-14 focus:outline-none"
      />
    </div>
  );
};
