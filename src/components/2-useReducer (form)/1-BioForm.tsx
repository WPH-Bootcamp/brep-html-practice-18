import { useReducer } from "react";

type State = {
  name: string;
  email: string;
};

type Action =
  | { type: "set_name"; payload: string }
  | { type: "set_email"; payload: string };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set_name":
      return { ...state, name: action.payload };
    case "set_email":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const initialValue = {
  name: "",
  email: "",
};

const BioForm = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Materi 2 - useReducer (Form)</h1>

      <input
        type="text"
        placeholder="Input your Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "set_name", payload: e.target.value })
        }
      />
      <br />
      <input
        type="email"
        placeholder="Input your Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "set_email", payload: e.target.value })
        }
      />

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default BioForm;
