import React, { useState } from "react";
import { HamburgerMenuSVG } from "../constants/svgStrings.js";

import logo from "../assets/logo.png";

import menuItems from "../constants/menu.js";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (targetSectionId, event) => {
    const targetSection = document.getElementById(targetSectionId);

    if (targetSection) {
      // Smooth scroll to the target section with animation
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="grid grid-cols-12 items-center bg-sectionGray sticky top-0 z-50 ">
      <div className="flex justify-center text-center">
        <img className=" h-14" src={logo} />
      </div>

      <ul
        className={`md:flex md:items-center items-start bg-sectionGray w-auto px-4  z-[-1] md:z-auto md:static absolute top-14 right-[-113px] pr-2 col-span-6 col-start-4  md:text-center text-end md:justify-center justify-end gap-6  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.title}>
            <a
              className="text-secondary text-lg hover:text-primary hover:font-bold cursor-pointer"
              onClick={(event) => handleMenuItemClick(item.title)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="md:hidden col-span-2 flex col-start-12 justify-center pr-4"
        onClick={toggleMenu}
      >
        <HamburgerMenuSVG className="hover:text-primary hover:font-bold cursor-pointer" />
      </div>
    </section>
  );
};
export default Header;
