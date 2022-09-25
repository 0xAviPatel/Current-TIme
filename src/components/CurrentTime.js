import React, { useState } from "react";

const CurrentTime = () => {
  const date = new Date();

  const hour = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const [time, setTime] = useState(hour);

  return (
    <div>
      <h2>{time}</h2>
      <button onClick={() => setTime(hour)}>Set Current Time</button>
      {console.log(time)}
    </div>
  );
};

export default CurrentTime;
