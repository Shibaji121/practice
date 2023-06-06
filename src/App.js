import { useMemo, useState } from "react";
import "./App.css";
import Higher from "./Higher";

function App(props) {
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
      <p>Came from HOC: {props.value}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Higher(App);
