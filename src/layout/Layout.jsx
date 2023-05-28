import { useState } from "react";
import { SidebarMenu } from "../components/SidebarMenu";
import { Home } from "../pages/Home";

export const Layout = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log("searchValue:", searchValue);

  return (
    <div className="w-full min-h-screen grid grid-cols-5 gap-3">
      <div className="bg-white h-full p-8">
        <SidebarMenu
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <main className="bg-[#F7FAFB] col-span-4 h-full p-8">
        <Home searchValue={searchValue} />
      </main>
    </div>
  );
};
