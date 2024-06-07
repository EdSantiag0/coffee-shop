import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

const Hero = () => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const checkOpen = () => {
      const now = DateTime.now();
      const hours = now.hour;
      const minutes = now.minute;

      const currentTime = hours * 60 + minutes;
      const startTime = 13 * 60 + 30;
      const endTime = 19 * 60;

      if (
        now.weekday === 7 ||
        currentTime < startTime ||
        currentTime > endTime
      ) {
        setClosed(true);
      } else {
        setClosed(false);
      }
    };

    checkOpen();
    const intervalId = setInterval(checkOpen, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="home"
      className="relative h-[60vh] w-full bg-cover font-sans"
      style={{ backgroundImage: "url('./images/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center">
        <img
          src="./images/coffee-cup-main.png"
          alt="Coffe Cup"
          className="h-40 w-40 mt-5  hover:scale-110 duration-200"
        />
        <h1 className="text-white text-4xl mt-5 mb-2 font-bold ">
          Coffee Shop
        </h1>
        <span className="text-white font-medium ">
          Rua ficticia, Gramado - RS
        </span>
        <span
          className={`${
            closed ? "bg-red-500" : "bg-green-500"
          } px-4 py-1 rounded-l mt-4 text-white font-medium`}
          id="date-span"
        >
          Ter à Dom - 13:30 as 19:00
        </span>
      </div>
    </div>
  );
};

export default Hero;
