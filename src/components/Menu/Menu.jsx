import React, { useState } from "react";
import MenuCategory from "./MenuCategory";
import {
  MenuCoffees,
  MenuDrinks,
  MenuCandy,
  MenuSavory,
} from "../../utils/data";

const Menu = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const getItemsByCategory = () => {
    switch (categoryFilter) {
      case "coffees":
        return <MenuCategory title="Cafés" items={MenuCoffees} />;
      case "drinks":
        return <MenuCategory title="Bebidas" items={MenuDrinks} />;
      case "candy":
        return <MenuCategory title="Doces" items={MenuCandy} />;
      case "savory":
        return <MenuCategory title="Salgados" items={MenuSavory} />;
      case "all":
        return (
          <>
            <section id="coffee">
              <MenuCategory title="Cafés" items={MenuCoffees} />
            </section>

            <hr className="border-t border-gray-300 my-8" />
            <section id="drinks">
              <MenuCategory title="Bebidas" items={MenuDrinks} />
            </section>

            <hr className="border-t border-gray-300 my-8" />
            <section id="candy">
              <MenuCategory title="Doces" items={MenuCandy} />
            </section>

            <hr className="border-t border-gray-300 my-8" />
            <section id="savory">
              <MenuCategory title="Salgados" items={MenuSavory} />
            </section>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-4 md:px-6 lg:px-16 font-sans">
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6 font-serif">
        Cardápio
      </h2>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setCategoryFilter("all")}
          className={`${
            categoryFilter === "all" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setCategoryFilter("coffees")}
          className={`${
            categoryFilter === "coffees" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Cafés
        </button>
        <button
          onClick={() => setCategoryFilter("drinks")}
          className={`${
            categoryFilter === "drinks" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Bebidas
        </button>
        <button
          onClick={() => setCategoryFilter("candy")}
          className={`${
            categoryFilter === "candy" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Doces
        </button>
        <button
          onClick={() => setCategoryFilter("savory")}
          className={`${
            categoryFilter === "savory" ? "text-blue-500" : "text-gray-500"
          }`}
        >
          Salgados
        </button>
      </div>
      <div className="menu-items">{getItemsByCategory()}</div>
    </div>
  );
};

export default Menu;
