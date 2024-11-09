import React, { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="name-logo rounded-sm font-bold text-xl px-4 py-1.5 text-neutral-800 hover:text-black"
          >
            स्वप्निल's
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
