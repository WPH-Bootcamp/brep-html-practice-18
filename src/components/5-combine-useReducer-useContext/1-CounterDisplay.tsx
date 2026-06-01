import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

const CounterDisplay = () => {
  const context = useContext(CounterContext);

  if (!context) return null;

  return <h2>Shared Count : {context.count}</h2>;
};

export default CounterDisplay;
