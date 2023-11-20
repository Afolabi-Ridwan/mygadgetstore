import React, { useState, useEffect } from 'react';
import "./timecounter.css"

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTimeLeft = () => {
    const targetDate = new Date('2028-12-31'); 

    const difference = targetDate - new Date();
    const remainingDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((difference % (1000 * 60)) / 1000);

    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timecounter'>
      <p> <span> -{days}</span> days</p>
      <p> <span>-{hours}</span>hours</p>
      <p><span> -{minutes} </span> minutes</p>
      <p><span> -{seconds} </span> seconds</p>
    </div>
  );
};

export default CountdownTimer;
