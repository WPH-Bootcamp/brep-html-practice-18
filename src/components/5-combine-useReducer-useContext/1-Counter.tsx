import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

const CounterGlobal = () => {
  const context = useContext(CounterContext);
  if (!context) return null;
  const { count, dispatch } = context;
  return (
    <div>
      <h1>Combine UseReducer + useContext</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterGlobal;
