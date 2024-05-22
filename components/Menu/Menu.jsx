import React from "react";
import { ItemsMenu } from "../../utils/data";

const Menu = ({ skills }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6">
        Cardápio
      </h2>
      <section>
        <main>
          {ItemsMenu.map((category) => (
            <div key={category.title}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((item, index) => (
                  <li key={index}>
                    <span>{item.coffee}</span>
                    <span>{item.ingredients}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>
      <section>
        <h3>Bebidas</h3>
      </section>
      <section>
        <h3>Doces</h3>
      </section>
      <section>
        <h3>Salgados</h3>
      </section>
    </div>
  );
};

export default Menu;
