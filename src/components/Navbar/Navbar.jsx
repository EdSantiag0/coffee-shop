import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="dark-brown text-white p-4 flex items-center justify-between fixed top-0 w-full h-14 z-10">
      <div className="flex  items-center">
        <img
          src="./images/coffee-cups-logo.png"
          alt="logo"
          className="h-10 w-10"
        />
        <p>Coffee Shop</p>
      </div>

      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <ul
        className={`transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:opacity-100 md:pointer-events-auto md:flex md:items-center md:space-x-4 absolute md:relative top-14 right-0 md:top-0 md:w-auto bg-[rgba(120,60,0,0.8)] md:bg-transparent pr-2 px-2 py-3 rounded-l ${
          isMenuOpen ? "flex flex-col items-end " : ""
        }`}
      >
        <li className="md-flex">
          <a href="#home">Home</a>
          <a href="#coffee">Cafés</a>
          <a href="#drinks">Drinks</a>
          <a href="#candy">Doces</a>
          <a href="#savory">Salgados</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
