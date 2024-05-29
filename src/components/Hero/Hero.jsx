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
      className="relative h-[60vh] w-full bg-cover"
      style={{ backgroundImage: "url('./images/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center">
        <img
          src="./images/coffee-cup-main.png"
          alt="Coffe Cup"
          className="h-60 w-60 mt-5  hover:scale-110 duration-200"
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
