import React, { useEffect, useState } from "react";

const Countdown = ({ expiryDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  function calculateTimeRemaining() {
    return expiryDate - Date.now();
  }

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining <= 0) {
        clearInterval(countDownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countDownInterval);
    };
  }, [expiryDate]);

  const secondsRemaining = Math.max(Math.floor(timeRemaining / 1000) % 60, 0);
  const minutesRemaining = Math.max(
    Math.floor(timeRemaining / 1000 / 60) % 60,
    0
  );
  const hoursRemaining = Math.max(
    Math.floor(timeRemaining / 1000 / 60 / 60),
    0
  );

  if (timeRemaining <= 0) {
    return (
      <div className="de_countdown" style={{ borderColor: "#8364e2" }}>
        EXPIRED
      </div>
    );
  }

  return (
    <div className="de_countdown" style={{ borderColor: "#8364e2" }}>
      {hoursRemaining}h {minutesRemaining}m {secondsRemaining}s
    </div>
  );
};

export default Countdown;
