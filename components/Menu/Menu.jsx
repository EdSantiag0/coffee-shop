import React from "react";
import {
  MenuCoffees,
  MenuDrinks,
  MenuCandy,
  MenuSavory,
} from "../../utils/data";

const Menu = ({ skills }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6">
        Cardápio
      </h2>
      <section>
        <main className="flex">
          {MenuCoffees.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-bold  m-8">{category.title}</h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
                {category.skills.map((item, index) => (
                  <li
                    className="bg-white flex p-4 rounded-lg shadow-md "
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt={item.coffee}
                      className="w-40 h-40 object-cover rounded-md mb-2"
                    />
                    <div className="m-6">
                      <h3 className="text-lg mb-2 font-semibold">
                        {item.coffee}
                      </h3>
                      <p className="text-gray-600 mb-2 ">{item.ingredients}</p>
                      <p className="text-gray-800 font-bold">{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>

      <section>
        <main className="flex">
          {MenuDrinks.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-bold  m-8">{category.title}</h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
                {category.skills.map((item, index) => (
                  <li
                    className="bg-white flex p-4 rounded-lg shadow-md "
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt={item.drink}
                      className="w-40 h-40 object-cover rounded-md mb-2"
                    />
                    <div className="m-6">
                      <h3 className="text-lg mb-2 font-semibold">
                        {item.drink}
                      </h3>
                      <p className="text-gray-600 mb-2 ">{item.ingredients}</p>
                      <p className="text-gray-800 font-bold">{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>

      <section>
        <main className="flex">
          {MenuCandy.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-bold  m-8">{category.title}</h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
                {category.skills.map((item, index) => (
                  <li
                    className="bg-white flex p-4 rounded-lg shadow-md "
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt={item.candy}
                      className="w-40 h-40 object-cover rounded-md mb-2"
                    />
                    <div className="m-6">
                      <h3 className="text-lg mb-2 font-semibold">
                        {item.candy}
                      </h3>
                      <p className="text-gray-600 mb-2 ">{item.ingredients}</p>
                      <p className="text-gray-800 font-bold">{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>

      <section>
        <main className="flex">
          {MenuSavory.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-bold  m-8">{category.title}</h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
                {category.skills.map((item, index) => (
                  <li
                    className="bg-white flex p-4 rounded-lg shadow-md "
                    key={index}
                  >
                    <img
                      src={item.img}
                      alt={item.savory}
                      className="w-40 h-40 object-cover rounded-md mb-2"
                    />
                    <div className="m-6">
                      <h3 className="text-lg mb-2 font-semibold">
                        {item.savory}
                      </h3>
                      <p className="text-gray-600 mb-2 ">{item.ingredients}</p>
                      <p className="text-gray-800 font-bold">{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default Menu;
