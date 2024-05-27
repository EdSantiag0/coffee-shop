import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[rgba(123,63,0,0.8)] text-white p-4 flex items-center justify-between fixed top-0 w-full h-14 z-10">
      <div className="flex  items-center">
        <img
          src="./images/coffee-cups-logo.png"
          alt="logo"
          className="h-10 w-10"
        />
        <p>Coffee Shop</p>
      </div>

      <ul className="flex space-x-4 ">
        <li>
          <a href="#home" className="hover:text-yellow-500 mx-4 ">
            Home
          </a>
          <a href="#coffee" className="hover:text-yellow-500 mx-4">
            Cafés
          </a>
          <a href="#drinks" className="hover:text-yellow-500 mx-4">
            Drinks
          </a>
          <a href="#candy" className="hover:text-yellow-500 mx-4">
            Doces
          </a>
          <a href="#savory" className="hover:text-yellow-500 mx-4">
            Salgados
          </a>
        </li>
      </ul>
      <img
        src="./images/search-icon.svg"
        alt="Search Icon"
        className="h-8 w-8"
      />
    </div>
  );
};

export default Navbar;
