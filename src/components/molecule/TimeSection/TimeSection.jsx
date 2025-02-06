import { useState, useEffect } from "react";

function TimeSection() {
  const [currentTime, setCurrentTime] = useState({
    time: "",
    day: "",
    dayOfMonth: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const day = now.toLocaleDateString("en-US", { weekday: "short" });
      const dayOfMonth = now.getDate();
      setCurrentTime({ time, day, dayOfMonth });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="time">
        <div className="wrapper">
          <p>
            {currentTime.day} {currentTime.dayOfMonth}
          </p>
          <h1>{currentTime.time}</h1>
        </div>
      </div>
    </>
  );
}

export default TimeSection;