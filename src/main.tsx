import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/3-useContext (theme)/context/ThemeContext.tsx";
import { AuthProvider } from "./components/4-useContext (auth)/context/AuthContext.tsx";
import { CounterProvider } from "./components/5-combine-useReducer-useContext/context/CounterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
