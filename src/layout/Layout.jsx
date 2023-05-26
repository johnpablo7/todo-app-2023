import { SidebarMenu } from "../components/SidebarMenu";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-5 gap-3">
      <div className="bg-white h-full p-8">
        <SidebarMenu />
      </div>

      <main className="bg-blue-400 col-span-4 h-full p-8">
        <Outlet />
      </main>
    </div>
  );
};
