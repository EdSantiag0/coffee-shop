import React, { useState } from "react";
import "../../App.css";
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

            <hr className="border-t my-8" />
            <section id="drinks">
              <MenuCategory title="Bebidas" items={MenuDrinks} />
            </section>

            <hr className="border-t my-8" />
            <section id="candy">
              <MenuCategory title="Doces" items={MenuCandy} />
            </section>

            <hr className="border-t my-8" />
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
      <div className="flex flex-wrap justify-center space-x-3 mb-8">
        <button
          onClick={() => setCategoryFilter("all")}
          className={`${
            categoryFilter === "all" ? "light-brown" : "dark-brown"
          } btn-custom`}
        >
          Todos
        </button>
        <button
          onClick={() => setCategoryFilter("coffees")}
          className={`${
            categoryFilter === "coffees" ? "light-brown" : "dark-brown"
          } btn-custom`}
        >
          Cafés
        </button>
        <button
          onClick={() => setCategoryFilter("drinks")}
          className={`${
            categoryFilter === "drinks" ? "light-brown" : "dark-brown"
          } btn-custom`}
        >
          Bebidas
        </button>
        <button
          onClick={() => setCategoryFilter("candy")}
          className={`${
            categoryFilter === "candy" ? "light-brown" : "dark-brown"
          } btn-custom`}
        >
          Doces
        </button>
        <button
          onClick={() => setCategoryFilter("savory")}
          className={`${
            categoryFilter === "savory" ? "light-brown" : "dark-brown"
          } btn-custom`}
        >
          Salgados
        </button>
      </div>
      <div className="menu-items">{getItemsByCategory()}</div>
    </div>
  );
};

export default Menu;
