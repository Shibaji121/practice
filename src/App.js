import { useContext, useMemo, useState } from "react";
import "./App.css";
import Higher from "./Higher";
import { MyContext } from "./ExampleContext";
import useTheme from "./useTheme";
import StarPattern from "./StarPattern";
import SearchBox from "./SearchBox";

function App(props) {
  const [count, setCount] = useState(0);
  const cont = useContext(MyContext);
  const { theme, toggleTheme } = useTheme();

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
      <p>Came From Context: {cont.name}</p>
      <p>Current Theme is: {theme}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={toggleTheme}>Change The Theme</button>
      <StarPattern limit={3} />
      <SearchBox />
    </div>
  );
}

export default Higher(App);
