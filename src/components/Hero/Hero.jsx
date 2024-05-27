import React, { useState, useEffect } from "react";

const Hero = () => {
  const [bgColor, setBgColor] = useState("bg-green-600");

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      const currentTime = hours * 60 + minutes;
      const startTime = 13 * 60 + 30;
      const endTime = 19 * 60;

      if (currentTime < startTime || currentTime > endTime) {
        setBgColor("bg-red-600");
      } else {
        setBgColor("bg-green-600");
      }
    };

    checkTime();
    const intervalId = setInterval(checkTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="home"
      className="relative h-[60vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('./images/coffee-beans.jpg')" }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 flex flex-col items-center">
        <img
          src="./images/coffee-cup.jpg"
          alt="Coffe Cup"
          className="h-40 w-40 mt-10 rounded-full shadow-lg object-cover hover:scale-110 duration-200"
        />
        <h1 className="text-white text-4xl mt-5 mb-2 font-bold ">
          Coffee Shop
        </h1>
        <span className="text-white font-medium">
          Rua ficticia, Gramado - RS
        </span>
        <span
          className={`${bgColor} px-4 py-1 rounded-l mt-4 text-white font-medium`}
          id="date-span"
        >
          Ter a Dom - 13:30 as 19:00
        </span>
      </div>
    </div>
  );
};

export default Hero;
