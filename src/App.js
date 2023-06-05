import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const doubledCount = useMemo(() => {
    console.log("Expensive computation");
    return count * 2;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
