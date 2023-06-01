import { Home } from "../pages/Home";
import { SidebarMenu } from "../components/SidebarMenu";

export const Layout = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-5 gap-3">
      <div className="bg-white h-full p-8">
        <SidebarMenu />
      </div>

      <main className="bg-[#F7FAFB] col-span-4 h-full p-8">
        <Home />
      </main>
    </div>
  );
};
