import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(50);
  const intervalref = useRef(null);

  useEffect(() => {
    if (second === 59) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }
  }, [second]);

  const handleStart = () => {
    intervalref.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalref.current);
  };

  const handleReset = () => {
    setSecond(0);
    setMinute(0);
    clearInterval(intervalref.current);
  };

  return (
    <div className="App">
      <h1>Shibaji</h1>
      <div className="timer">
        <span className="minute">{minute.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span className="second">{second.toString().padStart(2, "0")}</span>
      </div>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
