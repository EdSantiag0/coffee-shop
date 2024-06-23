import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Hero from "./Hero";

export default function CheckOpen() {
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
    <div>
      <Hero closed={closed} />
    </div>
  );
}
