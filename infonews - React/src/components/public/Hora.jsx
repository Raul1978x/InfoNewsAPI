import React, { useEffect, useState } from "react";

function Hora() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return currentTime.toLocaleTimeString();
}

export default Hora;
