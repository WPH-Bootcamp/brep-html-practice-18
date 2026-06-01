import {
  type Dispatch,
  createContext,
  type ReactNode,
  useReducer,
} from "react";

export type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

type CounterContextType = {
  count: number;
  dispatch: Dispatch<Action>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType | null>(null);

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
