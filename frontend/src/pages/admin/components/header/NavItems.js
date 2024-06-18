import React from "react";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function NavItems
 **/

const NavItems = ({
  link,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  return (
    <NavLink
      to={link}
      className={`${
        name === activeNavName
          ? " font-bold text-primary"
          : " font-semibold text-[#5a5a5a]"
      } flex items-center gap-x-2 py-2 text-lg`}
      onClick={() => setActiveNavName(name)}
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default NavItems;
