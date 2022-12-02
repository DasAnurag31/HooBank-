import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // Navbar here
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo here  */}
      <img src={logo} alt="HooBank logo" className="w-[124px] h-[32px]" />
      {/* menu items desktop  */}
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointertext-[16px] ${
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* hamburger open and close button  */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      {/* mobile menu  */}
      <div className={`${toggle ? `flex`:`hidden`} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar sm:hidden`} >
      <ul className="list-none flex flex-col justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointertext-[16px] ${
              index === navLinks.length - 1 ? `mb-0` : `mb-4`
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};
export default Navbar;
