import '../styles/Timer.css'
import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className='Timer'>
      <p>Current time:</p>
      <p>{hours}:{minutes}:{seconds}</p>
    </div>
  );
}

export default Clock;
