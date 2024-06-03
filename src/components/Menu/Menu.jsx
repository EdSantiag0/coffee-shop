import React from "react";
import MenuCategory from "./MenuCategory";
import {
  MenuCoffees,
  MenuDrinks,
  MenuCandy,
  MenuSavory,
} from "../../utils/data";

const Menu = () => {
  return (
    <div className="px-4 md:px-6 lg:px-16 font-sans">
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6 font-serif">
        Cardápio
      </h2>
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
    </div>
  );
};

export default Menu;
