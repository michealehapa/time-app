import React, { useState } from "react";

function App() {

  setInterval(upDateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function upDateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    
   
  };
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={upDateTime}>The time is</button>
      {/* <button onClick={upDateTime}>Get Time</button> */}
    </div>
  );
}

export default App;