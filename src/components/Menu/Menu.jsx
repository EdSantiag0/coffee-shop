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
        return [{ title: "Cafés", items: MenuCoffees }];
      case "drinks":
        return [{ title: "Bebidas", items: MenuDrinks }];
      case "candy":
        return [{ title: "Doces", items: MenuCandy }];
      case "savory":
        return [{ title: "Salgados", items: MenuSavory }];
      case "all":
        return [
          { title: "Cafés", items: MenuCoffees },
          { title: "Bebidas", items: MenuDrinks },
          { title: "Doces", items: MenuCandy },
          { title: "Salgados", items: MenuSavory },
        ];
      default:
        return [];
    }
  };

  const categories = getItemsByCategory();

  return (
    <div className="px-4 md:px-6 lg:px-16 font-sans">
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6 font-serif">
        Cardápio
      </h2>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setCategoryFilter("all")}
          className="px-4 py-2  text-white bg-[rgba(120,60,0,0.8)] rounded-md hover:bg-[rgba(175,115,55,0.8)] transition-colors"
        >
          All
        </button>
        <button
          onClick={() => setCategoryFilter("coffees")}
          className="px-4 py-2 text-white bg-[rgba(120,60,0,0.8)] rounded-md hover:bg-[rgba(175,115,55,0.8)] transition-colors"
        >
          Coffees
        </button>
        <button
          onClick={() => setCategoryFilter("drinks")}
          className="px-4 py-2  text-white bg-[rgba(120,60,0,0.8)] rounded-md hover:bg-[rgba(175,115,55,0.8)] transition-colors"
        >
          Drinks
        </button>
        <button
          onClick={() => setCategoryFilter("candy")}
          className="px-4 py-2  text-white bg-[rgba(120,60,0,0.8)] rounded-md hover:bg-[rgba(175,115,55,0.8)] transition-colors"
        >
          Candy
        </button>
        <button
          onClick={() => setCategoryFilter("savory")}
          className="px-4 py-2  text-white bg-[rgba(120,60,0,0.8)] rounded-md hover:bg-[rgba(175,115,55,0.8)] transition-colors"
        >
          Savory
        </button>
      </div>

      <div className="menu-items">
        {categories.map((category, index) => (
          <div key={index}>
            <MenuCategory title={category.title} items={category.items} />
            {index < categories.length - 1 && (
              <hr className="border-t border-gray-300 my-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
