import SearchIcon from "../svg/SearchIcon";

export const SidebarMenu = () => {
  return (
    <div>
      <img src="/images/logo.png" alt="logo" className="pb-16" />
      <div className="relative mb-6">
        <SearchIcon className="absolute top-4 left-4" />
        <input
          type="text"
          placeholder="Search here"
          className="bg-[#FAFAFA] text-[#96A0B5] rounded-lg w-full py-4 px-12 focus:outline-none"
        />
      </div>
      <div>hola</div>
    </div>
  );
};
