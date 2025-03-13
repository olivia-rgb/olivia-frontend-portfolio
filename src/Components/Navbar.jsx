import React, { useState } from "react";
import { Link } from "react-scroll";
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick(linkName) {
    setActiveLink(linkName);
    setIsOpen(false); // Close menu on mobile after clicking a link
  }

  return (
    <div className="w-[80%] max-w-[1400px] mx-auto py-10 relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <img src="/olyy.png" alt="" className="w-10 -mr-2" />
          <span className="text-white font-bold text-2xl">livia</span>
        </div>
        <div
          className={`menu text-base md:text-lg md:text-white absolute top-30 text-black gap-4 font-bold py-3 md:py-0 bg-white md:bg-transparent flex flex-col ${
            isOpen ? "opacity-100" : "opacity-0"
          } ${isOpen ? "left-0" : "left-[-100%]"} md:opacity-100 transition-all duration-300 md:flex-row w-full h-70 md:h-0 z-50 justify-center md:justify-end items-center md:static`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`underline-hover ${
              activeLink === "home" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`underline-hover ${
              activeLink === "about" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className={`underline-hover ${
              activeLink === "skills" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("skills")}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`underline-hover ${
              activeLink === "projects" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </Link>
          <Link
            to="contacts"
            smooth={true}
            duration={500}
            className={`underline-hover ${
              activeLink === "contacts" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("contacts")}
          >
            Contacts
          </Link>
        </div>
        <img
          src={isOpen ? "/icons/icon-close.svg" : "/icons/icon-hamburger.svg"}
          alt=""
          className="md:hidden"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
}

export default Navbar;
