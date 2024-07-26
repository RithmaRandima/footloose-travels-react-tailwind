import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

const NavbarBottom = () => {
  const [nav, setNav] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const handelNav = () => {
    setNav(!nav);
  };

  console.log();
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center z-10 text-white absolute">
      <ul className="hidden sm:flex px-4">
        <li onClick={() => setActiveNav("home")}>
          <a
            href="/"
            className="text-[18px] font-bold"
            style={{ color: activeNav === "home" ? "red" : "white" }}
          >
            Home
          </a>
        </li>
        <li onClick={() => setActiveNav("about")}>
          <a
            href="#about"
            className="text-[18px] font-bold"
            style={{ color: activeNav === "about" ? "red" : "white" }}
          >
            About
          </a>
        </li>
        <li onClick={() => setActiveNav("destination")}>
          <a
            href="#destination"
            className="text-[18px] font-bold"
            style={{ color: activeNav === "destination" ? "red" : "white" }}
          >
            Destination
          </a>
        </li>
        <li onClick={() => setActiveNav("gallery")}>
          <a
            href="#gallery"
            className="text-[18px] font-bold"
            style={{ color: activeNav === "gallery" ? "red" : "white" }}
          >
            Gallery
          </a>
        </li>

        <li onClick={() => setActiveNav("contact")}>
          <a
            href="#footer"
            className="text-[18px] font-bold"
            style={{ color: activeNav === "contact" ? "red" : "white" }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebook
          className="mx-4 hover:text-[#f00] hover:translate-y-[-5px] duration-200"
          size={25}
        />
        <FaTwitter
          className="mx-4 hover:text-[#f00] hover:translate-y-[-5px] duration-200"
          size={25}
        />
        <FaGooglePlusG
          className="mx-4 hover:text-[#f00] hover:translate-y-[-5px] duration-200"
          size={25}
        />
        <FaInstagram
          className="mx-4 hover:text-[#f00] hover:translate-y-[-5px] duration-200"
          size={25}
        />
      </div>
      {/* Hamburger Icon */}
      <div
        onClick={() => {
          handelNav();
        }}
        className="sm:hidden z-10"
      >
        {nav ? (
          <FaTimes size={20} className="mr-4 cursor-pointer" />
        ) : (
          <FaBars size={20} className="mr-4 cursor-pointer" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handelNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-8 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#destination">Destination</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>

          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
