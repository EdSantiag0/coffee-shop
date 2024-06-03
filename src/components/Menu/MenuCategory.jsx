import React from "react";

const MenuCategory = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xl md:text-3xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div key={index} className="menu-item border rounded-lg p-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-bold">{item.name}</h4>
            <p>{item.ingredients}</p>
            <p className="font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
