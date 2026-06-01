import { useContext } from "react";

import { Counter } from "./components/1-useReducer (counter)";
import { BioForm } from "./components/2-useReducer (form)";
import { Child } from "./components/3-useContext (theme)";
import { Profile } from "./components/4-useContext (auth)";
import {
  CounterGlobal,
  CounterDisplay,
} from "./components/5-combine-useReducer-useContext";

import { ThemeContext } from "./components/3-useContext (theme)/context/ThemeContext";
import { AuthContext } from "./components/4-useContext (auth)/context/AuthContext";

const App = () => {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  if (!themeContext) return null;
  if (!authContext) return null;

  const { theme, toggleTheme } = themeContext;
  const { user, login, logout } = authContext;

  return (
    <div style={{ height: "200dvh" }}>
      <h1>Materi Class 18</h1>

      {/* Materi 1 - useReducer (Counter) */}
      <Counter />

      {/* Materi 2 - useReducer (Form) */}
      <BioForm />

      {/* Materi 3 - useContext (theme) */}
      <div style={{ background: theme === "dark" ? "black" : "white" }}>
        <h2 style={{ color: theme === "dark" ? "white" : "black" }}>
          Theme Context
        </h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child />
      </div>

      {/* Materi 4 - useContext (auth) */}
      <div>
        <h2>Auth Context</h2>
        <button onClick={user ? logout : login}>
          {user ? "Logout" : "Login"}
        </button>
        <Profile />
      </div>

      {/* Materi 5 - Combine useReducer + useContext */}
      <div>
        <h2>Mini Global Store (useReducer + useContext)</h2>
        <CounterGlobal />
        <CounterDisplay />
      </div>
    </div>
  );
};

export default App;
