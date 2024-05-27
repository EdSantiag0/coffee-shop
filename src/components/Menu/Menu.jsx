import React from "react";
import {
  MenuCoffees,
  MenuDrinks,
  MenuCandy,
  MenuSavory,
} from "../../utils/data";

const Menu = ({ skills }) => {
  return (
    <div className="px-4 md:px-6 lg:px-16">
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6">
        Cardápio
      </h2>
      <section id="coffee">
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
                    <div className="flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.coffee}
                        className="w-40 h-40 object-cover rounded-md "
                      />
                    </div>

                    <div className="ml flex-grow m-2">
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
      <hr className="border-t border-gray-300 my-8" />
      <section id="drinks">
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
                    <div className="flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.drink}
                        className="w-40 h-40 object-cover rounded-md mb-2"
                      />
                    </div>
                    <div className="ml flex-grow m-2">
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
      <hr className="border-t border-gray-300 my-8" />
      <section id="candy">
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
                    <div className="flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.candy}
                        className="w-40 h-40 object-cover rounded-md mb-2"
                      />
                    </div>
                    <div className="ml flex-grow m-2">
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
      <hr className="border-t border-gray-300 my-8" />
      <section id="savory">
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
                    <div className="flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.savory}
                        className="w-40 h-40 object-cover rounded-md mb-2"
                      />
                    </div>
                    <div className="ml flex-grow m-2">
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
