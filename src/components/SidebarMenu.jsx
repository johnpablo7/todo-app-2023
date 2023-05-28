import { NavLink } from "react-router-dom";
import { links } from "../data/icons";
import { TodoSearch } from "./TodoSearch";

export const SidebarMenu = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <img src="/images/logo.png" alt="logo" className="pb-16" />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
