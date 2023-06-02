import { NavLink } from "react-router-dom";
import { links } from "../data/icons";
import { TodoSearch } from "./TodoSearch";
import appLogo from "../assets/logo.png";

export const SidebarMenu = () => {
  return (
    <div>
      <img src={appLogo} alt="logo" className="pb-16" />
      <TodoSearch />
      <nav>
        <ul>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className="flex items-center gap-4 p-4 rounded-lg w-full bg-white hover:bg-[#2A83FF] group fill-current"
            >
              <span className="text-[#9CA8BA] group-hover:text-white">
                {link.icon}
              </span>
              <h3 className="text-[#262E4A] group-hover:text-white font-semibold">
                {link.name}
              </h3>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};
