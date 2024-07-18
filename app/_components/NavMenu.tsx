import React from "react";
import NavLink from "./NavLink";

const NavMenu = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-8 text-base">
          <li>
            <NavLink href="/">Início</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
