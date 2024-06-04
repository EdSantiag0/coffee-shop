import React from "react";

const MenuCategory = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xl md:text-3xl font-bold mb-4">{title}</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
        {items.map((item, index) => (
          <li key={index} className="bg-white flex p-4 rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-lg mb-2 font-semibold">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.ingredients}</p>
              <p className="text-gray-800 font-bold">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
